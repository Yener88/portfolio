import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-section-header',
  templateUrl: './first-section-header.component.html',
  styleUrls: ['./first-section-header.component.scss']
})
export class FirstSectionHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
