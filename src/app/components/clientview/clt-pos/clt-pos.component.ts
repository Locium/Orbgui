import { Component, OnInit } from '@angular/core';
import {Pos} from '../../../models/Pos';
import {PosListService} from '../../../services/pos-list.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-clt-pos',
  templateUrl: './clt-pos.component.html',
  styleUrls: ['./clt-pos.component.css']
})
export class CltPosComponent implements OnInit {

  posList: Pos[];
  posListtest: Array<any> = [];
  bpId: number;

  constructor(private posListService: PosListService,  private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      let id = this.router.parent.snapshot.params.id;
      this.bpId = id;
      console.log(id);
    });

    this.posListService.getPos(this.bpId).subscribe(positionList => {
      this.posList = positionList;
      this.posList.forEach((pos) => {
          console.log(pos.pos_id);
        });
      // console.log(pos);
      // this.posListtest = this.posListService.getPossim();
    });

    /*this.posList = this.posListService.getPos(this.bp_id);
    this.posList.forEach((pos) => {
      console.log(pos.pos_id);
    });*/
  }

}
