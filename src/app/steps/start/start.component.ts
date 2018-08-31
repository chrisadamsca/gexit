import { StateService } from './../../state.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  constructor(
    public state: StateService
  ) { }

  ngOnInit() {
  }

}
