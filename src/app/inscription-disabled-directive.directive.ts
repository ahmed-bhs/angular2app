import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appInscriptionDisabled]'
})
export class InscriptionDisabledDirectiveDirective {
  @HostBinding('class.link-is-disabled') status: boolean;
  @Input()
  set appInscriptionDisabled(value) {
    this.status = value;
  }
  constructor() { }

}
