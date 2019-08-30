import { Component, OnInit } from '@angular/core';
// import * as assetAllocationData from '../../data/assetAllocationData/assetAllocationData.json';
// import 'rxjs/add/operator/map';


@Component({
  selector: 'app-asset-allocation-chart',
  templateUrl: './asset-allocation-chart.component.html',
  styleUrls: ['./asset-allocation-chart.component.css']
})
export class AssetAllocationChartComponent implements OnInit {



  public assetAllocationOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public assetAllocationLabels = ['cash' , 'equity' , 'real estate' , 'commodities'];
  public assetAllocationType = 'doughnut';
  public assetAllocationLegend = false;
  public assetAllocationData = [
    {data: [34567, 98765, 45678, 12345]},
  ];


  constructor() { }

  ngOnInit() {
  }

}
