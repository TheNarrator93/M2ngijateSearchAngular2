import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {LemmikDirective} from './lemmik.directive';

@Component({
    selector: 'mangija',
    directives: [LemmikDirective],
    templateUrl: 'app/mangija.component.html',
    styleUrls: ['app/mangija.component.css']
})
export class mangijaComponent {
    @Input('mangijaToWatch') mangija;
    @Output('deleted') delete = new EventEmitter();

    onDelete() {
        this.delete.emit(this.mangija);
    }
}
