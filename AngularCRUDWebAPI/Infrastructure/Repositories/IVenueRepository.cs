using AngularCRUDWebAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace AngularCRUDWebAPI.Infrastructure.Repositories
{
    interface IVenueRepository:IRepository<Venue>
    {

        Task<Venue> GetAsync(int id);

        Task<IEnumerable<Venue>> ListAsync();
        Task<IEnumerable<Venue>> ListAsync(Expression<Func<Venue, bool>> predicate);
        Venue Add(Venue entity);
        Venue Update(Venue entity);
        void Delete(Venue entity);
    }
}
