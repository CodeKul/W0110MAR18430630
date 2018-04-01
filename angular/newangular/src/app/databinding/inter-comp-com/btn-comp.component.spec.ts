import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnCompComponent } from './btn-comp.component';

describe('BtnCompComponent', () => {
  let component: BtnCompComponent;
  let fixture: ComponentFixture<BtnCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
