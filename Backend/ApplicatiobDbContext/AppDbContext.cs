using Microsoft.EntityFrameworkCore;
using WebApplication1.Models;

namespace WebApplication1.ApplicatiobDbContext
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
    }
}
