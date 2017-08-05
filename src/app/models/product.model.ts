import * as _ from 'lodash';

import { Benefits } from '~/product/benefits/benefits.model';
import { BriefFeatures } from '~/product/brief-features/brief-features.model';
import { Feature } from '~/product/feature/feature.model';
import { Header } from '~/product/header/header.model';
import { Navbar } from '~/product/navbar/navbar.model';
import { Partners } from '~/product/partners/partners.model';
import { Promotion } from '~/product/promotion/promotion.model';
import { Questionnaire } from '~/product/questionnaire/questionnaire.model';
import { ReadMore } from '~/product/read-more/read-more.model';
import { Relation } from '~/product/relation/relation.model';
import { BriefFeaturesLots } from '~/product/brief-features-lots/brief-features-lots.model';

export class Product {
    color_theme: ProductColorThemeName = ProductColorTheme.main;
    header: Header;
    navbar: Navbar;
    questionnaire: Questionnaire;
    questionnaire_url: string;
    sections: ProductSection[];

    constructor(rawData: Product) {
        _.assignIn(this, rawData);

        this.header = new Header(this.header);
        this.questionnaire = new Questionnaire(this.questionnaire);
        this.navbar = new Navbar(this.navbar);
        this.sections = _.map(this.sections, section => new ProductSection(section));
    }
}

interface ModelMap {
    [index: string]: new(...rest) => any;
}
const productSectionMap: ModelMap = {
    [Benefits.sectionName]: Benefits,
    [BriefFeatures.sectionName]: BriefFeatures,
    [BriefFeaturesLots.sectionName]: BriefFeaturesLots,
    [Feature.sectionName]: Feature,
    [Partners.sectionName]: Partners,
    [Promotion.sectionName]: Promotion,
    [ReadMore.sectionName]: ReadMore,
    [Relation.sectionName]: Relation,
    'image': String,
    'space': String,
    'wave': String
};

export class ProductSection {
    bg = 'grey';
    name: string;
    options: any;

    constructor(rawData: ProductSection) {
        _.assignIn(this, rawData);

        if (!this.options) {
            return;
        }

        const Model = productSectionMap[this.name];

        if (Model) {
            this.options = new Model(this.options);
        } else {
            throw new Error(`Unknown section name "${this.name}"`);
        }
    }
}

export class ProductColorTheme {
    static readonly green = 'green';
    static readonly main = 'main';
}
export type ProductColorThemeName = keyof typeof ProductColorTheme;
