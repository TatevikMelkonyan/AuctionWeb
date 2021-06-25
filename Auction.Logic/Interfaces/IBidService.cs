using Auction.Logic.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Auction.Logic.Interfaces
{
    public interface IBidService
    {
        Task MakeBid(BiddingModel model);
        Task<decimal> GetStartingPrice(int productId);
        Task<decimal> GetHighestBid(int auctId);
        Task<bool> IsThereAnyOffer(int auctionId);
    }
}
