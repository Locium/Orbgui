import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BPdetailsService {

  constructor() { }
  getBPs() {
    return [
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
}
