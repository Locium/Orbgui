import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl = 'http://localhost:8080/com.orbium/waw115/bp';

  constructor(private httpClient: HttpClient) {}

  get_lum(bpId: number) {
    return this.httpClient.get(this.baseUrl + '/id?obj_id=' + bpId);
  }

}
