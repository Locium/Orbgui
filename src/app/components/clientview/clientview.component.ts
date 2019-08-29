import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientview',
  templateUrl: './clientview.component.html',
  styleUrls: ['./clientview.component.css']
})
export class ClientviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public executeSelectedChange = (event) => {
    console.log(event);
  }

}
