import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import qrcode from 'qrcode';
import { NativeStorage } from '@ionic-native/native-storage';

/*
  Generated class for the QrCodeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class QrCodeProvider {

  constructor(public http: HttpClient) {
    console.log('Hello QrCodeProvider Provider');
  }

  generate(text: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      qrcode.toDataURL(text, { errorCorrectionLevel: 'H' }, function (err, url) {
        if (err) {
            reject(err);
        } else {
            resolve(url);
        }
      })
    })
  }

  

}