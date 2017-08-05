import * as _ from 'lodash';

import { SidebarItem } from '~/models/sidebar.model';

export const productRoutePrefix = 'en';

export class ProductMatch implements SidebarItem {
    display: string;
    get link(): string {
        return ProductMatch.getProductRouterLink(this.slug_product, this.slug_version);
    }
    matches: string[];
    slug_product: string;
    slug_version: string;

    public static getProductRouterLink(productName: string, versionName: string): string {
        if (_.isEmpty(versionName)) {
            return `${productRoutePrefix}/${productName}`;
        }

        return `${productRoutePrefix}/${productName}/${versionName}`;
    }

    constructor(rawData: ProductMatch) {
        _.assignIn(this, rawData);
    }
}
