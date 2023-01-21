import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-fourth-section-about',
  templateUrl: './fourth-section-about.component.html',
  styleUrls: ['./fourth-section-about.component.scss'],
})

export class FourthSectionAboutComponent implements OnInit, OnDestroy {
  texts = [
    `<span id="trans19">
        " When I was at school, I made my first experience and was already very interested in software and hardware of different kinds of electronics. "
    </span>`,
    `<span id="trans21">
        " At the age of 15, I programmed my first homepage which was built like a social media profile about myself based on HTML/CSS. "
    </span>`,
    `<span id="trans23">
        " After school, I completed an apprenticeship in IT and gained a total of around 8 years of professional experience. "
    </span>`,
    `<span id="trans25">
        " To turn my passion into a profession, I completed the intensive course at the Developer Academy in August 2022. "
    </span>`
  ];
  currentIndex = 0;
  intervalId: any;

  constructor() { }

  ngOnInit(): void {
    this.startSlider();
  }

  startSlider() {
    this.intervalId = setInterval(() => {
      document.getElementById('trans17').innerHTML = this.texts[this.currentIndex];
      this.currentIndex = (this.currentIndex + 1) % this.texts.length;
    }, 6000);
  }


  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}