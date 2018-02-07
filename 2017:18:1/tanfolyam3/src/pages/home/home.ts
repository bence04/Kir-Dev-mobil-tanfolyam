import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/toPromise';
import { ApiService } from '../../shared/api.service'; // <---

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ ApiService ] // <---
})
export class HomePage {

  private apiUrl = "http://gyromouse.net/app/tanfolyam/jegyek.php";
  private apiResult;

  constructor(public navCtrl: NavController, private apiService: ApiService) {
    this.GetData();
  }

  GetData() {
    this.apiService.GetData(this.apiUrl)
      .then(result => {
        this.apiResult = result;
      })
      .catch(error => {
        alert("Hiba: " + error);
      });
  }
}
