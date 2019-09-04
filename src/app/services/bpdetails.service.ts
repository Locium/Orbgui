import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { BPdetails } from '../models/BPdetails';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }

  )
};
@Injectable({
  providedIn: 'root'
})
export class BPdetailsService {
  bpdetailsendp = 'http://localhost:8080/com.orbium/waw115/bp/id?obj_id=';
  // http://localhost:8080/com.orbium/waw115/bp/id?obj_id=455677

  constructor(private http: HttpClient) { }

  getBpDetails(id: number): Observable<BPdetails> {
    return this.http.get<BPdetails>(`${this.bpdetailsendp}${id}`);
  }

  getBPDetailssim(id: number) {
    return [
      {
        birthdate: '1980-08-20 00:00:00.0',
        nati_country: {name: 'Switzerland', id: 2089},
        domi_country: {name: 'Switzerland', id: 2089},
        name_long: 'Mirjam Lutz',
        name_abbr: 'LUM',
        name: 'Lutz Mirjam',
        language: 'English',
        id: 455677,
        tax_country: {name: 'Switzerland', id: 2089},
        start_date: '2003-01-01 00:00:00.0'
      }
    ];
  }
}
