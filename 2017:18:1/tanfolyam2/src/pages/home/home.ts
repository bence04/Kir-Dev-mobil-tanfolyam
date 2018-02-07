import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public userName: string;
  public password: string;
  public loginUserName: string;
  public loginPassword: string;
  public rePassword: string;
  public isError = false;

  private movies = [
    {
      category: "Comedy",
      movies: [
        "Comedy1",
        "Comedy2",
        "Comedy3"
      ]
    },
    {
      category: "Action",
      movies: [
        "Action1",
        "Action2",
        "Action3"
      ]
    }
  ];

  constructor(public storage: Storage, public navCtrl: NavController) {

  }

  registration() {
    if(this.userName != null && this.password != null && this.rePassword) {
      if(this.password == this.rePassword) {
        this.storage.set("username", this.userName);
        this.storage.set("password", this.password);
      } else {
        this.isError = true;
      }
    } else {
      this.isError = true;
    }
  }

  login() {
    this.storage.get('username').then((val) => {
      if(val == this.loginUserName) {
        this.storage.get('password').then((pass) => {
          if(pass == this.loginPassword) {
            alert("Sikeres login");
          } else {
            alert("Hibás jelszó");
          }
        });
      } else {
        alert("Hibás felhasználónév");
      }
    });
  }


}
