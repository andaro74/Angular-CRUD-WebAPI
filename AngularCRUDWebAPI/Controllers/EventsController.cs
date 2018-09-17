using AngularCRUDWebAPI.Infrastructure;
using AngularCRUDWebAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Net;
using System.Threading.Tasks;

namespace AngularCRUDWebAPI.Controllers
{
    [Route("api/[controller]")]
    public class EventsController : Controller
    {
        private readonly Context context;

        public EventsController(Context context)
        {
            this.context = context;
        }

        [HttpGet]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        public async Task<IActionResult> Get()
        {
            var result = await context.Event.ToListAsync();
            return Ok(result);
        }


        [HttpGet("{id}")]
        [ProducesResponseType((int)HttpStatusCode.NotFound)]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        public async Task<IActionResult> Get(int id)
        {
            var existingItem = await context.Event.FindAsync(id);

            if (existingItem == null)
            {
                return NotFound();

            }
            return Ok(existingItem);
        }

        [HttpPut("{id}")]
        [ProducesResponseType((int)HttpStatusCode.NotFound)]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        public async Task<IActionResult> Put(int id, [FromBody] Event itemToUpdate)
        {
            var existingItem = await context.Event.SingleOrDefaultAsync((System.Linq.Expressions.Expression<System.Func<Event, bool>>)(i => i.Id == id));
            if (existingItem == null)
            {
                return NotFound(new { Message = $"Item with id {id} not found" });
            }

            existingItem.CustomerId = itemToUpdate.CustomerId;
            existingItem.Description = itemToUpdate.Description;
            existingItem.EntertainerId = itemToUpdate.EntertainerId;
            existingItem.Name = itemToUpdate.Name;
            existingItem.VenueId = itemToUpdate.VenueId;
            existingItem.StartDate = itemToUpdate.StartDate;
            existingItem.EndDate = itemToUpdate.EndDate;
            existingItem.PaidAmount = itemToUpdate.PaidAmount;
            existingItem.TotalAmount = itemToUpdate.TotalAmount;
           
            this.context.Event.Update((Event)existingItem);

            await this.context.SaveChangesAsync();
            return Ok(existingItem);
        }

        [HttpPost]
        [ProducesResponseType((int)HttpStatusCode.Created)]
        public async Task<IActionResult> Post([FromBody] Event item)
        {
            var itemToCreate = new Event
            {
                 CustomerId=item.CustomerId,
                 Description=item.Description,
                 EntertainerId=item.EntertainerId,
                 Name=item.Name,
                 VenueId=item.VenueId,
                 StartDate=item.StartDate,
                 EndDate= item.EndDate,
                 PaidAmount=item.PaidAmount,
                 TotalAmount=item.TotalAmount
            };
            context.Event.Add(itemToCreate);
            await context.SaveChangesAsync();
            return CreatedAtAction(nameof(Get), new { id = itemToCreate.Id }, null);
        }


        [HttpDelete]
        [ProducesResponseType((int)HttpStatusCode.NotFound)]
        [ProducesResponseType((int)HttpStatusCode.NoContent)]
        public async Task<IActionResult> Delete(int id)
        {
            var existingItem = await context.Event.SingleOrDefaultAsync((System.Linq.Expressions.Expression<System.Func<Event, bool>>)(x => x.Id == id));
            if (existingItem == null)
            {
                return NotFound();
            }

            context.Event.Remove(existingItem);
            await context.SaveChangesAsync();
            return NoContent();
        }
    }
}
