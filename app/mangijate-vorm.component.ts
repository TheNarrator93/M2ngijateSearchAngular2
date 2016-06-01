import {Component, Inject} from 'angular2/core';
import {Control, Validators, FormBuilder} from 'angular2/common';
import {MangijaService} from './mangija.service';
import {LEIA_KLUBID} from './meeskondadenimed';


@Component({
    selector: 'mangijate-vorm',
    templateUrl: 'app/mangijate-vorm.component.html',
    styleUrls: ['app/mangijate-vorm.component.css']
})
export class MangijateVormComponent {
  vorm;

  constructor(private formBuilder: FormBuilder,
  private mangijaService: MangijaService,
  @Inject(LEIA_KLUBID) public leiaklubid) {}

  ngOnInit() {
    this.vorm = this.formBuilder.group({
      'klubi': new Control('Arsenal'),
      'nimi': new Control('', Validators.compose([
         Validators.required,
         Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      'positsioon': new Control(''),
      'synniaasta': new Control('', this.synniaastaValidator)
    })
  }

  synniaastaValidator(kontroller){
    if(kontroller.value.trim().length === 0) return null;
    var synniaasta = parseInt(kontroller.value);
    var maxSynniaasta = 2010;
    var minSynniaasta = 1970;
    if (synniaasta >= minSynniaasta && synniaasta <= maxSynniaasta) return null;
    return {'synniaasta': {'min':minSynniaasta, 'max':maxSynniaasta}};
  }
  onSubmit(mangija) {
    this.mangijaService.add(mangija)
        .subscribe(() => {

            });
  }
}
