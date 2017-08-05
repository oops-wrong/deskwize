import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { CompleterData, CompleterItem, CompleterService } from 'ng2-completer';

import { Subscription } from 'rxjs/Subscription';

import { ProductService } from '~/core/product.service';
import { ProductMatch } from '~/models/product-match.model';

@Component({
    selector: 'main-find-product',
    templateUrl: './find-product.component.html',
    styleUrls: ['./find-product.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class FindProductComponent implements OnInit {

    public dataService: CompleterData;
    public productsList: ProductMatch[];
    public selectedProduct: ProductMatch;

    constructor(
        private completerService: CompleterService,
        private productService: ProductService,
        private router: Router
    ) { }

    ngOnInit() {
        this.loadProductsList()
            .add(() => this.setDataService());
    }

    public goToProduct(): void {
        if (!this.selectedProduct) {
            return;
        }

        this.router.navigate([this.selectedProduct.link]);
    }

    public productSelected(selected: CompleterItem): void {
        this.selectedProduct = selected && selected.originalObject;
        this.goToProduct();
    }

    private loadProductsList(): Subscription {
        return this.productService.loadProductsList()
            .add(() => {
                this.productsList = this.productService.productsList || [];
            });
    }

    private setDataService(): void {
        this.dataService = this.completerService.local(this.productsList, 'matches', 'display');
    }
}
