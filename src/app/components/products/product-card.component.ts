import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'app-product-card',
    templateUrl: './product-card.component.html'
})
export class ProductCardComponent {
    @Input() product;
    @Input() mode:number;

    @Output() addToFav = new EventEmitter();
    @Output("onCartAction") onCart = new EventEmitter();


    /**
     * On clicking of add to fab icon
     */
    onAddToFav(){
        console.log("clicked on add to fab icon");

        this.addToFav.emit(this.product);
    }

    onCartClick(){
        this.onCart.emit(this.product);
    }
}
