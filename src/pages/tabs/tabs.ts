import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { MapPage } from '../map/map';
import { GalleryPage } from '../gallery/gallery';

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MapPage;
  tab3Root = GalleryPage;

  constructor() {
  }
}
