using System;
using System.Collections.Generic;
using System.Text;

namespace Auction.Logic.Models
{
    public class BiddingModel
    {
        public string UserId { get; set; }
        public decimal Amount { get; set; }
        public bool AutomaticBid { get; set; }
        public int ProductId { get; set; }
    }
}
