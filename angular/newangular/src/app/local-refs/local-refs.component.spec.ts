import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalRefsComponent } from './local-refs.component';

describe('LocalRefsComponent', () => {
  let component: LocalRefsComponent;
  let fixture: ComponentFixture<LocalRefsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalRefsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalRefsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
