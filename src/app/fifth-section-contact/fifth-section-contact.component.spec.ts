import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthSectionContactComponent } from './fifth-section-contact.component';

describe('FifthSectionContactComponent', () => {
  let component: FifthSectionContactComponent;
  let fixture: ComponentFixture<FifthSectionContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FifthSectionContactComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FifthSectionContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
