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
  
  openImprint() {
    document.getElementById('imprint').classList.remove('d-none');
  }

  closeImprint() {
    document.getElementById('imprint').classList.add('d-none');

  }

  openPolicy() {
    document.getElementById('policy').classList.remove('d-none');
  }

  closePolicy() {
    document.getElementById('policy').classList.add('d-none');
  }

}




