using Microsoft.AspNetCore.Identity;

namespace Auction.DataAccess.Entities
{
    public class ProductBidUser : BaseEntity
    {
        public string UserId { get; set; }
        public int ProductId { get; set; }
        public AppUser User { get; set; }
        public Product Product { get; set; }
    }
}
