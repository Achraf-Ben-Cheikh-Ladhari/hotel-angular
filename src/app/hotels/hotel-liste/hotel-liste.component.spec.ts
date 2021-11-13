import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelListeComponent } from './hotel-liste.component';

describe('HotelListeComponent', () => {
  let component: HotelListeComponent;
  let fixture: ComponentFixture<HotelListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelListeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
