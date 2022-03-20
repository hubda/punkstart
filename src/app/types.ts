import {ɵangular_material_src_material_core_core_a} from "@angular/material/core";

export interface Pack {
  id: number;
  name: string;
  url: string;
  colors: string[];
  submitterName: string;
  price: number;
  cards: Card[];
}

export interface ForeignLanguageData {
  language: string;
  name: string;
  text: string;
  type: string;
}

export interface Identifier {
  scryfallOracleId?: string;
}

export interface Leadership {
  brawl?: boolean;
  commander?: boolean;
  oathbreaker?: boolean;
}

export interface Legalities {
  brawl?: string;
  commander?: string;
  duel?: string;
  future?: string;
  historic?: string;
  legacy: string;
  modern?: string;
  pauper?: string;
  penny?: string;
  pioneer?: string;
  standard?: string;
  vintage?: string;
}

export interface PurchaseUrls {
  cardKingdom?: string;
  cardKingdomFoil?: string;
  cardmarket?: string;
  tcgplayer?: string;
}

export interface Ruling {
  date?: string;
  text?: string;
}

export interface Card {
  colorIdentity?: string[];
  colors?: string[];
  convertedManaCost?: number;
  edhrecRank?: number;
  foreignData?: ForeignLanguageData[];
  identifiers?: Identifier;
  layout?: string;
  leadershipSkills?: Leadership;
  legalities?: Legalities;
  manaCost?: string;
  name?: string;
  power?: string;
  printings?: string[];
  purchaseUrls?: PurchaseUrls[];
  rulings?: Ruling[];
  subtypes?: string[];
  supertypes?: string[];
  text?: string;
  toughness?: string;
  type?: string;
  types?: string[];
}
