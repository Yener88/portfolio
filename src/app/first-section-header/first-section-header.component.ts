import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-section-header',
  templateUrl: './first-section-header.component.html',
  styleUrls: ['./first-section-header.component.scss']
})

export class FirstSectionHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Foto Rechts-Klick gesperrt!!
    let fotos = document.getElementsByTagName('img');
    for (var i = 0; i < fotos.length; i++) {
      (function (index) {
        fotos[index].addEventListener("contextmenu", (event) => {
          event.preventDefault();
          console.log("Right Click on picture: " + index + " blocked!!!");
        })
      })(i);
    }
  }

  // Open Mobile Navbar
  mobileNavbar() {
    document.getElementById('mobileNavbarContent').classList.add('slide');
    document.getElementById('mobileNavbarContent').classList.remove('d-none');
  }

  closeMobileNavbar() {
    document.getElementById('mobileNavbarContent').classList.add('d-none');
  }
  // Close by Select Section in the menu to see the selected Section
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
