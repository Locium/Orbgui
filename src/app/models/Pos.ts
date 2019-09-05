import {Asset} from './Asset';
// import {Curry} from './Curry';

export class Pos {
  accr_cred: number;
  accr_cred_asset: number;
    accr_cred_bank: number;
  accr_deb: number;
  accr_deb_asset: number;
  accr_deb_bank: number;
  allocation_perc: number;
  amount: number;
  asset: Asset;
  bp_id: number;
  cont_id: number;
  // curry: Curry;
  is_macc: boolean;
  pfm_type: string;
  pos_id: number;
  price: number;
  // price_curry: Curry;
  // ef_curry: Curry;
  // serpil_id: number;
  sgn: number;
  val_asset: number;
  val_asset_cur: number;
  val_bal: number;
  val_bank_cur: number;

}
