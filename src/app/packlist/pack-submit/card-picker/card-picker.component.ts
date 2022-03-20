import { Component, OnInit } from '@angular/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {Card} from "../../../types";
import * as CardList from '../../../../carddatabase/AtomicCards.json';
// import mtgJson from 'https://cdn.skypack.dev/mtg-json';
declare var System: any;
declare var require: any;

@Component({
  selector: 'app-card-picker',
  templateUrl: './card-picker.component.html',
  styleUrls: ['./card-picker.component.css']
})
export class CardPickerComponent implements OnInit {
  // cards: Card[] = CardList.default.data;
  cards: Card[] = [
    {
      name: 'test'
    }
  ];
  selectedCard: Card = this.cards[0];
  name: string;
  tag: string;

  ngOnInit(): void {
    console.log('card-picker init');
    //Require the module
    const getMtgJson = require('mtg-json');

    //Request AllCards.json and store it in the current directory
    getMtgJson('cards', '../../../../carddatabase')

    //Use the json data
      .then(json => {
        let stormCrow = json['stormCrow'];
        console.log(stormCrow.types) // Logs ['Creature']
      });
    // System.import('../../../../carddatabase/AtomicCards.json').then(file => {
    //   this.cards = file;
    //   this.selectedCard = this.cards[0];
    // });

    // System.import('mtg-json').then(file => {
    //   this.cards = file;
    //   this.selectedCard = this.cards[0];
    // });
  }

  constructor() { }
}
