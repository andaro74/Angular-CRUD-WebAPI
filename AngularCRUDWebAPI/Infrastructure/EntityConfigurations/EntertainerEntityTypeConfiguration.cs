using AngularCRUDWebAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularCRUDWebAPI.Infrastructure.EntityConfigurations
{
    public class EntertainerEntityTypeConfiguration : IEntityTypeConfiguration<Entertainer>
    {
        public void Configure(EntityTypeBuilder<Entertainer> builder)
        {
            builder.ToTable("Entertainer");
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
