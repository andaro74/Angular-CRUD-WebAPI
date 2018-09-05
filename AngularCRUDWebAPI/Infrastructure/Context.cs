using AngularCRUDWebAPI.Infrastructure.EntityConfigurations;
using AngularCRUDWebAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace AngularCRUDWebAPI.Infrastructure
{
    public class Context:DbContext
    {
        public Context(DbContextOptions<Context> options):base(options)
        {
        }

        public DbSet<Venue> Venue { get; set; }
        public DbSet<Event> Event { get; set; }
        public DbSet<Entertainer> Entertainer { get; set; }
        public DbSet<Customer> Customer { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.ApplyConfiguration(new VenueEntityTypeConfiguration());
            builder.ApplyConfiguration(new EventEntityTypeConfiguration());
            builder.ApplyConfiguration(new EntertainerEntityTypeConfiguration());
            builder.ApplyConfiguration(new CustomerEntityTypeConfiguration());
        }

    }
}
