import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterHackatonComponent } from './register-hackaton.component';

describe('RegisterHackatonComponent', () => {
  let component: RegisterHackatonComponent;
  let fixture: ComponentFixture<RegisterHackatonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterHackatonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterHackatonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
