import {Component} from 'angular2/core';
import {MangijaListComponent} from './mangija-list.component';
import {MangijateVormComponent} from './mangijate-vorm.component';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';


@RouteConfig([
  {path: '/:klubi', component: MangijaListComponent, name: 'List'},
])

@Component({
    selector: 'jalgpalluri-jalgija-app',
    directives: [ROUTER_DIRECTIVES, MangijateVormComponent], 
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css']
})
export class AppComponent {

}
