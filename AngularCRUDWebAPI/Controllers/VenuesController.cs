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
            var venueItem=await context.Venue.SingleOrDefaultAsync((System.Linq.Expressions.Expression<System.Func<Venue, bool>>)(i => i.Id == id));
            if (venueItem == null)
            {
                return NotFound(new { Message = $"Item with id {id} not found" });
            }
            
            venueItem.City = venueItemToUpdate.City;
            venueItem.ContactFirstName = venueItemToUpdate.ContactFirstName;
            venueItem.ContactLastName = venueItemToUpdate.ContactLastName;
            venueItem.Country = venueItemToUpdate.Country;
            venueItem.Description = venueItemToUpdate.Description;
            venueItem.Email = venueItemToUpdate.Email;
            venueItem.Name = venueItemToUpdate.Name;
            venueItem.Phone = venueItemToUpdate.Phone;
            venueItem.PhotoUrl = venueItemToUpdate.PhotoUrl;
            venueItem.State = venueItemToUpdate.State;
            venueItem.Street = venueItemToUpdate.Street;
            venueItem.Website = venueItemToUpdate.Website;
            venueItem.Zip = venueItemToUpdate.Zip;
            venueItem.State = venueItemToUpdate.State;

            this.context.Venue.Update((Venue)venueItem);

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
            var venueItem=await context.Venue.SingleOrDefaultAsync((System.Linq.Expressions.Expression<System.Func<Venue, bool>>)(x => x.Id == id));
            if (venueItem==null)
            {
                return NotFound();
            }

            context.Venue.Remove((Venue)venueItem);
            await context.SaveChangesAsync();
            return NoContent();
        }
        
    }
}
