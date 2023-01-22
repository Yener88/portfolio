import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sixth-section-footer',
  templateUrl: './sixth-section-footer.component.html',
  styleUrls: ['./sixth-section-footer.component.scss']
})
export class SixthSectionFooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // open and close imprint and policy
  openImprint() {
    document.getElementById('imprint').classList.add('slide-up');
    document.getElementById('imprint').classList.remove('d-none');
    document.documentElement.style.setProperty('overflow-y', 'hidden');
  }

  closeImprint() {
    document.getElementById('imprint').classList.add('d-none');
    document.documentElement.style.setProperty('overflow-y', 'auto');
  }

  openPolicy() {
    document.getElementById('policy').classList.add('slide-up');
    document.getElementById('policy').classList.remove('d-none');
    document.documentElement.style.setProperty('overflow-y', 'hidden');

  }

  closePolicy() {
    document.getElementById('policy').classList.add('d-none');
    document.documentElement.style.setProperty('overflow-y', 'auto');
  }
}




