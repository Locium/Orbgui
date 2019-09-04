import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CltOverviewComponent } from './clt-overview.component';

describe('CltOverviewComponent', () => {
  let component: CltOverviewComponent;
  let fixture: ComponentFixture<CltOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CltOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CltOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
