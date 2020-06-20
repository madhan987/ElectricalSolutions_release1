import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElctricalsvcComponent } from './elctricalsvc/elctricalsvc.component';


const routes: Routes = [
  {
    path: 'elc-type',
    component: ElctricalsvcComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElectricalsvctypesRoutingModule { }
