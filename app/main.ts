import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {MangijaService} from './mangija.service';
import {provide} from 'angular2/core';
import {LEIA_KLUBID, leiaklubid } from './meeskondadenimed';
import {ROUTER_PROVIDERS} from 'angular2/router';

bootstrap(AppComponent,[
  MangijaService,
  provide(LEIA_KLUBID, {useValue: leiaklubid}),
  ROUTER_PROVIDERS
]);
