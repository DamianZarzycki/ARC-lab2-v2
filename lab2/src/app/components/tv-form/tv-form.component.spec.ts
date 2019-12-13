import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvFormComponent } from './tv-form.component';

describe('TvFormComponent', () => {
  let component: TvFormComponent;
  let fixture: ComponentFixture<TvFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
