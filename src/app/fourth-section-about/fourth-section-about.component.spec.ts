import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthSectionAboutComponent } from './fourth-section-about.component';

describe('FourthSectionAboutComponent', () => {
  let component: FourthSectionAboutComponent;
  let fixture: ComponentFixture<FourthSectionAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourthSectionAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FourthSectionAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
