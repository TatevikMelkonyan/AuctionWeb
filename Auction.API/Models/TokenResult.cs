using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Auction.API.Models
{
    public class TokenResult
    {
        public string UserId { get; set; }
        public string Token { get; set; }
        public string Role { get; set; }

        public TokenResult(string userId, string token, string role)
        {
            UserId = userId;
            Token = token;
            Role = role;
        }
    }
}
