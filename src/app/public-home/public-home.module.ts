import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicHomeRoutingModule } from './public-home-routing.module';
import { HomeComponent } from './home/home.component';
import { MatCardModule } from '@angular/material/card';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  declarations: [ HomeComponent ],
  imports: [
    CommonModule,
    PublicHomeRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule
  ],
  exports: [HomeComponent]
})
export class PublicHomeModule { }
