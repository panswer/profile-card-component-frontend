import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePictureCircleComponent } from './profile-picture-circle.component';

describe('ProfilePictureCircleComponent', () => {
  let component: ProfilePictureCircleComponent;
  let fixture: ComponentFixture<ProfilePictureCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilePictureCircleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilePictureCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
