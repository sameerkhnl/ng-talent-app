export class CustomerModel {
  constructor(id: Number, name: string, contactEmail: string, shortCode: string, type: Type, country: Country, timeZone: number, logoUrl: string, privacyPolicyUrl: string, active: boolean, createdOn: Date, updatedOn: Date) {

  }
}

enum Type {
  PRODUCTION,
  SANDBOX
}

enum Country {
  AC, AD, AE, AF, AG, AI, AL, AM, AN, AO, AQ, AR, AS, AT, AU, AW, AX, AZ, BA, BB, BD, BE,
  BF, BG, BH, BI, BJ, BM, BN, BO, BR, BS, BT, BV, BW, BY, BZ, CA, CC, CD, CF, CG, CH,
  CI, CK, CL, CM, CN, CO, CR, CU, CV, CX, CY, CZ, DE, DJ, DK, DM, DO, DZ, EC, EE, EG,
  ER, ES, ET, FI, FJ, FK, FM, FO, FR, GA, GB, GD, GE, GF, GG, GH, GI, GL, GM, GN, GP,
  GQ, GR, GS, GT, GU, GW, GY, HK, HM, HN, HR, HT, HU, ID, IE, IL, IM, IN, IO, IQ, IR,
  IS, IT, JE, JM, JO, JP, KE, KG, KH, KI, KM, KN, KP, KR, KW, KY, KZ, LA, LB, LC, LI,
  LK, LR, LS, LT, LU, LV, LY, MA, MC, MD, ME, MG, MH, MK, ML, MM, MN, MO, MP, MQ, MR,
  MS, MT, MU, MV, MW, MX, MY, MZ, NA, NC, NE, NF, NG, NI, NL, NO, NP, NR, NU, NZ, OM,
  PA, PE, PF, PG, PH, PK, PL, PM, PN, PR, PT, PW, PY, QA, RE, RO, RS, RU, RW, SA, SB,
  SC, SD, SE, SG, SH, SI, SJ, SK, SL, SM, SN, SO, SR, ST, SV, SY, SZ, TA, TC, TD, TF,
  TG, TH, TJ, TK, TL, TM, TN, TO, TR, TT, TV, TW, TZ, UA, UG, UM, US, UY, UZ, VA, VC,
  VE, VG, VI, VN, VU, WF, WS, YE, YT, ZA, ZM, ZW
}
