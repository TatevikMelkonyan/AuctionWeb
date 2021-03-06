using Auction.API.Helpers;
using Auction.Logic.Interfaces;
using Auction.Logic.Models;
using AuctionWebAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AuctionWebAPI.Controllers
{
    //[Authorize]
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IAuction _auction;
        public ProductController(IAuction auction)
        {
            _auction = auction;
        }

        [HttpGet("{id}")]
        public async Task<ProductModel> GetProduct(int id)
        {
            return await _auction.GetProductAsync(id);
        }

        [HttpGet]
        public async Task<PaginationResult<ProductModel>> GetProducts(string searchTerm = "", int pageIndex = 0, int pageSize = 10)
        {
            return await _auction.GetProductsAsync(searchTerm, pageIndex, pageSize);
        }
    }
}
