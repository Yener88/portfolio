import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixthSectionFooterComponent } from './sixth-section-footer.component';

describe('SixthSectionFooterComponent', () => {
  let component: SixthSectionFooterComponent;
  let fixture: ComponentFixture<SixthSectionFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SixthSectionFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SixthSectionFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
