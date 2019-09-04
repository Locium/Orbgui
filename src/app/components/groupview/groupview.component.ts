import { Component, OnInit } from '@angular/core';
import {BP} from '../../models/BP';
import {BPdetailsService} from '../../services/bpdetails.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-groupview',
  templateUrl: './groupview.component.html',
  styleUrls: ['./groupview.component.css']
})
export class GroupviewComponent implements OnInit {

  bpList: BP[];

  constructor(private bpdetailsService: BPdetailsService) {
  }

  ngOnInit() {
    this.bpList = this.bpdetailsService.getBPs();
  }

  public executeSelectedChange = (event) => {
    console.log(event);
  }
}
