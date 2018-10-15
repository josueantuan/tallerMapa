import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GeolocalitationProvider } from "../../providers/geolocalitation/geolocalitation";
import { MouseEvent } from '@agm/core';
@IonicPage()
@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage {
  instruccion="";
  lat:any;
  lng:any;
  latC:any;
  lngC:any;
  public origin: any;
  public destination: any;
  markers = [
	  {
		  latC:this.lat,
		  lngC:this.lng,
		  draggable: false
	  }  
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams, public geoloca:GeolocalitationProvider) {
    this.instruccion = this.navParams.get('instruccion');
    this.lat = this.geoloca.lat;
    this.lng = this.geoloca.lng;
  }
  ngOnInit() {
    console.log(this.instruccion);
    this.lat = this.geoloca.lat;
    this.lng = this.geoloca.lng;
    this.getDirection();
  }
   
  getDirection() {
    this.origin = { lat: this.geoloca.latD, lng: this.geoloca.lngD }
    this.destination = { lat: -0.167765, lng: -78.489688 }
    
  }
  mapClicked($event: MouseEvent) {
    this.markers.push({
      latC: $event.coords.lat,
      lngC: $event.coords.lng,
      draggable: false
    });
    this.latC= $event.coords.lat;
    this.lngC= $event.coords.lng;
    this.origin = { lat: this.lat, lng: this.lng }
    this.destination = { lat: this.latC, lng: this.lngC }
    console.log(this.latC,this.lngC);
  }
}
