import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

declare var plugin: any;
declare var cordova: any;

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	@ViewChild('mapdiv') mapdiv: ElementRef;
	map: any;

	constructor(
		public navCtrl: NavController,
		private modal: ModalController
	) {

	}

	openQrScanner(): void {
		let scanner = this.modal.create('ModalPage');
		scanner.onDidDismiss(() => {
			console.log('dismiss');
			setTimeout(() => {
				cordova.fireDocumentEvent('plugin_touch', {});
			}, 500);
		});
		scanner.present();
	}

	ionViewDidEnter(): void {
		console.log('ionViewDidEnter');
		let cameraTarget = {
			'target': { "lat": 50, "lng": 14 },
			'zoom': 12
		};

		this.map = plugin.google.maps.Map.getMap(this.mapdiv.nativeElement, {
			'backgroundColor': 'white',
			'controls': {
				'myLocationButton': true,
				'compass': false,
				'indoorPicker': false,
				'zoom': false,
				'mapToolbar': false
			},
			'gestures': {
				'scroll': true,
				'tilt': false,
				'rotate': false,
				'zoom': true
			},
			'camera': cameraTarget,
		});

		var self = this;
		this.map.one(plugin.google.maps.event.MAP_READY, () => {
			setTimeout(() => {
				cordova.fireDocumentEvent('plugin_touch', {});
			}, 500);
		});

	}

}
