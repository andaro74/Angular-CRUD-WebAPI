import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntertainerDetailComponent } from './entertainer-detail.component';

describe('EntertainerDetailComponent', () => {
  let component: EntertainerDetailComponent;
  let fixture: ComponentFixture<EntertainerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntertainerDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntertainerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
