import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-section-header',
  templateUrl: './first-section-header.component.html',
  template: `
  <div (contextmenu)="onRightClick()">Right click me!</div>
`,
  styleUrls: ['./first-section-header.component.scss']
})
export class FirstSectionHeaderComponent implements OnInit {




  constructor() { }

  ngOnInit(): void {
    document.addEventListener("contextmenu", (event) => {
      event.preventDefault();
      console.log('Wer die Konsole nicht ehrt, ist das Programmieren nicht wert!');
    });
  }

  mobileNavbar() {
    document.getElementById('mobileNavbarContent').classList.remove('d-none');
  }

  closeMobileNavbar() {
    document.getElementById('mobileNavbarContent').classList.add('d-none');
  }

  openContact() {
    this.closeMobileNavbar();
  }

  openAbout() {
    this.closeMobileNavbar();
  }

  openProjects() {
    this.closeMobileNavbar();
  }
}
