using Microsoft.EntityFrameworkCore;

namespace SignalRLab.Models
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public virtual DbSet<Products> Products { get; set; }
    }
}
