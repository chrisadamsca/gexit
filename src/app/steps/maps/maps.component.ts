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
      lang: 7.982612
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
