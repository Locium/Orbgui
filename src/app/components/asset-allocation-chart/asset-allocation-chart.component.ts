import {Component, Injectable, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DataService} from "../../data.service";
import {ClientviewComponent} from "../clientview/clientview.component";
import { ChartDataSets } from "chart.js";

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
  public assetAllocationLabels = [];
  public assetAllocationType = 'doughnut';
  public assetAllocationLegend = true;
  public assetAllocationDataReader = [];
  public assetAllocationData: ChartDataSets[] ;

  constructor(private dataService: DataService, private router: ActivatedRoute, private clientView: ClientviewComponent) {
  }

  ngOnInit() {

    for (var _i = 0; _i < this.clientView.bpAssetAllocation.length; _i++) {
      this.assetAllocationLabels[_i] = this.clientView.bpAssetAllocation[_i].pfm_type;
      this.assetAllocationDataReader[_i] = this.clientView.bpAssetAllocation[_i].value;
    }

    this.assetAllocationData = [{data: this.assetAllocationDataReader}];
  }
}
