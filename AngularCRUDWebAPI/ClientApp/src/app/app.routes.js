"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var venue_component_1 = require("./venue/venue.component");
var venue_detail_component_1 = require("./venue/venue-detail/venue-detail.component");
var entertainer_detail_component_1 = require("./entertainer/entertainer-detail/entertainer-detail.component");
var entertainer_component_1 = require("./entertainer/entertainer.component");
var customer_detail_component_1 = require("./customer/customer-detail/customer-detail.component");
var customer_component_1 = require("./customer/customer.component");
var home_component_1 = require("./home/home.component");
exports.routes = [
    { path: '', component: home_component_1.HomeComponent, pathMatch: 'full' },
    { path: 'venues', component: venue_component_1.VenueComponent },
    { path: 'venues/:id', component: venue_detail_component_1.VenueDetailComponent },
    { path: 'venue', component: venue_detail_component_1.VenueDetailComponent },
    { path: 'entertainers', component: entertainer_component_1.EntertainerComponent },
    { path: 'entertainers/:id', component: entertainer_detail_component_1.EntertainerDetailComponent },
    { path: 'entertainer', component: entertainer_detail_component_1.EntertainerDetailComponent },
    { path: 'customers', component: customer_component_1.CustomerComponent },
    { path: 'customers/:id', component: customer_detail_component_1.CustomerDetailComponent },
    { path: 'customer', component: customer_detail_component_1.CustomerDetailComponent }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routes.js.map