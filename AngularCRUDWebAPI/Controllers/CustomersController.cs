using AngularCRUDWebAPI.Infrastructure;
using AngularCRUDWebAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Net;
using System.Threading.Tasks;

namespace AngularCRUDWebAPI.Controllers
{
    [Route("api/[controller]")]
    public class CustomersController : Controller
    {
        private readonly Context context;

        public CustomersController(Context context)
        {
            this.context = context;
        }

        [HttpGet]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        public async Task<IActionResult> Get()
        {
            var result = await context.Customer.ToListAsync();
            return Ok(result);
        }


        [HttpGet("{id}")]
        [ProducesResponseType((int)HttpStatusCode.NotFound)]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        public async Task<IActionResult> Get(int id)
        {
            var existingItem = await context.Customer.FindAsync(id);

            if (existingItem == null)
            {
                return NotFound();

            }
            return Ok(existingItem);
        }

        [HttpPut("{id}")]
        [ProducesResponseType((int)HttpStatusCode.NotFound)]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        public async Task<IActionResult> Put(int id, [FromBody] Customer itemToUpdate)
        {
            var existingItem = await context.Customer.SingleOrDefaultAsync((System.Linq.Expressions.Expression<System.Func<Customer, bool>>)(i => i.Id == id));
            if (existingItem == null)
            {
                return NotFound(new { Message = $"Item with id {id} not found" });
            }

            existingItem.City = itemToUpdate.City;
            existingItem.BusinessName = itemToUpdate.BusinessName;
            existingItem.FirstName = itemToUpdate.FirstName;
            existingItem.LastName = itemToUpdate.LastName;
            existingItem.Country = itemToUpdate.Country;
            existingItem.Email = itemToUpdate.Email;
            existingItem.Phone = itemToUpdate.Phone;
            existingItem.PhotoUrl = itemToUpdate.PhotoUrl;
            existingItem.State = itemToUpdate.State;
            existingItem.Street = itemToUpdate.Street;
            existingItem.Website = itemToUpdate.Website;
            existingItem.Zip = itemToUpdate.Zip;
            existingItem.State = itemToUpdate.State;

            this.context.Customer.Update((Customer)existingItem);

            await this.context.SaveChangesAsync();
            return Ok(existingItem);
        }

        [HttpPost]
        [ProducesResponseType((int)HttpStatusCode.Created)]
        public async Task<IActionResult> Post([FromBody] Customer item)
        {
            var itemToCreate = new Customer
            {
                City = item.City,
                BusinessName = item.BusinessName,
                FirstName = item.FirstName,
                LastName = item.LastName,
                Country = item.Country,
                Email = item.Email,
                Phone = item.Phone,
                PhotoUrl = item.PhotoUrl,
                State = item.State,
                Street = item.Street,
                Website = item.Website,
                Zip = item.Zip
            };
            context.Customer.Add(itemToCreate);
            await context.SaveChangesAsync();
            return CreatedAtAction(nameof(Get), new { id = itemToCreate.Id }, null);
        }


        [HttpDelete]
        [ProducesResponseType((int)HttpStatusCode.NotFound)]
        [ProducesResponseType((int)HttpStatusCode.NoContent)]
        public async Task<IActionResult> Delete(int id)
        {
            var existingItem = await context.Customer.SingleOrDefaultAsync((System.Linq.Expressions.Expression<System.Func<Customer, bool>>)(x => x.Id == id));
            if (existingItem == null)
            {
                return NotFound();
            }

            context.Customer.Remove(existingItem);
            await context.SaveChangesAsync();
            return NoContent();
        }
    }
}
