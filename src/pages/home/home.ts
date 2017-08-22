import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Places } from "../../places";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  places: {}[];

  constructor(public navCtrl: NavController) {
    this.places = [];
    this.fetchPlaces();
  }

  fetchPlaces() {
    this.places = Places;
  }
}
