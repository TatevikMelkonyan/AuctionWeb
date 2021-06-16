using Auction.DataAccess.Entities;
using Auction.Logic.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Auction.Logic.Interfaces
{
    public interface IAuction
    {
        Task<ProductModel> GetProductAsync(int id);
        Task<PaginationResult<ProductModel>> GetProductsAsync(string searchTerm, int pageIndex, int pageSize);
    }
}
