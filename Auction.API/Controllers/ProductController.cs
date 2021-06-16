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
    [Route("api/products")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IAuction _auction;
        public ProductController(IAuction auction)
        {
            _auction = auction;
        }

        [HttpGet("{id}")]
        public async Task<ProductModel> GetProduct(int id) => await _auction.GetProductAsync(id);

        //[HttpGet("products")]
        public async Task<PaginationResult<ProductModel>> GetProducts(string searchTerm = "", int pageIndex = 0, int pageSize = 10) => await _auction.GetProductsAsync(searchTerm, pageIndex, pageSize);
    

        //public IActionResult GetAall()
        //{
        //    var products = _auction.GetAll();
        //    var model = new List<ProductModel>();
        //    if(products!=null)
        //    {
        //        foreach(var item in products)
        //        {
        //            model.Add(new ProductModel
        //            {
        //                Name = item.Name,
        //                Description = item.Description,
        //                Price = item.Price,
        //                MaxPrice = item.MaxPrice,
        //                ActiveTime = item.ActiveTime,
        //                ImageFileName = item.ImgUrl,
        //            });
        //        }
        //    }
        //    return Ok();
        //}
    }
}
