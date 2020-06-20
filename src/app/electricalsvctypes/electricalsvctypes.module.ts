import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElectricalsvctypesRoutingModule } from './electricalsvctypes-routing.module';
import { ElctricalsvcComponent } from './elctricalsvc/elctricalsvc.component';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from '../shared/shared.module';
import { SolortypesComponent } from './solortypes/solortypes.component';


@NgModule({
  declarations: [ ElctricalsvcComponent, SolortypesComponent ],
  imports: [
    CommonModule,
    ElectricalsvctypesRoutingModule,
    MatCardModule,
    SharedModule
  ]
})
export class ElectricalsvctypesModule { }
