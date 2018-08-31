import { StateService } from './../state.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-nav',
  templateUrl: './search-nav.component.html',
  styleUrls: ['./search-nav.component.css']
})
export class SearchNavComponent implements OnInit {


  constructor(
    public state: StateService
  ) {
  }

  ngOnInit() {
  }


  changeStep(index) {
    if(index === 1) {
      this.state.changeStep(index);
    }
  }

}
