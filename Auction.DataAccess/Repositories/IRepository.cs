using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Auction.Logic.Interfaces
{
    public interface IRepository<T> where T : class
    {
        Task<IEnumerable<T>> FindAllAsync(Expression<Func<T, bool>> predicate);
        Task<T> FindAsync(string id);
        void Update(T item);
    }
}
