import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BattlegearTableComponent } from './battlegear-table.component';

describe('BattlegearTableComponent', () => {
  let component: BattlegearTableComponent;
  let fixture: ComponentFixture<BattlegearTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BattlegearTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BattlegearTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
