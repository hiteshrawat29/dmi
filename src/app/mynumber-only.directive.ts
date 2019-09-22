import { Directive, HostListener, Input } from '@angular/core';
@Directive({
selector: '[numbersOnly]'
})
export class NumbersOnlyDirective {

regexStr = '^[0-9_.,% ]*$';
@Input() isAlphaNumeric: boolean;

@HostListener('keypress', ['$event']) onKeyPress(event) {
return new RegExp(this.regexStr).test(event.key);
}

}