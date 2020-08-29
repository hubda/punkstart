export interface Pack {
  id: number;
  name: string;
  url: string;
  colors: string;
  submitterName: string;
  price: string;
  cards: Card[];
}

export interface Card {
  name: string;
  colors: string;
  price: string;
}
