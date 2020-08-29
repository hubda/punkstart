import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackSubmitComponent } from './pack-submit.component';

describe('PackSubmitComponent', () => {
  let component: PackSubmitComponent;
  let fixture: ComponentFixture<PackSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
