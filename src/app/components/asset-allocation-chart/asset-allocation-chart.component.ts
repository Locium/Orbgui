import {Component, Injectable, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";

// import 'rxjs/add/operator/map';

// This will allow you to load `.json` files from disk

import * as dataAssetAllocation from '../../data/assetAllocationData/assetAllocationData.json';
import {ActivatedRoute, Router} from "@angular/router";
import {DataService} from "../../data.service";




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
  public bpId;
  public bpAssetAllocation;
  public bpAssetAllocationCash;
  public bpAssetAllocationCommodities;
  public bpAssetAllocationOtherAssets;
  public bpAssetAllocationEquity;

  // @ts-ignore
  public assetAllocationData = [];


    //= [
    //{data: [dataAssetAllocation.assets.cash, dataAssetAllocation.assets.equity, dataAssetAllocation.assets["other assets"], dataAssetAllocation.assets.commodities]},
    //{data:  [282361.74, 282361.74, 447705, 45546]},
   // {data:  [this.bpAssetAllocationCash, this.bpAssetAllocationEquity, this.bpAssetAllocationOtherAssets, this.bpAssetAllocationCommodities]},
  //];

  constructor(private navrouter: Router, private dataService: DataService, private router: ActivatedRoute) {

  }

  ngOnInit() {


    this.router.params.subscribe(params => {
      let id = this.router.parent.snapshot.params.id;
      this.bpId = id;
      console.log(id);
    });



    this.dataService.get_bp_asset_allocation(this.bpId).subscribe((res: any[]) => {
      this.bpAssetAllocation = res;
      console.log(res);
      this.assetAllocationData = [{
        data:  [this.bpAssetAllocation[2].value,
                this.bpAssetAllocation[4].value,
                this.bpAssetAllocation[3].value,
                this.bpAssetAllocation[1].value
               ]
      }];
    });



  }

}
