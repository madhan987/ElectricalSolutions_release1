import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elctricalsvc',
  templateUrl: './elctricalsvc.component.html',
  styleUrls: ['./elctricalsvc.component.scss']
})
export class ElctricalsvcComponent implements OnInit {

  constructor() { }

  electricalSvcTypes: ElectricalType[] = [];
  electricalSvcTypes2: ElectricalType[] = [];

  ngOnInit(): void {
    this.electricalSvcTypes = [
      {
        title: 'Bescom Works',
        body: 'Bescom',
        imageUrl: '/assets/images/BESCOM.jpg'
      },
      {
        title: 'Bescom Works',
        body: 'Bescom',
        imageUrl: '/assets/images/BESCOM.jpg'
      },
      {
        title: 'Bescom Works',
        body: 'Bescom',
        imageUrl: '/assets/images/BESCOM.jpg'
      },
      {
        title: 'Bescom Works',
        body: 'Bescom',
        imageUrl: '/assets/images/BESCOM.jpg'
      }
    ];
    this.configureCardSecondRow();
  }

  public configureCardSecondRow() {
    this.electricalSvcTypes2 = [
      {
        title: 'Bescom Works',
        body: 'Bescom',
        imageUrl: '/assets/images/BESCOM.jpg'
      },
      {
        title: 'Bescom Works',
        body: 'Bescom',
        imageUrl: '/assets/images/BESCOM.jpg'
      },
      {
        title: 'Bescom Works',
        body: 'Bescom',
        imageUrl: '/assets/images/BESCOM.jpg'
      },
      {
        title: 'Bescom Works',
        body: 'Bescom',
        imageUrl: '/assets/images/BESCOM.jpg'
      }
    ];
  }

}

export class ElectricalType {
  title: string;
  body: string;
  imageUrl: string;
  iconUrl?: string;
}
