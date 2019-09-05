import { Component, OnInit } from '@angular/core';
import {BP} from '../../models/BP';
import {BPdetails} from '../../models/BPdetails';
import {Router} from '@angular/router';
import {BPlistService} from '../../services/bplist.service';
import {BPdetailsService} from '../../services/bpdetails.service';
import {Observable} from 'rxjs';
import {CltPosComponent} from '../clientview/clt-pos/clt-pos.component';


@Component({
  selector: 'app-groupview',
  templateUrl: './groupview.component.html',
  styleUrls: ['./groupview.component.css']
})
export class GroupviewComponent implements OnInit {

  bpList: BP[];
  bpDetailsList: Array<BPdetails> = [];

 constructor(private bpListService: BPlistService, private bpDetailsService: BPdetailsService, private router: Router) {
  }

  ngOnInit() {
    this.bpList = this.bpListService.getBPs();
    this.bpList.forEach((bp) => {
      this.bpDetailsService.getBpDetails(bp.id).subscribe( bpdetail => {
        this.bpDetailsList.push(bpdetail);
      });
    });

 }

  public executeSelectedChange = (event) => {
    console.log(event);
  }

  showPos(id: number) {
  }
}
