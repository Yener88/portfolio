import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdSectionProjectsComponent } from './third-section-projects.component';

describe('ThirdSectionProjectsComponent', () => {
  let component: ThirdSectionProjectsComponent;
  let fixture: ComponentFixture<ThirdSectionProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdSectionProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdSectionProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
