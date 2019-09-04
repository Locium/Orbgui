import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BPdetailsService {

  constructor() { }
  getBPs() {
    return [
      {
        id: 1,
        name: 'Mike',
        balance: 100
      },
      {
        id: 2,
        name: 'Sarah',
        balance: 200
      },
      {
        id: 3,
        name: 'Riley',
        balance: 300
      }
    ];
  }
}
