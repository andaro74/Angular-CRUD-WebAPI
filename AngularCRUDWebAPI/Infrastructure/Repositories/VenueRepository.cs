using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AngularCRUDWebAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace AngularCRUDWebAPI.Infrastructure.Repositories
{
    public class VenueRepository: IRepository<Venue>
    {

        private Context _context;
        public VenueRepository(Context context)
        {
            _context = context;
        }

        public async Task<List<Venue>> GetAsync(){
           return await _context.Venue.ToListAsync();
        }

        public IUnitOfWork UnitOfWork => _context;
    }
}
