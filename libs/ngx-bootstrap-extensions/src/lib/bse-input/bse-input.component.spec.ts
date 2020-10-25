import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BseInputComponent } from './bse-input.component';

describe('BseInputComponent', () => {
  let component: BseInputComponent;
  let fixture: ComponentFixture<BseInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BseInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BseInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
