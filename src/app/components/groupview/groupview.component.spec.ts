import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupviewComponent } from './groupview.component';

describe('GroupviewComponent', () => {
  let component: GroupviewComponent;
  let fixture: ComponentFixture<GroupviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
