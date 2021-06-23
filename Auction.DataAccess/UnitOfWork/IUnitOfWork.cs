using Auction.DataAccess.Entities;
using System;
using System.Threading.Tasks;

namespace Auction.DataAccess
{
    public interface IUnitOfWork : IDisposable
    {
        IRepository<TEntity> GetRepository<TEntity>() where TEntity : BaseEntity;
        Task CommitAsync();
    }
}
