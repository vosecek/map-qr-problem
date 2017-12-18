import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';

@IonicPage()
@Component({
	selector: 'page-modal',
	templateUrl: 'modal.html',
})
export class ModalPage {


	constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController, private qr: QRScanner) {
	}

	ionViewDidLoad() {
		this.qr.prepare().then((status: QRScannerStatus) => {
			if (status.authorized) {
				this.qr.scan().subscribe((text: string) => {
					alert(text);
				});
			} else {
				alert('allow qr scanner	');
			}
			this.qr.show();
		});
	}

	dismiss(): void {
		this.qr.destroy().then(() => {
			this.viewCtrl.dismiss();
		});
	}

}
