using AngularCRUDWebAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AngularCRUDWebAPI.Infrastructure.EntityConfigurations
{
    public class VenueEntityTypeConfiguration : IEntityTypeConfiguration<Venue>
    {
        public void Configure(EntityTypeBuilder<Venue> builder)
        {
            builder.ToTable("Venue");
            builder.HasKey(m => m.Id);
            builder.Property(m => m.Name).IsRequired();
            builder.Property(m => m.ContactFirstName).IsRequired();
            builder.Property(m => m.ContactLastName).IsRequired();
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
