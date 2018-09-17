using System;

namespace AngularCRUDWebAPI.Models
{
    public class Event
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public int CustomerId { get; set; }

        public Customer Customer { get; set; }

        public int VenueId { get; set; }

        public Venue Venue { get; set; }

        public int EntertainerId { get; set; }

        public Entertainer Entertainer { get; set; }

        public DateTime StartDate { get; set; }

        public DateTime EndDate { get; set; }

        public decimal PaidAmount { get; set; }

        public decimal TotalAmount { get; set; }

        public string PhotoUrl { get; set; }

    }
}
