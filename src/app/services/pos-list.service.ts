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

  getPos(bpId: number): Observable<any[]> {
    return this.http.get<any>(`${this.posEndpoint}${bpId}`);
  }

  getPossim() {
    return [
      {
        accr_cred: 0,
        amount: -250,
        val_asset_cur: -20382.5,
        ref_curry: {
          name_abbr: 'CHF',
          name: 'Swiss Franc',
          id: 3942,
          dflt_trade_curry_id: 3942,
          curry_nom_id: 3942
        },
        val_bal: -13433.48,
        curry: {
          name_abbr: 'CHF',
          name: 'Swiss Franc',
          id: 2549,
          dflt_trade_curry_id: 3942,
          curry_nom_id: 3942
        },
        accr_deb: 0,
        is_macc: false,
        accr_cred_asset: 0,
        pfm_type: 'Equities (03)',
        serpil_id: 168424,
        bp_id: 455674,
        price_curry: {
          name_abbr: 'EUR',
          name: 'Euro',
          id: 2549,
          dflt_trade_curry_id: 2549,
          curry_nom_id: 2549
        },
        val_asset: -8775.64,
        price: 81.53,
        pos_id: 2000744,
        accr_deb_bank: 0,
        allocation_perc: 0,
        accr_deb_asset: 0,
        sgn: -1,
        val_bank_cur: -22304.12,
        asset: {
          name_abbr: 'BMW',
          name: 'Bayerische Motorenwerke AG BMW (324410)',
          asset_type: 'Equities (03)',
          id: 415474,
          dflt_trade_curry_id: 2549,
          curry_nom_id: 2549
        },
        cont_id: 456051,
        accr_cred_bank: 0
      },
      {
        accr_cred: 0,
        amount: -1600,
        val_asset_cur: -32280,
        ref_curry: {
          name_abbr: 'CHF',
          name: 'Swiss Franc',
          id: 3942,
          dflt_trade_curry_id: 3942,
          curry_nom_id: 3942
        },
        val_bal: -31411.19,
        curry: {
          name_abbr: 'CHF',
          name: 'Swiss Franc',
          id: 2549,
          dflt_trade_curry_id: 3942,
          curry_nom_id: 3942
        },
        accr_deb: 0,
        is_macc: false,
        accr_cred_asset: 0,
        pfm_type: 'Equities (03)',
        serpil_id: 168424,
        bp_id: 455674,
        price_curry: {
          name_abbr: 'EUR',
          name: 'Euro',
          id: 2549,
          dflt_trade_curry_id: 2549,
          curry_nom_id: 2549
        },
        val_asset: -20084.14,
        price: 20.175,
        pos_id: 20053858,
        accr_deb_bank: 0,
        allocation_perc: 0,
        accr_deb_asset: 0,
        sgn: -1,
        val_bank_cur: -35323.29,
        asset: {
          name_abbr: 'LHA',
          name: 'DEUTSCHE LUFTHANSA AG NAMEN/VINK. (667979)',
          asset_type: 'Equities (03)',
          id: 416052,
          dflt_trade_curry_id: 2549,
          curry_nom_id: 2549
        },
        cont_id: 456051,
        accr_cred_bank: 0
      },
      {
        accr_cred: 0,
        amount: 0,
        val_asset_cur: 0,
        ref_curry: {
          name_abbr: 'CHF',
          name: 'Swiss Franc',
          id: 3942,
          dflt_trade_curry_id: 3942,
          curry_nom_id: 3942
        },
        val_bal: 219173.33,
        curry: {
          name_abbr: 'CHF',
          name: 'Swiss Franc',
          id: 3942,
          dflt_trade_curry_id: 3942,
          curry_nom_id: 3942
        },
        accr_deb: 0,
        is_macc: false,
        accr_cred_asset: 0,
        pfm_type: 'Equities (03)',
        serpil_id: 168424,
        bp_id: 455674,
        price_curry: {
          name_abbr: 'CHF',
          name: 'Swiss Franc',
          id: 3942,
          dflt_trade_curry_id: 3942,
          curry_nom_id: 3942
        },
        val_asset: 219173.33,
        price: 5220,
        pos_id: 20014119,
        accr_deb_bank: 0,
        allocation_perc: 0,
        accr_deb_asset: 0,
        sgn: -1,
        val_bank_cur: 0,
        asset: {
          name_abbr: 'HIZN',
          name: 'SOURCES MINERALES HENNIEZ NAMEN (234525)',
          asset_type: 'Equities (03)',
          id: 412843,
          dflt_trade_curry_id: 3942,
          curry_nom_id: 3942
        },
        cont_id: 456051,
        accr_cred_bank: 0
      },
      {
        accr_cred: 0,
        amount: -100,
        val_asset_cur: -25500,
        ref_curry: {
          name_abbr: 'CHF',
          name: 'Swiss Franc',
          id: 3942,
          dflt_trade_curry_id: 3942,
          curry_nom_id: 3942
        },
        val_bal: -26308.4,
        curry: {
          name_abbr: 'CHF',
          name: 'Swiss Franc',
          id: 3942,
          dflt_trade_curry_id: 3942,
          curry_nom_id: 3942
        },
        accr_deb: 0,
        is_macc: false,
        accr_cred_asset: 0,
        pfm_type: 'Equities (03)',
        serpil_id: 168424,
        bp_id: 455674,
        price_curry: {
          name_abbr: 'CHF',
          name: 'Swiss Franc',
          id: 3942,
          dflt_trade_curry_id: 3942,
          curry_nom_id: 3942
        },
        val_asset: -26308.4,
        price: 255,
        pos_id: 20014506,
        accr_deb_bank: 0,
        allocation_perc: 0,
        accr_deb_asset: 0,
        sgn: -1,
        val_bank_cur: -25500,
        asset: {
          name_abbr: 'VIJN',
          name: 'GRAND-HOTEL VICTORIA-JUNGFRAU NAM (111107)',
          asset_type: 'Equities (03)',
          id: 412735,
          dflt_trade_curry_id: 3942,
          curry_nom_id: 3942
        },
        cont_id: 456051,
        accr_cred_bank: 0
      },
      {
        accr_cred: 0,
        amount: 0,
        val_asset_cur: 0,
        ref_curry: {
          name_abbr: 'CHF',
          name: 'Swiss Franc',
          id: 3942,
          dflt_trade_curry_id: 3942,
          curry_nom_id: 3942
        },
        val_bal: 0,
        curry: {
          name_abbr: 'CHF',
          name: 'Swiss Franc',
          id: 3942,
          dflt_trade_curry_id: 3942,
          curry_nom_id: 3942
        },
        accr_deb: 0,
        is_macc: false,
        accr_cred_asset: 0,
        pfm_type: 'Cash (01)',
        serpil_id: 168424,
        bp_id: 455674,
        price_curry: {
          id: 0,
          dflt_trade_curry_id: 0,
          curry_nom_id: 0
        },
        val_asset: 0,
        price: 0,
        pos_id: 1101999,
        accr_deb_bank: 0,
        allocation_perc: 0,
        accr_deb_asset: 0,
        sgn: -1,
        val_bank_cur: 0,
        asset: {
          name_abbr: '7.75',
          name: 'Investment account CHF',
          asset_type: 'Cash (01)',
          id: 433615,
          dflt_trade_curry_id: 3942,
          curry_nom_id: 3942
        },
        cont_id: 456051,
        accr_cred_bank: 0
      },
      {
        accr_cred: 0,
        amount: 0,
        val_asset_cur: 0,
        ref_curry: {
          name_abbr: 'CHF',
          name: 'Swiss Franc',
          id: 3942,
          dflt_trade_curry_id: 3942,
          curry_nom_id: 3942
        },
        val_bal: 0,
        curry: {
          name_abbr: 'CHF',
          name: 'Swiss Franc',
          id: 3942,
          dflt_trade_curry_id: 3942,
          curry_nom_id: 3942
        },
        accr_deb: 0,
        is_macc: false,
        accr_cred_asset: 0,
        pfm_type: 'Cash (01)',
        serpil_id: 168424,
        bp_id: 455674,
        price_curry: {
          id: 0,
          dflt_trade_curry_id: 0,
          curry_nom_id: 0
        },
        val_asset: 0,
        price: 0,
        pos_id: 1101999,
        accr_deb_bank: 0,
        allocation_perc: 0,
        accr_deb_asset: 0,
        sgn: -1,
        val_bank_cur: 0,
        asset: {
          name_abbr: '7.75',
          name: 'Investment account CHF',
          asset_type: 'Cash (01)',
          id: 433615,
          dflt_trade_curry_id: 3942,
          curry_nom_id: 3942
        },
        cont_id: 456051,
        accr_cred_bank: 0
      },
      {
        accr_cred: -31785.13,
        amount: -1102905.8,
        val_asset_cur: -1102905.8,
        ref_curry: {
          name_abbr: 'CHF',
          name: 'Swiss Franc',
          id: 3942,
          dflt_trade_curry_id: 3942,
          curry_nom_id: 3942
        },
        val_bal: -1102905.8,
        curry: {
          name_abbr: 'CHF',
          name: 'Swiss Franc',
          id: 3942,
          dflt_trade_curry_id: 3942,
          curry_nom_id: 3942
        },
        accr_deb: 0,
        is_macc: false,
        accr_cred_asset: -31785.13,
        pfm_type: 'Cash (01)',
        serpil_id: 168424,
        bp_id: 455674,
        price_curry: {
          id: 0,
          dflt_trade_curry_id: 0,
          curry_nom_id: 0
        },
        val_asset: -1102905.8,
        price: 0,
        pos_id: 1101998,
        accr_deb_bank: 0,
        allocation_perc: 0,
        accr_deb_asset: 0,
        sgn: -1,
        val_bank_cur: -1102905.8,
        asset: {
          name_abbr: '.5',
          name: 'Personal account CHF',
          asset_type: 'Cash (01)',
          id: 433613,
          dflt_trade_curry_id: 3942,
          curry_nom_id: 3942
        },
        cont_id: 456051,
        accr_cred_bank: -31785.13
      },
      {
        accr_cred: 0,
        amount: 34042.53,
        val_asset_cur: 34042.53,
        ref_curry: {
          name_abbr: 'CHF',
          name: 'Swiss Franc',
          id: 3942,
          dflt_trade_curry_id: 3942,
          curry_nom_id: 3942
        },
        val_bal: 52387.91,
        curry: {
          name_abbr: 'CHF',
          name: 'Swiss Franc',
          id: 2549,
          dflt_trade_curry_id: 3942,
          curry_nom_id: 3942
        },
        accr_deb: 10346.49,
        is_macc: false,
        accr_cred_asset: 0,
        pfm_type: 'Cash (01)',
        serpil_id: 168424,
        bp_id: 455674,
        price_curry: {
          id: 0,
          dflt_trade_curry_id: 0,
          curry_nom_id: 0
        },
        val_asset: 34042.53,
        price: 0,
        pos_id: 1102000,
        accr_deb_bank: 10346.49,
        allocation_perc: 0,
        accr_deb_asset: 9455.08,
        sgn: -1,
        val_bank_cur: 37251.99,
        asset: {
          name_abbr: '4.75',
          name: 'Current account EUR',
          asset_type: 'Cash (01)',
          id: 433154,
          dflt_trade_curry_id: 2549,
          curry_nom_id: 2549
        },
        cont_id: 456051,
        accr_cred_bank: 0
      },
      {
        accr_cred: 0,
        amount: 0,
        val_asset_cur: 0,
        ref_curry: {
          name_abbr: 'CHF',
          name: 'Swiss Franc',
          id: 3942,
          dflt_trade_curry_id: 3942,
          curry_nom_id: 3942
        },
        val_bal: 0,
        curry: {
          name_abbr: 'CHF',
          name: 'Swiss Franc',
          id: 2549,
          dflt_trade_curry_id: 3942,
          curry_nom_id: 3942
        },
        accr_deb: 0,
        is_macc: false,
        accr_cred_asset: 0,
        pfm_type: 'Cash (01)',
        serpil_id: 168424,
        bp_id: 455674,
        price_curry: {
          id: 0,
          dflt_trade_curry_id: 0,
          curry_nom_id: 0
        },
        val_asset: 0,
        price: 0,
        pos_id: 1102000,
        accr_deb_bank: 0,
        allocation_perc: 0,
        accr_deb_asset: 0,
        sgn: -1,
        val_bank_cur: 0,
        asset: {
          name_abbr: '4.75',
          name: 'Current account EUR',
          asset_type: 'Cash (01)',
          id: 433154,
          dflt_trade_curry_id: 2549,
          curry_nom_id: 2549
        },
        cont_id: 456051,
        accr_cred_bank: 0
      },
      {
        accr_cred: 0,
        amount: 250,
        val_asset_cur: -22304.12,
        ref_curry: {
          name_abbr: 'CHF',
          name: 'Swiss Franc',
          asset_type: null,
          id: 3942,
          dflt_trade_curry_id: 3942,
          curry_nom_id: 3942
        },
        val_bal: -13434.48,
        curry: {
          name_abbr: 'CHF',
          name: 'Swiss Franc',
          asset_type: null,
          id: 2549,
          dflt_trade_curry_id: 3942,
          curry_nom_id: 3942
        },
        accr_deb: 0,
        is_macc: false,
        accr_cred_asset: 0,
        pfm_type: 'Equities (03)',
        serpil_id: 168424,
        bp_id: 455674,
        val_asset: 8775.64,
        price_curry: {
          name_abbr: 'EUR',
          name: 'Euro',
          asset_type: null,
          id: 2549,
          dflt_trade_curry_id: 2549,
          curry_nom_id: 2549
        },
        pos_id: 2000744,
        price: 81.53,
        accr_deb_bank: 0,
        allocation_perc: 1.9415466,
        accr_deb_asset: 0,
        sgn: -1,
        val_bank_cur: 22304.12,
        asset: {
          name_abbr: 'BMW',
          name: 'Bayerische Motorenwerke AG BMW (324410)',
          asset_type: 'Equities (03)',
          id: 415474,
          dflt_trade_curry_id: 2549,
          curry_nom_id: 2549
        },
        cont_id: 456051,
        accr_cred_bank: 0
      },
      {
        accr_cred: 0,
        amount: 1600,
        val_asset_cur: -35323.29,
        ref_curry: {
          name_abbr: 'CHF',
          name: 'Swiss Franc',
          asset_type: null,
          id: 3942,
          dflt_trade_curry_id: 3942,
          curry_nom_id: 3942
        },
        val_bal: -31412.19,
        curry: {
          name_abbr: 'CHF',
          name: 'Swiss Franc',
          asset_type: null,
          id: 2549,
          dflt_trade_curry_id: 3942,
          curry_nom_id: 3942
        },
        accr_deb: 0,
        is_macc: false,
        accr_cred_asset: 0,
        pfm_type: 'Equities (03)',
        serpil_id: 168424,
        bp_id: 455674,
        val_asset: 20084.14,
        price_curry: {
          name_abbr: 'EUR',
          name: 'Euro',
          asset_type: null,
          id: 2549,
          dflt_trade_curry_id: 2549,
          curry_nom_id: 2549
        },
        pos_id: 20053858,
        price: 20.175,
        accr_deb_bank: 0,
        allocation_perc: 3.0748498,
        accr_deb_asset: 0,
        sgn: -1,
        val_bank_cur: 35323.29,
        asset: {
          name_abbr: 'LHA',
          name: 'DEUTSCHE LUFTHANSA AG NAMEN/VINK. (667979)',
          asset_type: 'Equities (03)',
          id: 416052,
          dflt_trade_curry_id: 2549,
          curry_nom_id: 2549
        },
        cont_id: 456051,
        accr_cred_bank: 0
      }
    ];
  }

}
