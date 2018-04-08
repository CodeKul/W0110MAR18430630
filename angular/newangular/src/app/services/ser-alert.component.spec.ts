import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerAlertComponent } from './ser-alert.component';

describe('SerAlertComponent', () => {
  let component: SerAlertComponent;
  let fixture: ComponentFixture<SerAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
