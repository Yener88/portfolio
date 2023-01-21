import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-fourth-section-about',
  templateUrl: './fourth-section-about.component.html',
  styleUrls: ['./fourth-section-about.component.scss'],
})

export class FourthSectionAboutComponent implements OnInit, OnDestroy {
  texts = [
    `" I am a passionate Frontend Developer with a background as an information electronics technician who loves pushing boundaries and learning new exciting things. "`,
    `" When I was at school, I made my first experience and was already very interested in software and hardware of different kinds of electronics. "`,
    `" To turn my passion into a profession, I completed the intensive course at the Developer Academy in August 2022. "`
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