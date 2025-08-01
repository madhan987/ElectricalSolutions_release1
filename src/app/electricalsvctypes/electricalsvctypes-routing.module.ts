import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElctricalsvcComponent } from './elctricalsvc/elctricalsvc.component';
import { SolortypesComponent } from './solortypes/solortypes.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';


const routes: Routes = [
  {
    path: 'elc-type',
    component: ElctricalsvcComponent
  },
  {
    path: 'solar',
    component: SolortypesComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElectricalsvctypesRoutingModule { }
