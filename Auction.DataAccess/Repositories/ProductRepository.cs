using Auction.DataAccess;
using Auction.DataAccess.Entities;
using Auction.Logic.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Auction.Logic.Services
{
    public class ProductRepository : IRepository<Product>
    {
        private ApplicationDbContext _db;
        public ProductRepository(ApplicationDbContext db)
        {
            _db = db;
        }
        public async Task<IEnumerable<Product>> FindAllAsync(Expression<Func<Product, bool>> predicate)
        {
            return await _db.Products.AsNoTracking().Where(predicate).OrderBy(p => p.Id).ToListAsync();
        }

        public async Task<Product> FindAsync(string id)
        {
            return await _db.Products.SingleOrDefaultAsync(p => p.Id == Convert.ToInt32(id));
        }
        public void Update(Product product)
        {
            _db.Entry(product).State = EntityState.Modified;
        }
    }
}
