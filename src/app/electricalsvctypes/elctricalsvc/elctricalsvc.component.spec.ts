import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElctricalsvcComponent } from './elctricalsvc.component';

describe('ElctricalsvcComponent', () => {
  let component: ElctricalsvcComponent;
  let fixture: ComponentFixture<ElctricalsvcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElctricalsvcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElctricalsvcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
