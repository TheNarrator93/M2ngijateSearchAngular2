import {Component} from 'angular2/core';
import {mangijaComponent} from './mangija.component';
import {PositsiooniListPipe} from './positsiooni.pipe';
import {MangijaService} from './mangija.service';
import {RouteParams} from 'angular2/router';

@Component({
    selector: 'mangija-list',
    directives: [mangijaComponent],
    pipes: [PositsiooniListPipe],
    templateUrl: 'app/mangija-list.component.html',
    styleUrls: ['app/mangija-list.component.css']
})
export class MangijaListComponent {

    klubi = '';
    mangijad = [];
    constructor (private mangijaService: MangijaService,
    private routeParams: RouteParams) {}

    ngOnInit() {
      this.klubi = this.routeParams.get('klubi');
      this.mangijad = this.mangijaService.get();
    }

    onMediaItemDeleted(mangija) {
     this.mangijaService.delete(mangija);
    }



}
