using Microsoft.EntityFrameworkCore;
using StageCase.API.Models;

namespace StageCase.API.Database
{
    public class AreaDbContext : DbContext
    {
        public AreaDbContext(DbContextOptions<AreaDbContext> options) : base(options) { }
        public DbSet<Area> Area { get; set; } 
    }

}
