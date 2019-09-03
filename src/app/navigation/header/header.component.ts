import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {BP} from '../../models/BP';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  bps: BP[];

  @Output() public sidenavToggle = new EventEmitter();

  constructor(private router: Router) { }

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

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

  onSelect(bp) {
    this.router.navigate(['/clientview', bp.id]);
  }

}
