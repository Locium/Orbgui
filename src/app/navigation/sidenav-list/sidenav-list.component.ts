import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {BP} from '../../models/BP';
import {Router} from '@angular/router';

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
        id: 455674,
        name: 'Frascati Joela',
        balance: 200000
      },
      {
        id: 455680,
        name: 'Lutz Maja',
        balance: 300000
      },
      {
        id: 455677,
        name: 'Lutz Miriam',
        balance: 100000
      },
      {
        id: 455666,
        name: 'Mueller Deborah',
        balance: 200000
      },
      {
        id: 455676,
        name: 'Strässler Roland',
        balance: 200000
      }
    ];
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }
}
