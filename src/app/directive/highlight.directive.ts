import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
    selector: '[highlight]',
})
export class HighlightDirective {

    @Input()
    bgcolor: string;
    constructor(private element: ElementRef) {
        console.log("Highlight directive", element.nativeElement, this.bgcolor);
    }
    ngOnInit() {
        //    this.element.nativeElement.style.backgroundColor=this.bgcolor||'yellow';

    }

    @HostListener('mouseenter')
    changeBackground() {
        console.log('you clicked on element');
        this.element.nativeElement.style.backgroundColor = this.bgcolor || 'yellow';
    }
    @HostListener('mouseleave')
    clearBackground() {
        console.log('you clicked on element');
        this.element.nativeElement.style.backgroundColor = '';
    }
}

 // 
