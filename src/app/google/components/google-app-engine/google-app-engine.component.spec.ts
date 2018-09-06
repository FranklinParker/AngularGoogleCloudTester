import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleAppEngineComponent } from './google-app-engine.component';

describe('GoogleAppEngineComponent', () => {
  let component: GoogleAppEngineComponent;
  let fixture: ComponentFixture<GoogleAppEngineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleAppEngineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleAppEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
