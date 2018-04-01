import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterCompComComponent } from './inter-comp-com.component';

describe('InterCompComComponent', () => {
  let component: InterCompComComponent;
  let fixture: ComponentFixture<InterCompComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterCompComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterCompComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
