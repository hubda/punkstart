import {Pack} from '../types';

export const PACKS: Pack[] = [
  {
    id: 1,
    name: 'Dabbing',
    url: 'google.com',
    colors: ['R'],
    submitterName: 'Dan Huber',
    price: 5.43,
    cards: [
      {
        name: 'test 1',
        colors: ['R']
      },
      {
        name: 'test 2',
        colors: ['R']
      }
    ]
  },
  {
    id: 2,
    name: 'Just the Two of Us',
    url: 'google.com',
    colors: ['W', 'U', 'B'],
    submitterName: 'Andy',
    price: 100,
    cards: [
      {
        name: 'test 3',
        colors: ['R']
      },
      {
        name: 'test 4',
        colors: ['R']
      }
    ]
  }
];
