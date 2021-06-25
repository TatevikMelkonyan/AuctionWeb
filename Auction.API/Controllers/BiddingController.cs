using System;
using System.Threading.Tasks;
using Auction.DataAccess;
using Auction.DataAccess.Entities;
using Auction.Logic.Interfaces;
using Auction.Logic.Models;
using Auction.Logic.ServerHub;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;

namespace AuctionApp.Controllers
{
    //[Authorize]
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class BiddingController : ControllerBase
    {
        private SignInManager<AppUser> _signInManager;
        private readonly IBidService _bid;

        public BiddingController(SignInManager<AppUser> signinManager
            ,IBidService bid)
        {
            _signInManager = signinManager;
            _bid = bid;
        }

        [HttpPost]
        public async Task<IActionResult> Bid([FromBody] BiddingModel model)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    await _bid.MakeBid(model);
                    return Ok("You have made a new bid");
                }
                catch (Exception e)
                {
                    return BadRequest(e.Message);
                }
            
            }
            else
            {
                return BadRequest("Your data is invalid");
            }
        }
    }
}