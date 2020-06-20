import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElectricalsvctypesRoutingModule } from './electricalsvctypes-routing.module';
import { ElctricalsvcComponent } from './elctricalsvc/elctricalsvc.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [ ElctricalsvcComponent ],
  imports: [
    CommonModule,
    ElectricalsvctypesRoutingModule,
    MatCardModule
  ]
})
export class ElectricalsvctypesModule { }
