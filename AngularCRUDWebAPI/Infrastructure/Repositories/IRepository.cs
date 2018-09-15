using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace AngularCRUDWebAPI.Infrastructure.Repositories
{
    public interface IRepository<T> where T:class
    {
        IUnitOfWork UnitOfWork { get; }

        //Task<T> GetAsync(int id);

        //Task<IEnumerable<T>> ListAsync();

        //Task<IEnumerable<T>> ListAsync(Expression<Func<T, bool>> predicate);

        //T Add(T entity);

        //T Update(T entity);

        //void Delete(T entity);

    }
}
