# Angular 6 + .Net Core Backend Sample 
I've been developing Single Page Applications for some time and I wanted to create a working implementation that demonstrated the following technologies:

* Angular 6
* .NET Core
* EF Core 
* Angular Material

The project was created with the Visual Studio Angular Template. It is orginally targeted to Angular 5 and Bootstrap. However, I decided to migrate it to Angular 6 and Angular Material. 

.Net Core is an excelent option to handle asynchronous requests. The platform was completely rewriten and open sourced by Microsoft. The performance stats are among the best comparing to other frameworks. You can see the ranking in the [Techempower Benchmarks](https://www.techempower.com/benchmarks/).

### Case Scenario
The fictious company organizes private events such as weddings, graduation parties, concerts for customers. An event contains information about the venue, entertainer, customer information and specific details such as dates and cost of the event. 

### Project Organization
The front end and back end live in the same application. The reason is to remove the friction to access external APIs that will distract the purpose of this sample to demonstrate the interaction of user components with the .NET Core backend.

## Application Walkthrough


## Home
![Initial Page](https://andarito.blob.core.windows.net/github/gihub/AngularCRUD/MainPage.JPG)

## Events
![Events](https://andarito.blob.core.windows.net/github/gihub/AngularCRUD/EventsPage.JPG)

## Event Detail
![Event Detail](https://andarito.blob.core.windows.net/github/gihub/AngularCRUD/EventsDetailsPage.JPG)

## Entertainers
![Entertaniers](https://andarito.blob.core.windows.net/github/gihub/AngularCRUD/Entertainers.JPG)

## Azure CI/CD Results
![Azure CI/CD](https://andarito.blob.core.windows.net/github/gihub/AngularCRUD/CICD.JPG)

## Instructions

Clone the repository and create a new database either locally or in Azure. Modify the connection string and update the database using EF Core Tools.





