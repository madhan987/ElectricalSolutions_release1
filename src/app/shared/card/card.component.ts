import { Component, OnInit, Input } from '@angular/core';
import { ElectricalType } from '../../electricalsvctypes/elctricalsvc/elctricalsvc.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  @Input()
  electricalDomain: ElectricalType;

  ngOnInit(): void {
  }

}
