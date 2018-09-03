using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AngularCRUDWebAPI.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AngularCRUDWebAPI.Controllers
{
    [Route("api/[controller]")]
    public class VenuesController : Controller
    {
        
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            VenueItem venue = new VenueItem
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

            var venueList = new List<VenueItem>();
            venueList.Add(venue);
            return Ok(venueList);
        }


        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            VenueItem venue = new VenueItem
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

           
            return Ok(venue);
        }

        //// GET api/<controller>/5
        //[HttpGet("{id}")]
        //public string Get(int id)
        //{
        //    return "value";
        //}

        //// POST api/<controller>
        //[HttpPost]
        //public void Post([FromBody]string value)
        //{
        //}

        //// PUT api/<controller>/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody]string value)
        //{
        //}

        //// DELETE api/<controller>/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
