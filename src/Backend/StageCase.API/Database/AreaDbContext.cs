using Microsoft.EntityFrameworkCore;

namespace StageCase.API.Database
{
    public class AreaDbContext : DbContext
    {
        public AreaDbContext(DbContextOptions<AreaDbContext> options) : base(options) { }
        public DbSet<Area> Area { get; set; } 
    }
}
