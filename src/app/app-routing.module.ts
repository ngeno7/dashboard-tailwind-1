import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ShipmentComponent } from './pages/shipment/shipment.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    
  },
  {
    path: 'dashboard', component: ShipmentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
