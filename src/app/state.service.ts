import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class StateService {

  steps = [
    {
      label: 'Alle',
      text: 'Huhu Silvana, heute ist ein toller Tag! Viel Spiel, Spaß und Freude warten auf dich.  Um nun herauszufinden wo es als nächstes hingeht, musst du zuvor noch drei Rätsel lösen. Dabei kannst du jederzeit auf die Hilfe deiner Mädels zurückgreifen, falls du einmal nicht weißer weißt. Schau dir doch zuerst einmal die Bilder an :)',
      answer: null
    },
    {
      label: 'Bilder',
      text: '4 in 1',
      answer: 'Nest'
    },
    {
      label: 'News',
      text: 'Wahrheit oder Fake News?',
      answer: 'Penis'
    },
    {
      label: 'Maps',
      text: '',
      orte: [
        {
          label: 'Anusland',
          lat: 123,
          lang: 321
        }
      ],
      answer: 'Nest'
    },
    {
      label: null,
      text: null,
      answer: null
    }
  ];

  currentStep$ = new BehaviorSubject<number>(0);

  constructor() {
    if(this.getCookie('currentStep') === "") {
      this.changeStep(0);
    } else {
      this.currentStep$.next(Number(this.getCookie('currentStep')));
    };
  }

  changeStep(index) {
    this.currentStep$.next(index);
    this.setCookie('currentStep', index);
  }







  setCookie(cname, cvalue, exdays = 10) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
  }

}


export interface Step {
  label: string;
  text: string;
  answer: string;
  orte?: any;
}
