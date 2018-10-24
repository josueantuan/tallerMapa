import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GeolocalitationProvider } from "../../providers/geolocalitation/geolocalitation";
import { MouseEvent } from '@agm/core';
import { BaseProvider } from "../../providers/base/base";
import {Component,OnInit} from '@angular/core';

@IonicPage()
@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage implements OnInit {
  instruccion="";
  lat:any;
  lng:any;
  latC:any;
  lngC:any;
  public origin: any;
  public destination: any;
  validationList: any;
  address: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public geoloca:GeolocalitationProvider,
    private base: BaseProvider) {
    this.instruccion = this.navParams.get('instruccion');
    this.lat = this.geoloca.latD;
    this.lng = this.geoloca.lngD;
  }
  ionViewDidLoad(){
    this.geoloca.geolocal();
   }
  ngOnInit() {
    console.log(this.instruccion);
    this.lat = this.geoloca.latD;
    this.lng = this.geoloca.lngD;
    this.getDirection();
    this.baseC();
  }
  getDirection() {
    this.origin = { lat: this.geoloca.latD, lng: this.geoloca.lngD }
    this.destination = { lat: -0.167765, lng: -78.489688 } 
  }
  mapClicked($event: MouseEvent) {
    this.latC= $event.coords.lat;
    this.lngC= $event.coords.lng;
    this.destination = { lat: this.latC, lng: this.lngC }
    console.log(this.latC,this.lngC);
  }
  baseC(){
    let pro = this.base.getAddress();
    Promise.resolve(pro).then(data => {
      this.validationList = JSON.parse(JSON.stringify(data)).response;
      console.log(this.validationList);
      this.address = this.validationList;
      console.log(this.address);
    });
  }
}
