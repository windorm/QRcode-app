import { QrCodeProvider } from './../../providers/qr-code/qr-code';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { qrcode } from 'qrcode';


/**
 * Generated class for the List2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list2',
  templateUrl: 'list2.html',
})
export class List2Page {
  qrcodes: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public history: QrCodeProvider) {
  }

  ionViewDidLoad() {
    this.history.change.subscribe((qrcodes: any[]) => {
      this.qrcodes = qrcodes;
    }, console.error);
    this.history.load();
    //this.keys = Object.keys(this.qrcodes);
  }

}
