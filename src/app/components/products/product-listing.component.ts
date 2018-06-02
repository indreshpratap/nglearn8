
import { Component, OnInit } from '@angular/core';
import * as faker from 'faker';

@Component({
    selector: 'app-product-listing',
    templateUrl: './product-listing.component.html'

})
export class ProductListingComponent {
    products = [];

    constructor() {
        console.log("Preparing product list");
        for (let i = 0; i < 20; i++) {
            this.products.push({
                name: faker.commerce.productName(),
                price: faker.commerce.price(),
                department: faker.commerce.department(),
                color: faker.commerce.color(),
                product: faker.commerce.product(),
                image: i%2===0? faker.image.food():"assets/images/abstract.jpeg"
            });
        }

    }

}
