import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProfileBodyComponent } from './card-profile-body.component';

describe('CardProfileBodyComponent', () => {
  let component: CardProfileBodyComponent;
  let fixture: ComponentFixture<CardProfileBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardProfileBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardProfileBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
