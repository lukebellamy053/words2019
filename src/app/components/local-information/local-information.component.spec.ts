import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalInformationComponent } from './local-information.component';

describe('LocalInformationComponent', () => {
  let component: LocalInformationComponent;
  let fixture: ComponentFixture<LocalInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
