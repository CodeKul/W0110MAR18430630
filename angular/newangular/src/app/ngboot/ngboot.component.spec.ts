import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbootComponent } from './ngboot.component';

describe('NgbootComponent', () => {
  let component: NgbootComponent;
  let fixture: ComponentFixture<NgbootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgbootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
