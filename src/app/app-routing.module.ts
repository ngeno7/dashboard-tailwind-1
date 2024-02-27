import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ShipmentComponent } from './pages/shipment/shipment.component';
import { DoctorsComponent } from './pages/doctors/doctors.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsComponent } from './pages/forms/forms.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '', component: DashboardComponent,
        
      },
      {
        path: 'dashboard', component: ShipmentComponent,
      },
      {
        path: 'doctors', component: DoctorsComponent,
      },
      {
        path: 'forms', component: FormsComponent,
      },
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
