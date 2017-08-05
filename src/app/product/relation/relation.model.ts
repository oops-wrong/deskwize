import * as _ from 'lodash';

import { ProductSection } from '~/models/product.model';

export class Relation {

    static sectionName = 'relation';

    blueline = false;
    color_theme: string;
    list: RelationList;
    body: string;
    order: number;
    title: string;
    sub_component: ProductSection;

    constructor(rawData: Relation) {
        _.assignIn(this, rawData);
        this.list = new RelationList(this.list);
        this.sub_component = new ProductSection(this.sub_component);
    }
}

export class RelationList {
    items: string[];

    constructor(rawData: RelationList) {
        _.assignIn(this, rawData);
    }
}
