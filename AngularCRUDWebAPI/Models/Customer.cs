using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularCRUDWebAPI.Models
{
    public class Customer
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public string BusinessName { get; set; }

        public string Website { get; set; }

        public string Phone { get; set; }

        public string Email { get; set; }

        public string PhotoUrl { get; set; }

        public string Street { get; set; }
        public string City { get; set; }

        public string Zip { get; set; }
        public string State { get; set; }

        public string Country { get; set; }

        
    }
}
