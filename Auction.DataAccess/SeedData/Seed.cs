using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Auction.DataAccess.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace Auction.DataAccess.SeedData
{
    public static class Seed
    {
        public static async Task InitilizSeed(IServiceProvider serviceProvider)
        {
            using (var context = serviceProvider.GetService<ApplicationDbContext>())
            {
                await context.Database.EnsureCreatedAsync();
                #region Identity
                using (var userManager = serviceProvider.GetService<UserManager<AppUser>>())
                {
                    using (var roleManager = serviceProvider.GetService<RoleManager<IdentityRole>>())
                    {
                        if (!(await roleManager.Roles.AnyAsync()))
                        {

                            var adminRole = new IdentityRole
                            {
                                Name = "Admin"
                            };

                            var userRole = new IdentityRole
                            {
                                Name = "User"
                            };
                            await roleManager.CreateAsync(adminRole);
                            await roleManager.CreateAsync(userRole);
                        }
                    }

                    if (!(await userManager.Users.AnyAsync()))
                    {

                        var admin = new AppUser
                        {
                            Email = "admin@project.com",
                            UserName = "admin@project.com",
                            EmailConfirmed = true
                        };

                        var user = new AppUser
                        {
                            Email = "user@project.com",
                            UserName = "user@project.com",
                            EmailConfirmed = true
                        };

                        await userManager.CreateAsync(admin, "Password1!");
                        await userManager.CreateAsync(user, "Password1!");

                        await userManager.AddToRoleAsync(admin, "Admin");
                        await userManager.AddToRoleAsync(user, "User");
                    }
                }

                #endregion //Identity
                #region Product
                if (!await context.Products.AnyAsync())
                {
                    context.Products.Add(new Entities.Product
                    {
                        Name = "Tiffin's Golden Box",
                        Description = "Gift box made of gold, inlaid with diamonds",
                        ImgUrl = "1.jpg",
                        Price = 15,
                        MaxPrice = 98,
                        ActiveTime = DateTime.UtcNow.AddMinutes(15)
                    }); ;
                    context.Products.Add(new Entities.Product
                    {
                        Name = "Telescope",
                        Description = "Retro tools called theodolites measured angles when surveying land. Modern versions use GPS technology for more accurate readings",
                        ImgUrl = "2.jpg",
                        Price = 12,
                        MaxPrice = 80,
                        ActiveTime = DateTime.UtcNow.AddMinutes(15)
                    });
                    context.Products.Add(new Entities.Product
                    {
                        Name = "Car",
                        Description = "VINTAGE CRAFTS Showpiece Decorative Antique Gift Items Car Model",
                        ImgUrl = "3.jpg",
                        Price = 19,
                        MaxPrice = 98,
                        ActiveTime = DateTime.UtcNow.AddMinutes(15)
                    });
                    context.Products.Add(new Entities.Product
                    {
                        Name = "Old Clocks",
                        Description = "Clocks that represent a specific era and decorating style, such as Art Deco or Mid-Century Modern, are very popular with decorators and antique collectors.",
                        ImgUrl = "4.jpg",
                        Price = 25,
                        MaxPrice = 98,
                        ActiveTime = DateTime.UtcNow.AddMinutes(8)
                    });
                    context.Products.Add(new Entities.Product
                    {
                        Name = "ANTIQUE HAND DAGGER KNIFE",
                        Description = "A beautiful antique ritual dagger from South India, called a yali dagger with a engraved and curved steel blade and a brass handle",
                        ImgUrl = "5.jpg",
                        Price = 13,
                        MaxPrice = 72,
                        ActiveTime = DateTime.UtcNow.AddMinutes(15)
                    });
                    context.Products.Add(new Entities.Product
                    {
                        Name = "Vintage items",
                        Description = "Vintage items",
                        ImgUrl = "6.jpg",
                        Price = 15,
                        MaxPrice = 42,
                        ActiveTime = DateTime.UtcNow.AddMinutes(25)
                    });
                    context.Products.Add(new Entities.Product
                    {
                        Name = "Vintage items",
                        Description = "Vintage items",
                        ImgUrl = "7.jpg",
                        Price = 15,
                        MaxPrice = 68,
                        ActiveTime = DateTime.UtcNow.AddMinutes(35)
                    });
                    context.Products.Add(new Entities.Product
                    {
                        Name = "Antique Watch",
                        Description = "Antique Watch",
                        ImgUrl = "8.jpg",
                        Price = 15,
                        MaxPrice = 98,
                        ActiveTime = DateTime.UtcNow.AddMinutes(15)
                    });
                    context.Products.Add(new Entities.Product
                    {
                        Name = "Telephone",
                        Description = "Vintage Style Metal Home Decor Sign Bell Telephone",
                        ImgUrl = "9.jpg",
                        Price = 25,
                        MaxPrice = 78,
                        ActiveTime = DateTime.UtcNow.AddMinutes(45)
                    });
                    context.Products.Add(new Entities.Product
                    {
                        Name = "Old Antique Items",
                        Description = "Old Antique Items",
                        ImgUrl = "10.jpg",
                        Price = 15,
                        MaxPrice = 98,
                        ActiveTime = DateTime.UtcNow.AddMinutes(25)
                    });
                    context.Products.Add(new Entities.Product
                    {
                        Name = "Antiques items",
                        Description = "Antiques items - Gramophone Player Manufacturer from Roorkee",
                        ImgUrl = "11.jpg",
                        Price = 55,
                        MaxPrice = 98,
                        ActiveTime = DateTime.UtcNow.AddMinutes(17)
                    });
                    context.Products.Add(new Entities.Product
                    {
                        Name = "Antique watch",
                        Description = "Antique watch",
                        ImgUrl = "12.jpg",
                        Price = 65,
                        MaxPrice = 98,
                        ActiveTime = DateTime.UtcNow.AddMinutes(18)
                    });
                    context.Products.Add(new Entities.Product
                    {
                        Name = "Pot – Antique Traveller",
                        Description = "Pot – Antique Traveller",
                        ImgUrl = "13.jpg",
                        Price = 25,
                        MaxPrice = 78,
                        ActiveTime = DateTime.UtcNow.AddMinutes(15)
                    });

                    await context.SaveChangesAsync();
                }
                #endregion //Product

                #region Configuration
                if (!await context.Configurations.AnyAsync())
                {
                    context.Configurations.Add(new Configuration { BidPeriod = TimeSpan.FromMinutes(15) });
                    await context.SaveChangesAsync();
                }
                #endregion//Configuration
            }
        }
    }
}
