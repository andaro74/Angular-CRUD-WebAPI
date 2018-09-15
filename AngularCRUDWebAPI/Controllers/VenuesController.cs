using AngularCRUDWebAPI.Infrastructure;
using AngularCRUDWebAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Net;
using System.Threading.Tasks;

namespace AngularCRUDWebAPI.Controllers
{
    [Route("api/[controller]")]
    public class VenuesController : Controller
    {
     
        private readonly Context context;

        public VenuesController(Context context)
        {
            this.context = context;
            /*  Venue venue = new Venue
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
venues = venueList;*/
        }


        [HttpGet]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        public async Task<IActionResult> Get()
        {
            var result = await context.Venue.ToListAsync();
            return Ok(result);
        }


        [HttpGet("{id}")]
        [ProducesResponseType((int)HttpStatusCode.NotFound)]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        public async Task<IActionResult> Get(int id)
        {
            var venueItem = await context.Venue.FindAsync(id);

            if (venueItem == null)
            {
                return NotFound();

            }
            return Ok(venueItem);
        }

        [HttpPut("{id}")]
        [ProducesResponseType((int)HttpStatusCode.NotFound)]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        public async Task<IActionResult> Put(int id,[FromBody] Venue venueItemToUpdate)
        {
            var venueItem=await context.Venue.SingleOrDefaultAsync(i => i.Id == id);
            if (venueItem == null)
            {
                return NotFound(new { Message = $"Item with id {id} not found" });
            }

            venueItem = venueItemToUpdate;
            this.context.Update(venueItem);

            await this.context.SaveChangesAsync();
            return Ok(venueItem);
        }

        [HttpPost]
        [ProducesResponseType((int)HttpStatusCode.Created)]
        public async Task<IActionResult> Post([FromBody] Venue venueItem)
        {
            var item = new Venue
            {
                City = venueItem.City,
                ContactFirstName = venueItem.ContactFirstName,
                ContactLastName = venueItem.ContactLastName,
                Country = venueItem.Country,
                Description = venueItem.Description,
                Email = venueItem.Email,
                Name = venueItem.Name,
                Phone = venueItem.Phone,
                PhotoUrl = venueItem.PhotoUrl,
                State = venueItem.State,
                Street = venueItem.Street,
                Website = venueItem.Website,
                Zip = venueItem.Zip
            };
            context.Venue.Add(item);

            await context.SaveChangesAsync();

            return CreatedAtAction(nameof(Get), new { id = item.Id }, null);
            
        }


        [HttpDelete]
        [ProducesResponseType((int)HttpStatusCode.NotFound)]
        [ProducesResponseType((int)HttpStatusCode.NoContent)]
        public async Task<IActionResult> Delete(int id)
        {
            var venueItem=await context.Venue.SingleOrDefaultAsync(x => x.Id == id);
            if (venueItem==null)
            {
                return NotFound();
            }

            context.Venue.Remove(venueItem);
            await context.SaveChangesAsync();
            return NoContent();
        }
        
    }
}
