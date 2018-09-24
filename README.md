# Angular 6 + .Net Core Event Planner
In my latest project I’ve used Angular 6 and .Net Core so I wanted to create a working implementation to demonstrate the following technologies working together. 

* [Angular 6](https://angular.io/)
* [ASP .NET Core Web API 2.1](https://docs.microsoft.com/en-us/aspnet/core/web-api/?view=aspnetcore-2.1)
* [EF Core](https://docs.microsoft.com/en-us/ef/core/) 
* [Angular Material](https://material.angular.io/)

The project was created with the [Visual Studio Angular Template](https://docs.microsoft.com/en-us/aspnet/core/client-side/spa/angular?view=aspnetcore-2.1&tabs=visual-studio). It is originally targeted to Angular 5 and Bootstrap. However, I decided to migrate it to Angular 6 and Angular Material. There are many samples out there using Bootstrap but not with Angular Material.

### Why a .Net Core back-end? 

.Net Core is an excellent option to handle asynchronous request. It was designed for highly available and low latency server applications. The performance benchmarks are among the best comparing to other frameworks. You can see the ranking in the [Techempower Benchmarks](https://www.techempower.com/benchmarks/).

### What is the project case about?
The fictitious company organizes private events such as weddings, graduation parties, concerts for customers. An event contains information about the venue, entertainer, customer information and specific details such as dates and cost of the event.

### Project Organization
The project is organized in two parts, the first one is the server side that consists of a collection of .Net Core Web APIs that access SQL Server database through Entity Framework Core. The second part is an Angular 6 single page application that manages all the user interactions and calls the .Net Web APIs.

An ideal single page application contains only code that is responsible for user interactions and calls different external endpoints for fetching data and executing commands. The server-side code is located in a different project and deployed in a separate location. They could be web applications, docker containers, azure functions or API Gateways.

I decided to organize the server and client-side code in the same project to make it easy to run and to demo. This sample stills needs OAuth 2 authentication and additional logic to make it a production ready robust application. I have another implementation that shows how to implement OAuth2 with Auth0 in another post.

### Instructions
The code is available in my [github](https://github.com/andaro74/Angular-CRUD-WebAPI). It is required to clone it and to create a local database either in SQL Express or any version of SQL Server.

Entity Framework Core uses data migrations to create the database tables and update the database. Modify the connection string and update the database using EF Core Tools. [Read more](https://docs.microsoft.com/en-us/ef/core/managing-schemas/migrations/), for additional information about migrations.

After getting the code execute the following commands:


PowerShell

```powershell
Update-Database
```
Console
```console
dotnet ef database update
```


## Application Walkthrough

The purpose of the application is to Create, Edit and View Events, Venues, Entertainers and Customers. In order to create an event the other entities should be populated first. The goal of the event planner is to have a database of the upcoming events that they will organize. 
[Visit the live application](https://angularcrudwebapieventsample.azurewebsites.net/).


### Home
This is the landing page that describes the technologies the application is using. 

![Initial Page](https://andarito.blob.core.windows.net/github/gihub/AngularCRUD/MainPage.JPG)

## Events
List of events that the user assembled by creating a new event and selecting a venue, entertainer, customer along with additional details about the event such as date and time

![Events](https://andarito.blob.core.windows.net/github/gihub/AngularCRUD/EventsPage.JPG)

## Event Detail
![Event Detail](https://andarito.blob.core.windows.net/github/gihub/AngularCRUD/EventsDetailsPage.JPG)

## Entertainers
![Entertaniers](https://andarito.blob.core.windows.net/github/gihub/AngularCRUD/Entertainers.JPG)

## Azure CI/CD Results
Continuous integration and delivery deserves its own post. However, I wanted to show the basic steps to deploy an Angular single page application along with a .NET Core backend. The key is to use the VSTS Pipelines and include Node and npm install in the right order. The template will install the dependencies and also build the application using the production environment settings.  

![Azure CI/CD](https://andarito.blob.core.windows.net/github/gihub/AngularCRUD/CICD.JPG)

## Conclusion

I hope you enjoyed this post. Please leave me any feedback or any question you have so I can answer it or provide additional information. Visit my blog to add comments.  






