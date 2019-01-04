import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Storage } from '@ionic/storage';
import { qrcode } from 'qrcode';

/*
  Generated class for the QrCodeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class QrCodeProvider {
  private qrcodes: Array<{ text:string, createdAt: Date }> = [];
  public change: EventEmitter<any[]> = new EventEmitter();
  static HISTORY_STORAGE_KEY: string = 'bonjour';

  constructor(public http: HttpClient, private storage: Storage) {
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

  addQRCode(text: string) {
    this.qrcodes.push({
        text,
        createdAt: new Date()
    });
    this.save();
    this.change.emit(this.qrcodes);
}

save() {
    return this.storage.set(QrCodeProvider.HISTORY_STORAGE_KEY, this.qrcodes);
}

private async init() {
    try {
        this.qrcodes = await this.storage.get(QrCodeProvider.HISTORY_STORAGE_KEY) || [];
        this.change.emit(this.qrcodes);
    } catch (err) {
        console.log(err)
    }
}

public load() {
  this.change.emit(this.qrcodes);
}

  

}