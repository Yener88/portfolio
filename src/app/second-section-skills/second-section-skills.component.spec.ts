import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondSectionSkillsComponent } from './second-section-skills.component';

describe('SecondSectionSkillsComponent', () => {
  let component: SecondSectionSkillsComponent;
  let fixture: ComponentFixture<SecondSectionSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecondSectionSkillsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SecondSectionSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
