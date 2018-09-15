using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace AngularCRUDWebAPI.Filters
{
    public class HttpGlobalExceptionFilter : IExceptionFilter
    {
        private readonly IHostingEnvironment env;
        private readonly ILogger<HttpGlobalExceptionFilter> logger;

        public HttpGlobalExceptionFilter(IHostingEnvironment env, ILogger<HttpGlobalExceptionFilter> logger)
        {
            this.env = env;
            this.logger = logger;
        }

        public void OnException(ExceptionContext context)
        {
            logger.LogError(new EventId(context.Exception.HResult), context.Exception, context.Exception.Message);

            var json = new JsonErrorResponse
            {
                Messages = new[] { "An error occurred." }
            };

            if (env.IsDevelopment())
            {
                json.DeveloperMeesage = context.Exception;
            }

            context.Result = new ObjectResult(json);
            context.HttpContext.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
            context.ExceptionHandled = true;

        }

        private class JsonErrorResponse
        {
            public string[] Messages { get; set; }

            public object DeveloperMeesage { get; set; }
        }
    }
}
