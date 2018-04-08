import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerBtnComponent } from './ser-btn.component';

describe('SerBtnComponent', () => {
  let component: SerBtnComponent;
  let fixture: ComponentFixture<SerBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
