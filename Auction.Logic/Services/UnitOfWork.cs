using Auction.DataAccess;
using Auction.DataAccess.Entities;
using Auction.Logic.Interfaces;
using Microsoft.EntityFrameworkCore.Storage;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Auction.Logic.Services
{
    public class UnitOfWork : IUnitOfWork, IDisposable
    {
        private ApplicationDbContext _db;
        private IRepository<Product> _productRepository;
        private IRepository<AppUser> _userRepository;
        public UnitOfWork(ApplicationDbContext db)
        {
            _db = db;
        }


        public IRepository<Product> Products => _productRepository ?? (_productRepository = new ProductRepository(_db));

        public IRepository<AppUser> Users => _userRepository ?? (_userRepository = new UserRepository(_db));



        private bool _disposed = false;

        public virtual void Dispose(bool disposing)
        {
            if (_disposed)
                return;

            if (disposing)
            {
                _db.Dispose();
            }

            _disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        public async Task SaveAsync()
        {
            await _db.SaveChangesAsync();
        }
    }
}
