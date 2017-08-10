import { Component, ChangeDetectorRef } from '@angular/core';
import { NavController, Platform, ToastController, ModalController  } from 'ionic-angular';
import { PhotoLibrary, LibraryItem } from '@ionic-native/photo-library';

import { HomePage } from '../home/home';

const THUMBNAIL_WIDTH = 300;
const THUMBNAIL_HEIGHT = 300;

@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
  providers: [PhotoLibrary]
})

export class GalleryPage {

  thumbnailWidth = THUMBNAIL_WIDTH + 'px';
  thumbnailHeight = THUMBNAIL_HEIGHT + 'px';

  library: LibraryItem[];

  constructor(public navCtrl: NavController, private photoLibrary: PhotoLibrary, private platform: Platform,
    private cd: ChangeDetectorRef, private toastCtrl: ToastController, private modalCtrl: ModalController) {

    this.library = [];
    this.fetchPhotos();
  }

  fetchPhotos() {

    this.platform.ready().then(() => {

      this.library = [];

      this.photoLibrary.getLibrary({ thumbnailWidth: THUMBNAIL_WIDTH, thumbnailHeight: THUMBNAIL_HEIGHT/*, chunkTimeSec: 0.3*/ }).subscribe({
        next: (chunk) => {
          this.library = this.library.concat(chunk);
          //this.library = this.library.slice(0, 9); // To take top 10 images
          this.cd.detectChanges();
        },
        error: (err: string) => {
          if (err.startsWith('Permission')) {
            let permissionsModal = this.modalCtrl.create(HomePage); // TODO: PermissionsPage
            permissionsModal.onDidDismiss(() => {
              this.fetchPhotos();
            });
            permissionsModal.present();
          } else {
            let toast = this.toastCtrl.create({
              message: `getLibrary error: ${err}`,
              duration: 6000,
            });
            toast.present();
          }
        }
      });
    });
  }
}
