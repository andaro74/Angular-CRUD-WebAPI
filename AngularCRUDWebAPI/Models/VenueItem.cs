using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularCRUDWebAPI.Models
{
    public class VenueItem
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        
        public string Website { get; set; }

        public string Phone { get; set; }

        public string Email { get; set; }

        public string PhotoUrl { get; set; }

        public string Street { get; set; }
        public string City { get; set; }

        public string State { get; set; }

        public string Zip { get; set; }
      

        public string Country { get; set; }

    }
}
