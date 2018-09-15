using AngularCRUDWebAPI.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace AngularCRUDWebAPI.Infrastructure.Repositories
{
    public class VenueRepository:IRepository<Venue>
    {
        private readonly Context _context;

        public IUnitOfWork UnitOfWork => _context;

       
        public VenueRepository(Context context)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }


        public async Task<Venue> GetAsync(int id)
        {
            return await _context.Venue.FindAsync(id);
        }

        public async Task<IEnumerable<Venue>> ListAsync()
        {
            return await _context.Venue.ToListAsync();
        }
           

        public async Task<IEnumerable<Venue>> ListAsync(Expression<Func<Venue, bool>> predicate)
        {
            return await _context.Venue.Where(predicate).ToListAsync();
        }

        public Venue Add(Venue entity)
        {
             return _context.Venue.Add(entity).Entity;
            
        }

        public Venue Update(Venue entity)
        {

            return _context.Update(entity).Entity;
        }

        public void Delete(Venue entity)
        {
            _context.Remove(entity);
        }

        
    }
}
