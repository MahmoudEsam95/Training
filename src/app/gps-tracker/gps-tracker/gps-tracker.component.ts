
// import { Component, OnInit } from '@angular/core';
// import * as mapboxgl from 'mapbox-gl';

// @Component({
//   selector: 'app-gps-tracker',
//   templateUrl: './gps-tracker.component.html',
//   styleUrls: ['./gps-tracker.component.css']
// })
// export class GpsTrackerComponent implements OnInit {
//   latitude: number = 30.0517095;
//   longitude: number = 31.2061008;
//   map: mapboxgl.Map | null = null;
//   error: string | undefined;

//   constructor() {
//     (mapboxgl as any).accessToken = 'pk.eyJ1IjoibGVyb2k5NSIsImEiOiJjbHg4dXhwMmwxZ3hsMm1zYzV3NjFlNzZzIn0.56dzHpiZuYRs9bJ2bFXTww';
//   }

//   ngOnInit(): void {
//     this.loadMap();
//   }

//   loadMap() {
//     this.map = new mapboxgl.Map({
//       container: 'map', // container ID
//       style: 'mapbox://styles/mapbox/streets-v11', // style URL
//       center: [this.longitude, this.latitude], // starting position [lng, lat]
//       zoom: 12 // starting zoom
//     });

//     new mapboxgl.Marker()
//       .setLngLat([this.longitude, this.latitude])
//       .addTo(this.map);
//   }
// }
