using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;

namespace Auction.DataAccess.Entities
{
    public class BaseEntity
    {
        public int Id { get; set; }
        public string CreatedByUserId { get; set; }
        public AppUser CreatedByUser { get; set; }
        public string UpdatedByUserId { get; set; }
        public AppUser UpdatedByUser { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime UpdateddDate { get; set; }
    }
}
