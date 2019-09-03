import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-clientview',
  templateUrl: './clientview.component.html',
  styleUrls: ['./clientview.component.css']
})

export class ClientviewComponent implements OnInit {
  public bp  = [];
  public bpId;

  // private productsObservable : Observable<any[]> ;

  constructor(private dataService: DataService, private router: ActivatedRoute) {
    // this.productsObservable = this.dataService.get_products();


  }
  ngOnInit() {
  // tslint:disable-next-line:radix
  const id = parseInt(this.router.snapshot.paramMap.get('id'));
  this.bpId = id;
  this.dataService.get_lum(this.bpId).subscribe((res: any[]) => {

      this.bp = res;
      console.log(res);
    });
}

  public executeSelectedChange = (event) => {
    console.log(event);
  }

}
