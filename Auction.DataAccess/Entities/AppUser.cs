using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;

namespace Auction.DataAccess.Entities
{
    public class AppUser : IdentityUser
    {
        public AppUser()
        {
            Products = new HashSet<ProductBidUser>();
        }

        public string Name { get; set; }
        public decimal Balance { get; set; }
        public virtual ICollection<ProductBidUser> Products  { get; set; }

    }
}
