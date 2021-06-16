using Auction.API.Helpers;
using Auction.API.Models;
using AuctionWebAPI.Controllers;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Auction.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ErrorController : ControllerBase
    {
        protected readonly ILogger<ProductController> _logger;

        public ErrorController(ILogger<ProductController> logger)
        {
            _logger = logger;
        }
        [HttpPost("log")]
        public IActionResult Log(ErrorData errorData)
        {
            _logger.LogError("{0} {1}", StringHelper.ClientError, errorData.Message);
            return Ok();
        }
    }
}
