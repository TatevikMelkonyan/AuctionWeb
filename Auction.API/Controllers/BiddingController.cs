﻿using System;
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
    [Route("api/bidding")]
    [ApiController]
    public class BiddingController : ControllerBase
    {
        private SignInManager<AppUser> _signInManager;
        private readonly IHubContext<AuctionHub> _hubContext;
        private readonly IBid _bid;

        public BiddingController(SignInManager<AppUser> signinManager
            ,IBid bid)
        {
            _signInManager = signinManager;
            _bid = bid;
        }

        // [Authorize]
        [HttpPost]
        //[Route("bidding")]
        public async Task<IActionResult> Bid([FromBody] BiddingModel model)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    string id = _signInManager.UserManager.GetUserId(User);
                    await _bid.MakeBid(model, id);
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