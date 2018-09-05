using AngularCRUDWebAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AngularCRUDWebAPI.Infrastructure.EntityConfigurations
{
    public class EventEntityTypeConfiguration : IEntityTypeConfiguration<Event>
    {
        public void Configure(EntityTypeBuilder<Event> builder)
        {
            builder.ToTable("Event");
            builder.HasKey(m => m.Id);
            builder.Property(m => m.Name).IsRequired();
            builder.Property(m => m.Description).IsRequired();
            builder.HasOne(m => m.Venue).WithMany().HasForeignKey(m => m.VenueId);
            builder.HasOne(m => m.Entertainer).WithMany().HasForeignKey(m => m.EntertainerId);
            builder.HasOne(m => m.Customer).WithMany().HasForeignKey(m => m.CustomerId);
            builder.Property(m => m.PaidAmount).IsRequired();
            builder.Property(m => m.TotalAmount).IsRequired();
            builder.Property(m => m.StartDate).IsRequired();
            builder.Property(m => m.EndDate).IsRequired();
        }
    }
}
