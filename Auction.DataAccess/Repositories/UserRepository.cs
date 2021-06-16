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
    public class UserRepository : IRepository<AppUser>
    {
        private ApplicationDbContext _db;
        public UserRepository(ApplicationDbContext db)
        {
            _db = db;
        }
        public async Task<IEnumerable<AppUser>> FindAllAsync(Expression<Func<AppUser, bool>> predicate)
        {
            return await _db.Users.AsNoTracking().Where(predicate).OrderBy(u => u.Id).ToListAsync();
        }

        public async Task<AppUser> FindAsync(string id)
        {
            return await _db.Users.FindAsync(id); ;
        }

        public void Update(AppUser user)
        {
            _db.Entry(user).State = EntityState.Modified;
        }
    }
}
