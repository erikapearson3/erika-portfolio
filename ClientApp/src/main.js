"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBaseUrl = getBaseUrl;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var environment_1 = require("./environments/environment");
var app_component_1 = require("./app/app.component");
var http_1 = require("@angular/common/http");
var core_2 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
var providers = [
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];
if (environment_1.environment.production) {
    (0, core_1.enableProdMode)();
}
//platformBrowserDynamic(providers).bootstrapModule(AppModule)
//  .catch(err => console.log(err));
(0, platform_browser_1.bootstrapApplication)(app_component_1.AppComponent, {
    providers: [
        (0, http_1.provideHttpClient)((0, http_1.withInterceptorsFromDi)()),
        (0, core_2.importProvidersFrom)(forms_1.FormsModule, router_1.RouterModule.forRoot([]))
    ]
}).catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map