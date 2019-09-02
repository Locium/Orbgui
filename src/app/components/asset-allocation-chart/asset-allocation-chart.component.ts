import {Component, Injectable, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";

// import 'rxjs/add/operator/map';

// This will allow you to load `.json` files from disk

import * as dataAssetAllocation from '../../data/assetAllocationData/assetAllocationData.json';




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

  public data_assetAllocation = dataAssetAllocation;

  public assetAllocationLabels = ['cash' , 'equity' , 'real estate' , 'commodities'];
  public assetAllocationType = 'doughnut';
  public assetAllocationLegend = false;
  // @ts-ignore
  public assetAllocationData = [
    {data: [dataAssetAllocation.assets.cash, dataAssetAllocation.assets.equity, dataAssetAllocation.assets["real estate"], dataAssetAllocation.assets.commodities]},
     //{data:  data},
  ];



  //constructor() {
  //  console.log(dataAssetAllocation.assets.cash, dataAssetAllocation.assets.equity, dataAssetAllocation.assets["real estate"], dataAssetAllocation.assets.commodities)
  //}



  ngOnInit() {

  }

}
