import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeAlertComponent } from './code-alert.component';

describe('CodeAlertComponent', () => {
  let component: CodeAlertComponent;
  let fixture: ComponentFixture<CodeAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
