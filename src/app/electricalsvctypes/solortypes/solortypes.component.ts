import { Component, OnInit } from '@angular/core';
import { ElectricalType } from '../elctricalsvc/elctricalsvc.component';

@Component({
  selector: 'app-solortypes',
  templateUrl: './solortypes.component.html',
  styleUrls: ['./solortypes.component.scss']
})
export class SolortypesComponent implements OnInit {

  solarSvcTypes: ElectricalType[] = [];
  constructor() { }

  ngOnInit(): void {
    this.solarSvcTypes = [
      {
        title: 'Bescom Works',
        body: '',
        imageUrl: '/assets/images/BESCOM.jpg'
      },
      {
        title: 'HT & LT Electrification',
        body: '',
        imageUrl: '/assets/images/HT_LT_Electrification.jpg',
      },
      {
        title: 'Aerial Bundled conductor stringing',
        body: '',
        imageUrl: '/assets/images/Aerial_Bundled_Conductor.png',
      },
      {
        title: 'New Electrical poles',
        body: '',
        imageUrl: '/assets/images/Electrical_Pole.jpg',
      },
    ];
  }

}
