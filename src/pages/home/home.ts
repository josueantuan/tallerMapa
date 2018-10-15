import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GeolocalitationProvider } from "../../providers/geolocalitation/geolocalitation";
import { MapaPage } from '../mapa/mapa';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  instruccion:string = "";
  constructor(public navCtrl: NavController, private geoloca:GeolocalitationProvider) {
    
  }
  ionViewDidLoad(){
   this.geoloca.geolocal();
  }
  mapaM(){
    this.navCtrl.push(MapaPage,{instruccion:"Marca"});
  }
  mapaD(){
    this.navCtrl.push(MapaPage,{instruccion:"Dirección"});
  }
  mapaS(){
    this.navCtrl.push(MapaPage,{instruccion:"Sitio"});
  }
}
