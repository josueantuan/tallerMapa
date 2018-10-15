import { Injectable } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';


@Injectable()
export class GeolocalitationProvider {
  public lat:number;
  public lng:number;
  public latD:number;
  public lngD:number;
  constructor(private geolocation: Geolocation) {
    console.log('Hello GeolocalitationProvider Provider');
    this.geolocal();
  }
  geolocal(){
    this.geolocation.getCurrentPosition().then((geoposition:Geoposition)=>{
      
      this.lat=geoposition.coords.latitude;
      this.lng=geoposition.coords.longitude;
    });
    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
      this.latD = data.coords.latitude;
      this.lngD = data.coords.longitude;
      console.log(this.latD,this.lngD);
    }); 
  }
}
