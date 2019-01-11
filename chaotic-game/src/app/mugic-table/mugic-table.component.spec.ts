import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MugicTableComponent } from './mugic-table.component';

describe('MugicTableComponent', () => {
  let component: MugicTableComponent;
  let fixture: ComponentFixture<MugicTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MugicTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MugicTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
