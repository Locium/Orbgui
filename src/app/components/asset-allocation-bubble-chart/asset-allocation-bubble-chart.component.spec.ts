import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetAllocationBubbleChartComponent } from './asset-allocation-bubble-chart.component';

describe('AssetAllocationBubbleChartComponent', () => {
  let component: AssetAllocationBubbleChartComponent;
  let fixture: ComponentFixture<AssetAllocationBubbleChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetAllocationBubbleChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetAllocationBubbleChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
