import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {

  mapOptions: google.maps.MapOptions = {
    center: { lat: 46.51366209019871, lng: -84.33575796441802 },
    zoom : 3
  }
  marker = {
    position: { lat: 46.51366209019871, lng: -84.33575796441802 }
  }
  ngOnInit(): void {
  }

}
