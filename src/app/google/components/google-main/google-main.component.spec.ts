import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleMainComponent } from './google-main.component';

describe('GoogleMainComponent', () => {
  let component: GoogleMainComponent;
  let fixture: ComponentFixture<GoogleMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
