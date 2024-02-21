import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ShipmentComponent } from './pages/shipment/shipment.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ShipmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TopNavComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
