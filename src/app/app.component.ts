import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public bp  = [];


  // private productsObservable : Observable<any[]> ;

  constructor(private dataService: DataService){

    // this.productsObservable = this.dataService.get_products();

    this.dataService.get_lum().subscribe((res : any[])=>{
      this.bp = res;
      console.log(res);
    });

  }
}
