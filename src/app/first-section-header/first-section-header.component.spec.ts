import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstSectionHeaderComponent } from './first-section-header.component';

describe('FirstSectionHeaderComponent', () => {
  let component: FirstSectionHeaderComponent;
  let fixture: ComponentFixture<FirstSectionHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FirstSectionHeaderComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FirstSectionHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
