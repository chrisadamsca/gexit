import { StateService } from './../state.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  answer: string;


  constructor(
    private router: Router,
    private state: StateService
  ) { }

  ngOnInit() {
    this.state.changeStep(0);
  }

  validateAnswer(e) {
    e.preventDefault();
    if (this.answer.toLowerCase().includes('wo')) {
      this.router.navigate(['/riddles']);
    }
  }

}
