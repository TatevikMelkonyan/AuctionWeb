using System;
using System.Collections.Generic;
using System.Text;

namespace Auction.DataAccess.Entities
{
    public class Configuration : BaseEntity
    {
        public TimeSpan BidPeriod { get; set; }
    }
}
