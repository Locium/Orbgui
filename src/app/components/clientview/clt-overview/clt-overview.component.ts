import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-clt-overview',
  templateUrl: './clt-overview.component.html',
  styleUrls: ['./clt-overview.component.css']
})
export class CltOverviewComponent implements OnInit {
  navLinks: any[];
  activeLinkIndex = -1;

  constructor(private router: Router) {
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

    ngOnInit() {
      this.router.events.subscribe((res) => {
        this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
      });
    }
  }

