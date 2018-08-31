import { StateService } from './../state.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-riddles',
  templateUrl: './riddles.component.html',
  styleUrls: ['./riddles.component.css']
})
export class RiddlesComponent implements OnInit {

  constructor(
    public state: StateService
  ) { }

  ngOnInit() {
  }

}
