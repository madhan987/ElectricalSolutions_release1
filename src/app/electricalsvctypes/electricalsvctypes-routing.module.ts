import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElctricalsvcComponent } from './elctricalsvc/elctricalsvc.component';
import { SolortypesComponent } from './solortypes/solortypes.component';


const routes: Routes = [
  {
    path: 'elc-type',
    component: ElctricalsvcComponent
  },
  {
    path: 'solar',
    component: SolortypesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElectricalsvctypesRoutingModule { }
