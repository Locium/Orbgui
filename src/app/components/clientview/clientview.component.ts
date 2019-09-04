import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';
import {ActivatedRoute} from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientview',
  templateUrl: './clientview.component.html',
  styleUrls: ['./clientview.component.css']
})

export class ClientviewComponent implements OnInit {
  public bpId: number;
  public bp  = [];
  public bpAssets = [];

  navLinks: any[];
  activeLinkIndex = -1;
  constructor(private navrouter: Router, private dataService: DataService, private router: ActivatedRoute) {
    this.navLinks = [
      {
        label: 'Client Overview',
        link: './cltoverview',
        index: 0
      }, {
        label: 'Asset Allocation',
        link: './cltaa',
        index: 1
      }, {
        label: 'Client Positions',
        link: './cltpos',
        index: 2
      },
    ];
  }

  ngOnInit(): void {
    // tslint:disable-next-line:radix
    this.activeLinkIndex = parseInt(this.router.snapshot.paramMap.get('viewId'));
    this.navrouter.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.navrouter.url));
    });

    // tslint:disable-next-line:radix
    const id = parseInt(this.router.snapshot.paramMap.get('id'));
    this.bpId = id;
    this.dataService.get_bp_info(this.bpId).subscribe((res: any[]) => {
      this.bp = res;
      console.log(res);
    });

    this.dataService.get_bp_assets(this.bpId).subscribe((res: any[]) => {
      this.bpAssets = res;
      console.log(res);
    });
  }

  public executeSelectedChange = (event) => {
    console.log(event);
  }

}
