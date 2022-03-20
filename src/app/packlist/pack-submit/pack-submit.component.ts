import { Component, OnInit } from '@angular/core';
import {Card, Pack} from '../../types';

@Component({
  selector: 'app-pack-submit',
  templateUrl: './pack-submit.component.html',
  styleUrls: ['./pack-submit.component.css']
})
export class PackSubmitComponent implements OnInit {

  selectedCard1: Card;
  selectedCard2: Card;
  selectedCard3: Card;
  selectedCard4: Card;
  selectedCard5: Card;
  selectedCard6: Card;
  selectedCard7: Card;
  selectedCard8: Card;
  selectedCard9: Card;
  selectedCard10: Card;
  selectedCard11: Card;
  selectedCard12: Card;
  selectedCard13: Card;
  selectedCard14: Card;
  selectedCard15: Card;
  selectedCard16: Card;
  selectedCard17: Card;
  selectedCard18: Card;
  selectedCard19: Card;
  selectedCard20: Card;

  constructor() { }

  ngOnInit(): void {
  }

  submitPack(): Pack {
    const cards: Card[] = [];
    const packNameField = document.getElementById('packNameField')['value'];
    const submitterNameField = document.getElementById('submitterNameField')['value'];

    cards.push(this.makeCard(document.getElementById('cardField1')['value'], ['W'], 1));
    cards.push(this.makeCard(document.getElementById('cardField2')['value'], ['W'], 1));
    cards.push(this.makeCard(document.getElementById('cardField3')['value'], ['W'], 1));
    cards.push(this.makeCard(document.getElementById('cardField4')['value'], ['W'], 1));
    cards.push(this.makeCard(document.getElementById('cardField5')['value'], ['W'], 1));
    cards.push(this.makeCard(document.getElementById('cardField6')['value'], ['W'], 1));
    cards.push(this.makeCard(document.getElementById('cardField7')['value'], ['W'], 1));
    cards.push(this.makeCard(document.getElementById('cardField8')['value'], ['W'], 1));
    cards.push(this.makeCard(document.getElementById('cardField9')['value'], ['W'], 1));
    cards.push(this.makeCard(document.getElementById('cardField10')['value'], ['U'], 1));
    cards.push(this.makeCard(document.getElementById('cardField11')['value'], ['U'], 1));
    cards.push(this.makeCard(document.getElementById('cardField12')['value'], ['U'], 1));
    cards.push(this.makeCard(document.getElementById('cardField13')['value'], ['U'], 1));
    cards.push(this.makeCard(document.getElementById('cardField14')['value'], ['U'], 1));
    cards.push(this.makeCard(document.getElementById('cardField15')['value'], ['U'], 1));
    cards.push(this.makeCard(document.getElementById('cardField16')['value'], ['U'], 1));
    cards.push(this.makeCard(document.getElementById('cardField17')['value'], ['U'], 1));
    cards.push(this.makeCard(document.getElementById('cardField18')['value'], ['U'], 1));
    cards.push(this.makeCard(document.getElementById('cardField19')['value'], ['RB'], 1));
    cards.push(this.makeCard(document.getElementById('cardField20')['value'], ['RB'], 1));

    console.log('cards: ' + cards);

    const pack: Pack = {
      id: 0,
      name: packNameField,
      url: '',
      colors: this.getColors(cards),
      submitterName: submitterNameField,
      price: 1,
      cards: cards
    };

    return pack;
  }

  getColors(cards: Card[]): string[] {
    let colors: string[] = [];
    for (const card of cards) {
      for (const color of card.colors) {
        if (colors.indexOf(color) < 0) {
          colors.push(color);
        }
      }
    }

    return this.orderColors(colors);
  }

  orderColors(colors: string[]): string[] {
    const orderedColors: string[] = ['C', 'W', 'U', 'B', 'R', 'G'];
    const populatedOrderedColors: string[] = ['', '', '', '', '', ''];

    for (const color of colors) {
      for (const orderedColor of orderedColors) {
        if (color === orderedColor) {
          const idx = orderedColors.indexOf(color);
          populatedOrderedColors[idx] = color;
        }
      }
    }

    if (populatedOrderedColors.length === 0) {
      return ['C'];
    }

    return populatedOrderedColors;
  }

  makeCard(name: string, colors: string[], price: number): Card {
    const card: Card = {
      name: name,
      colors: colors
    };

    return card;
  }
}
