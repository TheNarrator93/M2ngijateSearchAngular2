import {Injectable} from 'angular2/core';
import {Http, URLSearchParams, Headers} from 'angular2/http';

@Injectable()
export class MangijaService  {

  get() {
    return this.mangijad;
  }

  add(mangija) {
    this.mangijad.push(mangija);
  }

  delete(mangija) {
    var index = this.mangijad.indexOf(mangija);
    if(index >= 0) {
      this.mangijad.splice(index, 1);
    }
  }
  mangijad = [
      {
          id: 1,
          nimi: "Mesut Ozil",
          klubi: "Arsenal",
          positsioon: "Keskväli",
          synniaasta: 1920,
          kollanekaart: 1,
          isFavorite: true
      },
      {
          id: 2,
          nimi: "Wayne Rooney",
          klubi: "Manu",
          positsioon: "Ründaja",
          synniaasta: 1982,
          kollanekaart: null,
          isFavorite: false
      }, {
          id: 3,
          nimi: "Jack Wilshere",
          klubi: "Arsenal",
          positsioon: "Keskväli",
          synniaasta: 1992,
          kollanekaart: null,
          isFavorite: true
      }, {
          id: 4,
          nimi: "Juan Mata",
          klubi: "Manu",
          positsioon: "Kaitse",
          synniaasta: 1987,
          kollanekaart: null,
          isFavorite: false
      }, {
          id: 5,
          nimi: "De Gea",
          klubi: "Manu",
          positsioon: "Väravvaht",
          synniaasta: 1990,
          kollanekaart: 2,
          isFavorite: false
      }
  ];
}
