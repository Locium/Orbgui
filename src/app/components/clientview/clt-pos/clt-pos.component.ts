import { Component, OnInit } from '@angular/core';
import {Pos} from '../../../models/Pos';
import {PosListService} from '../../../services/pos-list.service';

@Component({
  selector: 'app-clt-pos',
  templateUrl: './clt-pos.component.html',
  styleUrls: ['./clt-pos.component.css']
})
export class CltPosComponent implements OnInit {

  posList: Array<Pos> = [];
  bp_id = 455674;

  constructor(private posListService: PosListService) { }

  ngOnInit() {
    this.posListService.getPos(this.bp_id).subscribe(pos => {
      this.posList.push(pos);
      console.log(pos.pfm_type);
    });
  }

}
