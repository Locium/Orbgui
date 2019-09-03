import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {BP} from '../../models/BP';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();
  bps: BP[];
  constructor() { }

  ngOnInit() {
    this.bps = [
      {
        id: 1,
        name: 'Hans Fridolin',
        balance: 100000
      },
      {
        id: 2,
        name: 'Franz Josef',
        balance: 200000
      },
      {
        id: 3,
        name: 'Natalia Ndau',
        balance: 300000
      }
    ];
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

}
