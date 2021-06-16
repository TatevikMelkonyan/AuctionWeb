using Auction.Logic.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Auction.Logic.Interfaces
{
    public interface IBid
    {
        Task MakeBid(BiddingModel model, string userId);
        decimal GetStartingPrice(int productId);
        decimal GetHighestBid(int auctId);
        bool IsThereAnyOffer(int auctionId);
    }
}
