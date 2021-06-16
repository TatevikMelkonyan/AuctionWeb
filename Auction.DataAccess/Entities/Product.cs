using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Auction.DataAccess.Entities
{
    public class Product : BaseEntity
    {
        public Product()
        {
            BidUsers = new HashSet<ProductBidUser>();
        }
        public string Name { get; set; }
        public string Description { get; set; }
        public string ImgUrl { get; set; }
        public decimal Price { get; set; }
        public decimal SellerPrice { get; set; }
        public decimal MaxPrice { get; set; }
        public DateTime ActiveTime { get; set; }
        public virtual ICollection<ProductBidUser> BidUsers { get; set; }
    }
}
