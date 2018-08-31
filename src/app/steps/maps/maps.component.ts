import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  orte = [
    {
      name: 'Ebersweier',
      lat: 48.507456,
      long: 7.982612
    },
    {
      name: 'Nesselried',
      lat: 48.521840,
      long: 8.006352
    },
    {
      name: 'Titisee-Neustadt',
      lat: 47.923592,
      long: 8.189634
    },
    {
      name: 'Schutterwald',
      lat: 48.458198,
      long: 7.882432
    },
    {
      name: 'Pforzheim',
      lat: 48.892168,
      long: 8.689657
    },
    {
      name: 'Aalen',
      lat: 48.836596,
      long: 10.097204
    },
    {
      name: 'Nürnberg',
      lat: 49.453842,
      long: 11.074009
    },
    {
      name: 'Neckargemünd',
      lat: 49.386621,
      long: 8.801748
    },
    {
      name: 'Ulm',
      lat: 48.400126,
      long: 9.986445
    },
    {
      name: 'Northeim',
      lat: 51.699155,
      long: 9.994893
    },
    {
      name: 'Greifswald',
      lat: 54.087199,
      long: 13.391996
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
