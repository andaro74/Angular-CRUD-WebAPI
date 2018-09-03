"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var venue_component_1 = require("./venue/venue.component");
var venue_detail_component_1 = require("./venue/venue-detail/venue-detail.component");
var home_component_1 = require("./home/home.component");
exports.routes = [
    { path: '', component: home_component_1.HomeComponent, pathMatch: 'full' },
    { path: 'venues', component: venue_component_1.VenueComponent },
    { path: 'venues/:id', component: venue_detail_component_1.VenueDetailComponent }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routes.js.map