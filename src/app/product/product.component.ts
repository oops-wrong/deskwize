import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';

import { ProductService } from '~/core/product.service';
import { Product } from '~/models/product.model';

@Component({
    selector: 'prod-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ProductComponent implements OnInit {

    public isNotFound = false;
    public product: Product;

    private productLoading;

    constructor(
        private productService: ProductService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.setProductLoading();
        this.setProductSubscribe();
    }

    private setProductLoading(): void {
        this.productLoading = this.route.params
            .switchMap(
                (params: Params) => this.productService.loadProduct(
                    params['product'], params['version']
                )
            );
    }

    private setProductSubscribe(): void {
        this.productLoading
            .catch(() => {
                this.isNotFound = true;
            })
            .subscribe((product: Product) => {
                this.product = product;
            });
    }
}
