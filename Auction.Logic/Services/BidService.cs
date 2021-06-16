using Auction.DataAccess;
using Auction.DataAccess.Entities;
using Auction.Logic.Interfaces;
using Auction.Logic.Models;
using Auction.Logic.ServerHub;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Auction.Logic.Services
{
    public class BidService :IBid
    {
        private readonly ApplicationDbContext _dbContext;
        private readonly IHubContext<AuctionHub> _hubContext;
        public BidService(ApplicationDbContext dbContext, IHubContext<AuctionHub> hubContext)
        {
            _hubContext = hubContext;
            _dbContext = dbContext;
        }
        public async Task MakeBid(BiddingModel model, string userId)
        {
            Product product = new Product();
            product = _dbContext.Products.Find(model.ProductId);
            if (IsThereAnyOffer(model.ProductId))
            {
                decimal highestBid = GetHighestBid(model.ProductId);
                if (model.Amount <= highestBid || model.Amount <= product.Price)
                    throw new Exception("Your request failed");
                else
                {
                    var now = DateTime.UtcNow;
                    product.UpdateddDate = DateTime.UtcNow;
                    product.Price = model.Amount;
                    product.UpdatedByUserId = "a9b926b4-c1c1-4299-bd86-18da6694b371";//id;

                    await _dbContext.SaveChangesAsync();
                    await _hubContext.Clients.All.SendAsync("NewBid", $"Currently the highest bid: <strong>${model.Amount}</strong>", model.ProductId);
                    await _hubContext.Clients.All.SendAsync("AddOffer", new
                    {
                        Amount = model.Amount,
                        Time = now
                    });
                }
            }
            else
            {
                if (model.Amount > product.Price)
                {
                    var now = DateTime.UtcNow;
                    product.UpdateddDate = DateTime.UtcNow;
                    product.Price = (decimal)model.Amount;
                    product.UpdatedByUserId = "3678e88b-0e17-4e90-9a21-4d01ef8172c1";//id;
                    _dbContext.Update(product);

                    await _dbContext.SaveChangesAsync();
                    await _hubContext.Clients.All.SendAsync("NewBid", $"Currently the highest bid: <strong>${model.Amount}</strong>", model.ProductId);
                    await _hubContext.Clients.All.SendAsync("AddOffer", new
                    {
                        Amount = model.Amount,
                        Time = now
                    });
                }
            }
        }


        public decimal GetStartingPrice(int productId)
        {
            return _dbContext.Products.Where(product => product.Id == productId).Select(product => product.Price).Single();
        }
        public decimal GetHighestBid(int auctId)
        {
            if (IsThereAnyOffer(auctId))
                return _dbContext.Products.Where(p => p.Id == auctId).Select(p => p.Price).FirstOrDefault();
            else
                return 0;
        }
        public bool IsThereAnyOffer(int auctionId)
        {
            return _dbContext.Products.Where(p => p.Id == auctionId).Any();
        }
    }
}
