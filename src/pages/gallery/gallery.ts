import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';

@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
  providers: [Camera]
})
export class GalleryPage {

  private imageSrc: string;
  private imageSelected: boolean = false;

  constructor(public navCtrl: NavController, private camera: Camera) {

  }

  private openGallery (): void {
    let cameraOptions = {
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.FILE_URI,
      quality: 100,
      targetWidth: 1000,
      targetHeight: 1000,
      encodingType: this.camera.EncodingType.JPEG,
      correctOrientation: true
    }

    this.camera.getPicture(cameraOptions)
      .then(
        (file_uri) => {
          this.imageSrc = file_uri;
          this.imageSelected = true;
          console.log("hello");
        }
      )
      .catch(
        function() {
          console.log("Promise Rejected");
        }
      );
  }

}
