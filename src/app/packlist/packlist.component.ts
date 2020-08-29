import { Component, OnInit } from '@angular/core';
import {Pack} from '../types';

@Component({
  selector: 'app-packlist',
  templateUrl: './packlist.component.html',
  styleUrls: ['./packlist.component.css']
})
export class PacklistComponent implements OnInit {

  packs: Pack[] = [
    {
      id: 1,
      name: 'Dabbing',
      url: 'google.com',
      colors: 'R',
      submitterName: 'Dan Huber',
      price: '5.43',
      cards: [
        {
          name: 'test 1',
          colors: 'R',
          price: '1'
        },
        {
          name: 'test 2',
          colors: 'R',
          price: '1'
        }
      ]
    },
    {
      id: 2,
      name: 'Just the Two of Us',
      url: 'google.com',
      colors: 'WUBRG',
      submitterName: 'Andy',
      price: '100',
      cards: [
        {
          name: 'test 3',
          colors: 'R',
          price: '1'
        },
        {
          name: 'test 4',
          colors: 'R',
          price: '1'
        }
      ]
    }
  ];

  selectedPack: Pack;
  submitDeckClicked: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  setSubmitDeckClicked(value: boolean): void {
    this.submitDeckClicked = value;
  }

  selectPack(pack: Pack): void {
    console.log('pack: ' + pack);
    this.selectedPack = pack;
  }

  deselectPack(): void {
    console.log('deselecting pack');
    this.selectedPack = null;
  }
}
