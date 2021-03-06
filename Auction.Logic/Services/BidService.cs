using Auction.DataAccess;
using Auction.DataAccess.Entities;
using Auction.Logic.Interfaces;
using Auction.Logic.Models;
using Auction.Logic.ServerHub;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Auction.Logic.Services
{
    public class BidService : IBidService
    {
        private readonly IRepository<Product> _productRepository;
        private readonly IHubContext<AuctionHub> _hubContext;
        public BidService(IRepository<Product> productRepository, IHubContext<AuctionHub> hubContext)
        {
            _hubContext = hubContext;
            _productRepository = productRepository;
        }
        public async Task MakeBid(BiddingModel model)
        {
            Product product = new Product();
            product = await _productRepository.GetByIdAsync(model.ProductId);


            if (await IsThereAnyOffer(model.ProductId))
            {
                decimal highestBid = await GetHighestBid(model.ProductId);

                if (model.AutomaticBid)
                {
                    product.UpdateddDate = DateTime.UtcNow;
                    product.Price = product.Price + 1;
                    product.UpdatedByUserId = model.UserId;

                    await _productRepository.Update(product);

                     _= _hubContext.Clients.All.SendAsync("NewBid", product.Price);
                }
                else
                {

                    if (model.Amount <= highestBid || model.Amount <= product.Price)
                        throw new Exception("Your request failed");
                    else
                    {
                        product.UpdateddDate = DateTime.UtcNow;
                        product.Price = model.Amount;
                        product.UpdatedByUserId = model.UserId;

                       await _productRepository.Update(product);

                        _= _hubContext.Clients.All.SendAsync("NewBid", product.Price);
                    }
                }
            }
            else
            {
                if (model.Amount > product.Price)
                {
                    product.UpdateddDate = DateTime.UtcNow;
                    product.Price = (decimal)model.Amount;
                    product.UpdatedByUserId = model.UserId;
                    await _productRepository.Update(product);

                    await _hubContext.Clients.All.SendAsync("NewBid", product.Price);
                }
            }
        }


        public async Task<decimal> GetStartingPrice(int productId)
        {
            return await _productRepository.GetAll(product => product.Id == productId).Select(product => product.Price).SingleAsync();
        }
        public async Task<decimal> GetHighestBid(int auctId)
        {
            if (await IsThereAnyOffer(auctId))
                return _productRepository.GetAll(p => p.Id == auctId).Select(p => p.Price).FirstOrDefault();
            else
                return 0;
        }
        public async Task<bool> IsThereAnyOffer(int auctionId)
        {
            return await _productRepository.GetAll(p => p.Id == auctionId).AnyAsync();
        }
    }
}
