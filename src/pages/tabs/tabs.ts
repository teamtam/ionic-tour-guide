import { Component } from '@angular/core';

import { GalleryPage } from '../gallery/gallery';
import { CameraPage } from '../camera/camera';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = GalleryPage;
  tab3Root = CameraPage;

  constructor() {

  }
}
