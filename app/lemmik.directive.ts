import {Directive, HostBinding, HostListener, Input} from 'angular2/core';

@Directive({
    selector: '[LemmikDirective]'
})
export class LemmikDirective {
    @HostBinding('class.is-favorite') isFavorite = true;
    @HostBinding('class.is-favorite-hovering') hovering = false;

    @HostListener('mouseenter')
    onMouseEnter() {
        this.hovering = true;
    }

    @HostListener('mouseleave')
    onMouseLeave() {
        this.hovering = false;
    }

    @Input()
    set LemmikDirective(value) {
        this.isFavorite = value;
    }
}
