using AngularCRUDWebAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace AngularCRUDWebAPI.Infrastructure.Repositories
{
    interface IVenueRepository:IRepository<Entertainer>
    {

        Task<Venue> GetAsync(int id);

        Task<IEnumerable<Venue>> ListAsync();
        Task<IEnumerable<Venue>> ListAsync(Expression<Func<Entertainer, bool>> predicate);
        Entertainer Add(Venue entity);
        Entertainer Update(Venue entity);
        void Delete(Venue entity);
    }
}
