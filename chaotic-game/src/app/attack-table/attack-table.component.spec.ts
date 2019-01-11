import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttackTableComponent } from './attack-table.component';

describe('AttackTableComponent', () => {
  let component: AttackTableComponent;
  let fixture: ComponentFixture<AttackTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttackTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttackTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
