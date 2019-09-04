export class Pos {

  amount: number;
  // asset: {name_abbr: "FIE", name: "FIELMANN AG (280923)", asset_type: "Equities (03)", id: 413346,…}
  // tslint:disable-next-line:variable-name
  bp_id: number;
  cont_id: number;
  // curry: {name_abbr: "CHF", name: "Swiss Franc", id: 2549, dflt_trade_curry_id: 3942, curry_nom_id: 3942}
  // is_macc: false;
  pfm_type: string;
  pos_id: number;
  price: number;
  // ref_curry: {name_abbr: "CHF", name: "Swiss Franc", id: 3942, dflt_trade_curry_id: 3942, curry_nom_id: 3942}
  sgn: number;
  val_asset: number;
  val_asset_cur: number;
  val_bal: number;

}
