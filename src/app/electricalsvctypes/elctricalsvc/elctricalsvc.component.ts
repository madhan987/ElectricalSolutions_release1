import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-elctricalsvc",
  templateUrl: "./elctricalsvc.component.html",
  styleUrls: ["./elctricalsvc.component.scss"],
})
export class ElctricalsvcComponent implements OnInit {
  constructor() {}

  electricalSvcTypes: ElectricalType[] = [];
  electricalSvcTypes2: ElectricalType[] = [];
  electricalSvcTypes3: ElectricalType[] = [];

  ngOnInit(): void {
    window.scrollTo({ top: 0 });
    this.electricalSvcTypes = [
      {
        title: "Bescom Works",
        body: "",
        imageUrl: "/assets/images/BESCOM.jpg",
      },
      {
        title: "HT & LT Electrification",
        body: "",
        imageUrl: "/assets/images/HT_LT_Electrification.jpg",
      },
      {
        title: "Aerial Bundled conductor stringing",
        body: "",
        imageUrl: "/assets/images/Aerial_Bundled_Conductor.png",
      },
      {
        title: "New Electrical poles",
        body: "",
        imageUrl: "/assets/images/Electrical_Pole.jpg",
      },
    ];
    this.configureCardSecondRow();
    this.configureCardThirdRow();
  }

  public configureCardSecondRow() {
    this.electricalSvcTypes2 = [
      {
        title: "Digital Energy meters",
        body: "",
        imageUrl: "/assets/images/Energy_Meter.png",
      },
      {
        title: "Pannel Boards",
        body: "",
        imageUrl: "/assets/images/Pannel_Boards.png",
      },
      {
        title: "Line upgrades, Reconducting & modification",
        body: "",
        imageUrl: "/assets/images/Line_Upgrades.jpg",
      },
      {
        title: "Pot heads",
        body: "",
        imageUrl: "/assets/images/Pot_Heads.jpg",
      },
    ];
  }
  public configureCardThirdRow() {
    this.electricalSvcTypes3 = [
      {
        title: "UG cable pulling & cable jointing",
        body: "",
        imageUrl: "/assets/images/Cable_Joint.jpg",
      },
      {
        title: "LED street lights",
        body: "",
        imageUrl: "/assets/images/Led_Street_Light.png",
      },
    ];
  }
}

export class ElectricalType {
  title: string;
  body: string;
  imageUrl: string;
  iconUrl?: string;
}
