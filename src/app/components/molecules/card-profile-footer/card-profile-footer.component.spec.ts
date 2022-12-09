import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProfileFooterComponent } from './card-profile-footer.component';

describe('CardProfileFooterComponent', () => {
  let component: CardProfileFooterComponent;
  let fixture: ComponentFixture<CardProfileFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardProfileFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardProfileFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
