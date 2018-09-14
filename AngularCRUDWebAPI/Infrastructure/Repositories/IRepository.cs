using System;
namespace AngularCRUDWebAPI.Infrastructure.Repositories
{
    public interface IRepository<T> where T:class
    {
        IUnitOfWork UnitOfWork { get; }

    }
}
