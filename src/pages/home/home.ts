import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private showInput : boolean;
  private datagen : any;
  private showData : boolean;
  private parameters : any;
  private number : number ;
  constructor(public navCtrl: NavController,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController
  ) {
  this.datagen = [];
  this.parameters = {};
  this.showInput=true;
  }
  onSubmit(){

  }
  getRandomInt(min, max) {
    this.number = Math.floor(Math.random() * (max-min)) + +min;
    return this.number;
  }

  generateData(){
    this.presentLoading();
    console.log(this.parameters);

    for (let i = 0; i < this.parameters.items; i++) {
     let weight = this.getRandomInt(this.parameters.inferiorPeso,this.parameters.superiorPeso);
     let rating = this.getRandomInt(this.parameters.inferiorValor,this.parameters.superiorValor);
     this.datagen[i] = {weight,rating}
  }
  console.log(this.datagen);
    this.presentToast();
    this.showInput = false;
    this.showData = true;
  }
  newInstance(){
    this.showInput = true;
    this.showData = false;
    this.datagen = [];
  }
  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Instancia aleatoria generada correctamente',
      duration: 1000
    });
    toast.present();
  }
  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Generando instancia aleatoria...",
      duration: 500
    });
    loader.present();
  }
}
