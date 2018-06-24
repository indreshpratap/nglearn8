import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';


@Component({
    selector: 'app-product-card',
    templateUrl: './product-card.component.html'
})
export class ProductCardComponent implements OnChanges{
    @Input() product;
    @Input() mode:number;

    @Output() addToFav = new EventEmitter();
    @Output("onCartAction") onCart = new EventEmitter();


    ngOnChanges(changes:SimpleChanges){
      if(changes.mode){
          console.log("Yes mode property changed",changes.mode);
      }
      if(changes.product){
        console.log("Yes product property changed",changes.product);
      }
    }
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
