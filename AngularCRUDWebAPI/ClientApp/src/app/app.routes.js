"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var venue_component_1 = require("./venue/venue.component");
var home_component_1 = require("./home/home.component");
exports.routes = [
    { path: '', component: home_component_1.HomeComponent, pathMatch: 'full' },
    //{ path: 'counter', component: CounterComponent },
    //{ path: 'fetch-data', component: FetchDataComponent },
    { path: 'venue', component: venue_component_1.VenueComponent }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routes.js.map