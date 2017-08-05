import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import * as _ from 'lodash';

import { CommonHelper } from './common.helper';
import { Product } from '~/models/product.model';
import { ProductMatch } from '~/models/product-match.model';

@Injectable()
export class ProductService {

    public readonly defaultProductName = 'default';
    public readonly defaultVersionName = '';

    public productsList: ProductMatch[];

    private productsListSubscription: Subscription;

    constructor (private http: Http) { }

    public loadProduct(productName: string, versionName: string): Observable<Product> {
        return this.http.get(this.getProductPath(productName, versionName))
            .map(CommonHelper.extractJsonData)
            .map(model => CommonHelper.castModel(model, Product))
            .catch(CommonHelper.handleError);
    }

    public loadProductsList(): Subscription {
        if (!this.productsListSubscription) {
            this.productsListSubscription = this.requestProductsList()
                .subscribe((productsList: ProductMatch[]) => {
                    this.productsList = productsList;
                });
        }

        return this.productsListSubscription;
    }

    private getProductPath(productName: string, versionName: string): string {
        if (_.isEmpty(productName)) {
            productName = this.defaultProductName;
            versionName = this.defaultVersionName;
        }

        if (_.isEmpty(versionName)) {
            return `/assets/mock-api/products/${productName}.json`;
        }

        return `/assets/mock-api/products/${productName}/${versionName}.json`;
    }

    private requestProductsList(): Observable<ProductMatch[]> {
        return this.http.get('/assets/mock-api/products.json')
            .map(CommonHelper.extractJsonData)
            .map(models => CommonHelper.castModels(models, ProductMatch))
            .catch(CommonHelper.handleError);
    }
}
