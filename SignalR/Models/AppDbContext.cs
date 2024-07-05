using Microsoft.EntityFrameworkCore;

namespace SignalR.Models
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public AppDbContext()
        {

        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {

            var builder = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true);

            IConfigurationRoot configurationRoot = builder.Build();
            optionsBuilder.UseSqlServer(configurationRoot.GetConnectionString("DefaultConnection"));

        }
        public DbSet<Product> Products { get; set; }
    }
}
