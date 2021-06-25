using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Auction.Logic.Models
{
    public class ProductModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string ImageFileName { get; set; }
        public decimal Price { get; set; }
        public decimal SellerPrice { get; set; }
        public decimal MaxPrice { get; set; }
        public string Bidder { get; set; }
        public DateTime ActiveTime { get; set; }
        public ProductModel()
        {

        }
        public ProductModel(int id, string name, string description, decimal price, decimal sellerPrice, string imageFileName,DateTime dateTime)
        {
            Id = id;
            Name = name;
            Description = description;
            Price = price;
            SellerPrice = price;
            ImageFileName = imageFileName;
            ActiveTime = dateTime;
        }
    }
}
