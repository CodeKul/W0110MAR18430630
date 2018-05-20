import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebSampleComponent } from './web-sample.component';

describe('WebSampleComponent', () => {
  let component: WebSampleComponent;
  let fixture: ComponentFixture<WebSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
