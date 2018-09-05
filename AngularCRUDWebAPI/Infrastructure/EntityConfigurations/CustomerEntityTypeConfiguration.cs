using AngularCRUDWebAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AngularCRUDWebAPI.Infrastructure.EntityConfigurations
{
    public class CustomerEntityTypeConfiguration : IEntityTypeConfiguration<Customer>
    {
        public void Configure(EntityTypeBuilder<Customer> builder)
        {
            builder.ToTable("Customer");
            builder.HasKey(m => m.Id);
            builder.Property(m => m.FirstName).IsRequired();
            builder.Property(m => m.LastName).IsRequired();
            builder.Property(m => m.Phone).IsRequired();
            builder.Property(m => m.Email).IsRequired();
            builder.Property(m => m.Street).IsRequired();
            builder.Property(m => m.City).IsRequired();
            builder.Property(m => m.State).IsRequired();
            builder.Property(m => m.Zip).IsRequired();
            builder.Property(m => m.Country).IsRequired();
        }
    }
}
