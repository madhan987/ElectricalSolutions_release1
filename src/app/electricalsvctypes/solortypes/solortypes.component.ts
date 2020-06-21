import { Component, OnInit } from "@angular/core";
import { ElectricalType } from "../elctricalsvc/elctricalsvc.component";

@Component({
  selector: "app-solortypes",
  templateUrl: "./solortypes.component.html",
  styleUrls: ["./solortypes.component.scss"],
})
export class SolortypesComponent implements OnInit {
  solarSvcTypes: ElectricalType[] = [];
  constructor() {}

  ngOnInit(): void {
    this.solarSvcTypes = [
      {
        title: "Off grid",
        body: "",
        imageUrl: "/assets/images/Offgrid.jpg",
      },
      {
        title: "On grid",
        body: "",
        imageUrl: "/assets/images/Ongrid.jpg",
      },
      {
        title: "Hybrid",
        body: "",
        imageUrl: "/assets/images/Hybrid.jpg",
      },
      {
        title: "Solar Street Lights",
        body: "",
        imageUrl: "/assets/images/Solar_Street_Lights.png",
      },
    ];
  }
}
