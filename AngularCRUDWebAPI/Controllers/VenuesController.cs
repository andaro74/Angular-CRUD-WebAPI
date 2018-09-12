using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AngularCRUDWebAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace AngularCRUDWebAPI.Controllers
{
    [Route("api/[controller]")]
    public class VenuesController : Controller
    {
        private List<Venue> venues;
        public VenuesController()
        {
            Venue venue = new Venue
            {
                Id = 1,
                Name = "Hollywood Bowl",
                Description = "Concert Hall",
                Website = "hollywoodbowl.com",
                Phone = "(323) 850-2000",
                Email = "contact@hollywoodbowl.com",
                Street = "2301 N Highland Ave",
                City = "Los Angeles",
                State = "CA",
                Zip = "90068",
                Country = "USA",
                PhotoUrl = ""
            };

            Venue venue2 = new Venue
            {
                Id = 2,
                Name = "Staples Center",
                Description = "Multi-purpose Arena",
                Website = "https://www.staplescenter.com/",
                Phone = "(213) 742-7100",
                Email = "contact@staples.com",
                Street = "1111 S Figueroa St",
                City = "Los Angeles",
                State = "CA",
                Zip = "90014",
                Country = "USA",
                PhotoUrl = ""
            };

            var venueList = new List<Venue>();
            venueList.Add(venue);
            venueList.Add(venue2);
            venues = venueList;
        }


        [HttpGet]
        public async Task<IActionResult> Get()
        {
           
            return Ok(venues);
        }


        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var venue=venues.Where(x => x.Id == id).FirstOrDefault();
           
            return Ok(venue);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id,[FromBody] Venue venueItem)
        {
            venueItem.Name += " modified";
            venueItem.Description += " modified";

            return Ok(venueItem);
        }

        public async Task<IActionResult> Post([FromBody] Venue venueItem)
        {
            return Ok(venueItem);
        }

        
    }
}
