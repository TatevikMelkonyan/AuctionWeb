using Auction.DataAccess.Entities;
using Microsoft.EntityFrameworkCore.Storage;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Auction.Logic.Interfaces
{
    public  interface IUnitOfWork
    {
        IRepository<Product> Products { get; }
        IRepository<AppUser> Users { get; }
        void Dispose();
        void Dispose(bool disposing);
        Task SaveAsync();
    }
}
