import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgTopCardComponent } from './bg-top-card.component';

describe('BgTopCardComponent', () => {
  let component: BgTopCardComponent;
  let fixture: ComponentFixture<BgTopCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BgTopCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BgTopCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
