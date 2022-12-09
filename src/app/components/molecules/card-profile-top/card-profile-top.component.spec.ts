import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProfileTopComponent } from './card-profile-top.component';

describe('CardProfileTopComponent', () => {
  let component: CardProfileTopComponent;
  let fixture: ComponentFixture<CardProfileTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardProfileTopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardProfileTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
