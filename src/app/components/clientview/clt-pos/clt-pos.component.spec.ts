import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CltPosComponent } from './clt-pos.component';

describe('CltPosComponent', () => {
  let component: CltPosComponent;
  let fixture: ComponentFixture<CltPosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CltPosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CltPosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
