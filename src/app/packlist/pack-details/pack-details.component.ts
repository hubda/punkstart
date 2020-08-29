import {Component, Input, OnInit} from '@angular/core';
import {Card, Pack} from '../../types';

@Component({
  selector: 'app-pack-details',
  templateUrl: './pack-details.component.html',
  styleUrls: ['./pack-details.component.css']
})
export class PackDetailsComponent implements OnInit {

  @Input() cards: Card[];
  totalPrice: string;

  constructor() { }

  ngOnInit(): void {
    this.totalPrice = '1.23';
  }

  selectCard(card: Card): void {
    console.log('selected card: ' + card.name);
  }
}
