import { Component, OnInit, ElementRef, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  @ViewChildren('NewsCard', { read: ElementRef }) newscards: QueryList<ElementRef>
  news = [
    {
      title: 'Headline 1',
      text: 'Text 1',
      left: 'L',
      right: 'R'
    },
    {
      title: 'Headline2',
      text: 'Text 2',
      left: 'L',
      right: 'R'
    },
    {
      title: 'Headline 3',
      text: 'Text 3',
      left: 'L',
      right: 'R'
    },
    {
      title: 'Headline 4',
      text: 'Text 4',
      left: 'L',
      right: 'R'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  swipe(index, e) {

      const el = this.newscards['_results'][index].nativeElement;
      const position = el.offsetLeft;
      console.log(position + 1 + 'px')
      if (e.velocityX < 0 && position - 2 < (el.clientWidth / 4)) {
        el.style.left = (position - 2 + e.velocityX) + 'px';
      }
      if (e.velocityX > 0 && position + 2 < (el.clientWidth / 4)) {
        el.style.left = (position + 2 + e.velocityX) + 'px';
      }

  }

}
