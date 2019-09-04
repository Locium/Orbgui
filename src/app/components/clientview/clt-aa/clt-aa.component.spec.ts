import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CltAAComponent } from './clt-aa.component';

describe('CltAAComponent', () => {
  let component: CltAAComponent;
  let fixture: ComponentFixture<CltAAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CltAAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CltAAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
