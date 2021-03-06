using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Auction.Logic.ServerHub
{
    public class AuctionHub:Hub
    {
        public override async Task OnConnectedAsync()
        {
            if (this.Context.User.Identity.IsAuthenticated)
            {
                await Groups.AddToGroupAsync(Context.ConnectionId, "Authenticated Users");
            }
            else
            {
                await Groups.AddToGroupAsync(Context.ConnectionId, "Unauthenticated Users");
            }
            await base.OnConnectedAsync();
        }

        public override async Task OnDisconnectedAsync(Exception exception)
        {
            if (this.Context.User.Identity.IsAuthenticated)
            {
                await Groups.RemoveFromGroupAsync(Context.ConnectionId, "Authenticated Users");
            }
            else
            {
                await Groups.RemoveFromGroupAsync(Context.ConnectionId, "Unauthenticated Users");
            }
            await base.OnDisconnectedAsync(exception);
        }

        public async Task SendAsync(int productId, decimal price)
        {
            await Clients.All.SendAsync("NewBid", productId, price);
        }
    }
}
