import { Component, OnInit } from '@angular/core';
import {BP} from '../../models/BP';

@Component({
  selector: 'app-groupview',
  templateUrl: './groupview.component.html',
  styleUrls: ['./groupview.component.css']
})
export class GroupviewComponent implements OnInit {

  bpList: BP[];

  constructor() { }

  ngOnInit() {
    this.bpList = [
      {
        id: 1,
        name: 'Mike',
        balance: 100
      },
      {
        id: 2,
        name: 'Sarah',
        balance: 200
      },
      {
        id: 3,
        name: 'Riley',
        balance: 300
      }
    ];
  }

  public executeSelectedChange = (event) => {
    console.log(event);
  }
}
