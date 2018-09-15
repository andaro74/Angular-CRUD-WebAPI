using System.Threading;
using System.Threading.Tasks;
using AngularCRUDWebAPI.Infrastructure.EntityConfigurations;
using AngularCRUDWebAPI.Infrastructure.Repositories;
using AngularCRUDWebAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace AngularCRUDWebAPI.Infrastructure
{
    public class Context:DbContext, IUnitOfWork
    {
        public Context(DbContextOptions<Context> options):base(options)
        {
        }

        public DbSet<Venue> Venue { get; set; }
        public DbSet<Event> Event { get; set; }
        public DbSet<Entertainer> Entertainer { get; set; }
        public DbSet<Customer> Customer { get; set; }

        public async Task<bool> SaveEntitiesAsync(CancellationToken cancellationToken = default(CancellationToken))
        {
            var result = await base.SaveChangesAsync();
            return true;
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.ApplyConfiguration(new VenueEntityTypeConfiguration());
            builder.ApplyConfiguration(new EventEntityTypeConfiguration());
            builder.ApplyConfiguration(new EntertainerEntityTypeConfiguration());
            builder.ApplyConfiguration(new CustomerEntityTypeConfiguration());
        }

    }
}
