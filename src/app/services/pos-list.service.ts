import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Pos} from '../models/Pos';

@Injectable({
  providedIn: 'root'
})
export class PosListService {
  posEndpoint = 'http://localhost:8080/com.orbium/waw115/cont/pos/list?bp_id=';

  constructor(private http: HttpClient) {}

  getPos(bpId: number): Observable<Pos> {
    return this.http.get<Pos>(`${this.posEndpoint}${bpId}`);
  }
}
