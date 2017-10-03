import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// Hozzáadva
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private nev : string = "Dani";
  private pass : string;

  constructor(public storage: Storage, public toastCtrl: ToastController, public navCtrl: NavController) {
    storage.get('name').then((val) => {
      alert("Eltárolt nevem: " + val);
    });
  }

  ButtonPress() {
    this.storage.set('name', this.nev);
    let toast = this.toastCtrl.create({
      message: "Név: " + this.nev + ", pass: " + this.pass,
      duration: 3000,
      position: "top",
      showCloseButton: true
    });
    toast.present();
  }

}
