import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenceProgrammeComponent } from './conference-programme.component';

describe('ConferenceProgrammeComponent', () => {
  let component: ConferenceProgrammeComponent;
  let fixture: ComponentFixture<ConferenceProgrammeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConferenceProgrammeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferenceProgrammeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
