using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using AngularCRUDWebAPI.Infrastructure.Repositories;
using Microsoft.EntityFrameworkCore;

namespace AngularCRUDWebAPI.Infrastructure.Repositories
{
    public class Repository<T>:IRepository<T> where T:class
    {
        private readonly Context context;

        public Repository(Context context)
        {
            this.context = context;
        }

        public IUnitOfWork UnitOfWork => context;

        public T Add(T entity)
        {
            context.Set<T>().Add(entity);
            return entity;
        }

        public void Delete(T entity)
        {
            context.Set<T>().Remove(entity);
        }

        public async Task<T> GetAsync(int id)
        {
            return await context.Set<T>().FindAsync(id);
        }

        public async Task<IEnumerable<T>> ListAsync()
        {

            return await context.Set<T>().ToListAsync<T>();
        }

        public async Task<IEnumerable<T>> ListAsync(Expression<Func<T, bool>> predicate)
        {
            return await context.Set<T>().Where(predicate).ToListAsync<T>();
        }

        public T Update(T entity)
        {
            context.Set<T>().Update(entity);
            return entity;
        }
    }
}
