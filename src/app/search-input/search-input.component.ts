import { StateService } from './../state.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {

  answer: string = '';

  @Input() placeholder = '';

  constructor(
    public state: StateService
  ) { }

  ngOnInit() {
  }

  validateAnswer() {
    const correctAnswer = this.state.steps[this.state.currentStep$.getValue()].answer;
    if (this.answer.toLocaleLowerCase() === correctAnswer.toLowerCase()) {
      this.state.changeStep(this.state.currentStep$.getValue() + 1);
    } else {
      alert('Falsche Antwort!');
    }

    this.answer = '';
  }

}
