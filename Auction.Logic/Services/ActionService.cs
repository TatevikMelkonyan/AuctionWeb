using Auction.DataAccess;
using Auction.DataAccess.Entities;
using Auction.Logic.Interfaces;
using Auction.Logic.Models;
using Auction.Logic.ServerHub;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.ExceptionServices;
using System.Threading.Tasks;

namespace Auction.Logic.Services
{
    public class ActionService: IAuction
    {
        private readonly ApplicationDbContext _dbContext;
        private readonly IHubContext<AuctionHub> _auctionHub;
        private readonly IUnitOfWork _unitOfWork;
        public ActionService(ApplicationDbContext dbContext, IUnitOfWork unitOfWork)
        {
            _dbContext = dbContext;
            _unitOfWork = unitOfWork;
        }

        public async Task<ProductModel> GetProductAsync(int id)
        {
            Product product = await _unitOfWork.Products.FindAsync(id.ToString());
            return new ProductModel(product.Id,
                product.Name, product.Description, product.Price, product.SellerPrice, product.ImgUrl, product.BidUsers.Where(bu => bu.ProductId == product.Id).LastOrDefault().User.Name);
        }
        public async Task<PaginationResult<ProductModel>> GetProductsAsync(string searchTerm, int pageIndex, int pageSize)
        {
            IEnumerable<Product> products = await _unitOfWork.Products.FindAllAsync(p => p.Name.Contains(searchTerm));
            var count = products.Count();
            var items = products.Skip(pageIndex * pageSize).Take(pageSize).Select(p => new ProductModel(p.Id,
                p.Name, p.Description, p.Price, p.MaxPrice, p.ImgUrl,p.BidUsers.Where(bu=>bu.ProductId==p.Id).LastOrDefault().User.Name)).ToList();

            return new PaginationResult<ProductModel>(items, count);
        }
    }
}
