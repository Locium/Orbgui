import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl = 'http://localhost:8080/com.orbium/waw115';

  constructor(private httpClient: HttpClient) {}

  get_bp_info(bpId: number) {
    return this.httpClient.get(this.baseUrl + '/bp/id?obj_id=' + bpId);
  }

  get_bp_assets(bpId: number){
    return this.httpClient.get(this.baseUrl + '/cont/pos/list?bp_id=' + bpId);
}

  get_bp_asset_allocation(bpId: number){
    return this.httpClient.get(this.baseUrl + '/bp/allocation?bp_id=' + bpId);
  }

}
