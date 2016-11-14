import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {
  users = [
  {
    "id": 0,
    "name": "Angela",
    "surname": "Williams",
    "dateOb": "06/12/1970",
    "mobile": "7-(991)116-5310",
    "address": "3 Schiller Pass",
    "isChecked": false
  },
  {
    "id": 1,
    "name": "Sarah",
    "surname": "Medina",
    "dateOb": "02/06/1943",
    "mobile": "351-(952)362-2163",
    "address": "74789 Sutteridge Way",
    "isChecked": false
  },
  {
    "id": 2,
    "name": "Johnny",
    "surname": "Cooper",
    "dateOb": "21/08/1961",
    "mobile": "223-(840)663-7687",
    "address": "5757 Eliot Avenue",
    "isChecked": false
  },
  {
    "id": 3,
    "name": "Jose",
    "surname": "Daniels",
    "dateOb": "27/04/1987",
    "mobile": "81-(642)429-8376",
    "address": "1 Manley Crossing",
    "isChecked": false
  }
];
  constructor() { }

}
