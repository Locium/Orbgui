import { Component, OnInit } from '@angular/core';
import {DataService} from "../../data.service";

@Component({
  selector: 'app-clientview',
  templateUrl: './clientview.component.html',
  styleUrls: ['./clientview.component.css']
})
export class ClientviewComponent {
  public bp  = [];


  // private productsObservable : Observable<any[]> ;

  constructor(private dataService: DataService){

    // this.productsObservable = this.dataService.get_products();

    this.dataService.get_lum().subscribe((res : any[])=>{

      this.bp = res;
      console.log(res);
    });
  }

  public executeSelectedChange = (event) => {
    console.log(event);
  }

}
