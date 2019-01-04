import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import {SocialSharing} from "@ionic-native/social-sharing";
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  qrData = null;
  createdCode = null;
 
  constructor(private barcodeScanner: BarcodeScanner, private socialSharing: SocialSharing) { }
 
  createCode() {
    this.createdCode = this.qrData;
  }
 
  share(): void {
    this.socialSharing.shareWithOptions({
      message: 'Scannez ce QR Code avec le texte "' + this.qrData.text + '"',
      files: [this.qrData]
    })
  }
}