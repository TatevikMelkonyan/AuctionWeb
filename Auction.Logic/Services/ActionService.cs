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
using System.Runtime.ExceptionServices;
using System.Threading.Tasks;

namespace Auction.Logic.Services
{
    public class ActionService : IAuction
    {
        private readonly IRepository<Product> _productRepository;
        public ActionService(IRepository<Product> productRepository)
        {
            _productRepository = productRepository;
        }

        public async Task<ProductModel> GetProductAsync(int id)
        {
            Product product = await _productRepository.GetByIdAsync(id);
            return new ProductModel(product.Id,
                product.Name, product.Description, product.Price, product.SellerPrice, product.ImgUrl);
        }
        public async Task<PaginationResult<ProductModel>> GetProductsAsync(string searchTerm, int pageIndex, int pageSize)
        {
            var products = await _productRepository.GetAll(p => p.Name.Contains(searchTerm)).ToListAsync();

            var count = products.Count();
            var items = products.Skip(pageIndex * pageSize).Take(pageSize)
                                           .Select(p => new ProductModel
                                                                       (
                                                                           p.Id,
                                                                           p.Name,
                                                                           p.Description,
                                                                           p.Price,
                                                                           p.MaxPrice,
                                                                           p.ImgUrl
                                                                       )
                                           ).ToList();
            return new PaginationResult<ProductModel>(items, count);
        }
    }
}
