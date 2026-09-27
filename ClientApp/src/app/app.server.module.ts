import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

@NgModule({
  imports: [ServerModule, ModuleMapLoaderModule],
  bootstrap: [AppComponent],
  providers: [
    provideRouter(routes)
  ]
})
export class AppServerModule { }
