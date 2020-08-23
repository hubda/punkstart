import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckSubmitComponent } from './deck-submit.component';

describe('DeckSubmitComponent', () => {
  let component: DeckSubmitComponent;
  let fixture: ComponentFixture<DeckSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeckSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeckSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
