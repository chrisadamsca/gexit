import { StateService } from './../../state.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bilder',
  templateUrl: './bilder.component.html',
  styleUrls: ['./bilder.component.css']
})
export class BilderComponent implements OnInit {

  bilder = [
    {
      image: 'bild1.jpeg',
    },
    {
      image: 'bild2.jpeg',
    },
    {
      image: 'bild3.jpeg',
    },
    {
      image: 'bild4.jpeg',
    }
  ]

  constructor(
    public state: StateService
  ) { }

  ngOnInit() {
  }

}
