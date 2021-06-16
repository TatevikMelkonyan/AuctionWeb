using Auction.DataAccess.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Auction.DataAccess
{
    public class ApplicationDbContext : IdentityDbContext<AppUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
         : base(options)
        {

        }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<ProductBidUser>()
                .HasOne(x => x.Product)
                .WithMany(x => x.BidUsers)
                .HasForeignKey(x => x.ProductId)
                 .OnDelete(DeleteBehavior.Cascade);

            builder.Entity<AppUser>()
                .HasMany(x => x.Products)
                .WithOne(x => x.User)
                .HasForeignKey(x => x.UserId)
                .OnDelete(DeleteBehavior.Cascade);

            base.OnModelCreating(builder);
        }
        public DbSet<Product> Products { get; set; }
        public DbSet<Configuration> Configurations { get; set; }
    }
}
