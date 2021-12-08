import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormalsShoesComponent } from './formals-shoes.component';

describe('FormalsShoesComponent', () => {
  let component: FormalsShoesComponent;
  let fixture: ComponentFixture<FormalsShoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormalsShoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormalsShoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
