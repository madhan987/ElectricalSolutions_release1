import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolortypesComponent } from './solortypes.component';

describe('SolortypesComponent', () => {
  let component: SolortypesComponent;
  let fixture: ComponentFixture<SolortypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolortypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolortypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
