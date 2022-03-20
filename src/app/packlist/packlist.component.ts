import {Component, OnInit, ViewChild} from '@angular/core';
import {Card, Pack} from '../types';
import {PACKS} from './packlist';
import {PackSubmitComponent} from './pack-submit/pack-submit.component';
import * as CardList from '../../carddatabase/AtomicCards.json';
// import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from "rxjs/internal/Observable";

@Component({
  selector: 'app-packlist',
  templateUrl: './packlist.component.html',
  styleUrls: ['./packlist.component.css']
})
export class PacklistComponent implements OnInit {

  @ViewChild(PackSubmitComponent) packSubmitComponent: PackSubmitComponent;
  packs: Pack[] = PACKS;
  newPack: Pack;
  selectedPack: Pack;
  submitDeckClicked: boolean = false;
  cardList: Card[];
  // _jsonURL: '../../carddatabase/AtomicCards.json';

  constructor() {
  }

  ngOnInit(): void {
    console.log('cardDatabase');
    console.log(CardList.default.data.length);
    console.log(CardList.default.data);
    this.cardList = CardList.default.data;
  }

  setSubmitDeckClicked(value: boolean): void {
    this.submitDeckClicked = value;
  }

  cancelSubmitDeck(): void {
    this.submitDeckClicked = null;
  }

  selectPack(pack: Pack): void {
    console.log('pack: ' + pack);
    if (this.selectedPack === pack) {
      this.deselectPack();
    } else {
      this.selectedPack = pack;
    }
  }

  deselectPack(): void {
    console.log('deselecting pack');
    this.selectedPack = null;
  }

  submitPack(): void {
    this.newPack = this.packSubmitComponent.submitPack();
    this.newPack.id = this.packs.length + 1;
    console.log('newPack: ' + this.newPack);
    this.packs.push(this.newPack);
  }

  // public getJSON(): Observable<any> {
  //   return this.http.get(this._jsonURL)
  //     .map((response:any) => response.json())
  //     .catch((error:any) => console.log(error));
  //
  // }
}
