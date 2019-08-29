import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-groupview',
  templateUrl: './groupview.component.html',
  styleUrls: ['./groupview.component.css']
})
export class GroupviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public executeSelectedChange = (event) => {
    console.log(event);
  }
}
