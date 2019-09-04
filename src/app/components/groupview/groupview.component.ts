import { Component, OnInit } from '@angular/core';
import {BP} from '../../models/BP';
import {BPdetails} from '../../models/BPdetails';
import {Router} from '@angular/router';
import {BPlistService} from '../../services/bplist.service';
import {BPdetailsService} from '../../services/bpdetails.service';


@Component({
  selector: 'app-groupview',
  templateUrl: './groupview.component.html',
  styleUrls: ['./groupview.component.css']
})
export class GroupviewComponent implements OnInit {

  bpList: BP[];
  bpDetailsList: BPdetails[];



  constructor(private bpListService: BPlistService, private bpDetailsService: BPdetailsService, private router: Router) {
  }

  ngOnInit() {
    this.bpList = this.bpListService.getBPs();



    this.bpDetailsService.getBpDetails(455677).subscribe(bpDetails => {
      this.bpDetailsList = bpDetails;
    });
  }

  public executeSelectedChange = (event) => {
    console.log(event);
  }
}
