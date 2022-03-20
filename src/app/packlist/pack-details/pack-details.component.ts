import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Card, Pack} from '../../types';

@Component({
  selector: 'app-pack-details',
  templateUrl: './pack-details.component.html',
  styleUrls: ['./pack-details.component.css']
})
export class PackDetailsComponent implements OnInit, OnChanges {

  @Input() cards: Card[];
  totalPrice: number = 0;

  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(): void {
    console.log('changed');
    this.totalPrice = 0;
    for (const card of this.cards) {
      this.totalPrice += 1;
    }
  }

  selectCard(card: Card): void {
    console.log('selected card: ' + card.name);
  }
}
