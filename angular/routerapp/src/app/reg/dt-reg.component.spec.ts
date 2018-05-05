import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DtRegComponent } from './dt-reg.component';

describe('DtRegComponent', () => {
  let component: DtRegComponent;
  let fixture: ComponentFixture<DtRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DtRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DtRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
