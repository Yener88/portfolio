import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-section-skills',
  templateUrl: './second-section-skills.component.html',
  styleUrls: ['./second-section-skills.component.scss']
})
export class SecondSectionSkillsComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }

  language: 'english' | 'german' = 'english';
  clickLanguageButton() {
    if (this.language === 'english') {
      this.language = 'german';
    } else {
      this.language = 'english';
    }
  }
}
