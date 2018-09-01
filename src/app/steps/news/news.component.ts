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
      title: '"War schon immer Queen-Fan“: Trump gratuliert Elisabeth II. zu „Bohemian Rhapsody"',
      left: 'N',
      right: 'L',
      position: 0
    },
    {
      title: 'Gefundene Bombe wurde Passagier von Flughafen-Security zurückgegeben',
      left: 'A',
      right: 'U',
      position: 0
    },
    {
      title: 'Kindertagesstätte, die Fightclub unter Kleinkindern veranstaltete, aufgeflogen – Eltern sind empört',
      left: 'K',
      right: 'N',
      position: 0
    },
    {
      title: 'Letzte Hochzeitsvorbereitungen: Queen überprüft Meghan Markle auf ihre Jungfräulichkeit',
      left: 'P',
      right: 'D',
      position: 0
    },
    {
      title: 'LKW mit Brotteigladung quillt wegen großer Hitze ',
      left: 'H',
      right: 'A',
      position: 0
    },
    {
      title: 'Richter verordnet Hawiianer seiner Ex 144 Komplimente zu schreiben',
      left: 'A',
      right: 'I',
      position: 0
    },
    {
      title: 'Darsteller zu alt: "Dinner for One" wird dieses Jahr zum letzten Mal live aufgeführt',
      left: 'E',
      right: 'U',
      position: 0
    },
    {
      title: 'Indonesien setzt Soldaten zum Schutz gegen Affen ein',
      left: 'S',
      right: 'M',
      position: 0
    }
  ];

  constructor(
    public state: StateService
  ) { }

  ngOnInit() {
  }

  swipe(index, e) {
    console.log(e)
    if (e.type === 'panmove') {
      const el = this.newscards['_results'][index].nativeElement;

      if (this.news[index].position  + e.deltaX <= -100) {
        el.style.left = -100 + "px";
      } else if (this.news[index].position  + e.deltaX >= 100) {
        el.style.left = 100 + "px";
      } else {
        el.style.left = this.news[index].position  + e.deltaX + "px";
      }
    } else if (e.type === 'panend') {
      this.news[index].position = this.news[index].position + e.deltaX;
    }


      // if (e.velocityX < 0 && position - 2 < (el.clientWidth / 4)) {
      //   el.style.left = (position - 2 + e.velocityX) + 'px';
      // }
      // if (e.velocityX > 0 && position + 2 < (el.clientWidth / 4)) {
      //   el.style.left = (position + 2 + e.velocityX) + 'px';
      // }

  }

}
