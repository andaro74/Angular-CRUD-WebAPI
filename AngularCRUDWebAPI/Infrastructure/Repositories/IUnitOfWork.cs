﻿using System;
using System.Threading;
using System.Threading.Tasks;

namespace AngularCRUDWebAPI.Infrastructure.Repositories
{
    public interface IUnitOfWork
    {
        Task<int> SaveChangesAsync(CancellationToken cancellationToken=default(CancellationToken));
        Task<int> SaveEntitiesAsync(CancellationToken cancellationToken = default(CancellationToken));
    }
}