import { StateService } from './../state.service';
import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {

  @ViewChild('SearchInput') searchInput: ElementRef;

  answer: string = '';

  @Input() placeholder = '';

  error = false;

  constructor(
    public state: StateService
  ) { }

  ngOnInit() {
  }

  validateAnswer(e) {
    e.preventDefault();

    this.searchInput.nativeElement.blur();

    const correctAnswer = this.state.steps[this.state.currentStep$.getValue()].answer;
    if (this.answer.toLocaleLowerCase().includes(correctAnswer.toLowerCase())) {
      this.state.changeStep(this.state.currentStep$.getValue() + 1);
    } else {
      this.error = true;
    }

    this.answer = '';
  }

  tryAgain() {
    this.error = false;
  }

}
