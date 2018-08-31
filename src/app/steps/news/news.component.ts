import { StateService } from './../../state.service';
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
      title: 'War schon immer Queen-Fan“: Trump gratuliert Elisabeth II. zu „Bohemian Rhapsody',
      left: 'N',
      right: 'L'
    },
    {
      title: 'Gefundene Bombe wurde Passagier von Flughafen-Security zurückgegeben',
      left: 'A',
      right: 'U'
    },
    {
      title: 'Kindertagesstätte, die Fightclub unter Kleinkindern veranstaltete, aufgeflogen – Eltern sind empört',
      left: 'K',
      right: 'N'
    },
    {
      title: 'Letzte Hochzeitsvorbereitungen: Queen überprüft Meghan Markle auf ihre Jungfräulichkeit',
      left: 'P',
      right: 'D'
    },
    {
      title: 'LKW mit Brotteigladung quillt wegen großer Hitze ',
      left: 'H',
      right: 'A'
    },
    {
      title: 'Richter verordnet Hawiianer seiner Ex 144 Komplimente zu schreiben',
      left: 'A',
      right: 'I'
    },
    {
      title: 'Darsteller zu alt: "Dinner for One" wird dieses Jahr zum letzten Mal live aufgeführt',
      left: 'E',
      right: 'U'
    },
    {
      title: 'Indonesien setzt Soldaten zum Schutz gegen Affen ein',
      left: 'S',
      right: 'M'
    }
  ];

  constructor(
    public state: StateService
  ) { }

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
