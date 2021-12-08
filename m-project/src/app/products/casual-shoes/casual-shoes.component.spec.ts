import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasualShoesComponent } from './casual-shoes.component';

describe('CasualShoesComponent', () => {
  let component: CasualShoesComponent;
  let fixture: ComponentFixture<CasualShoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasualShoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasualShoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
