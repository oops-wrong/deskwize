import * as _ from 'lodash';

export class Feature {

    static sectionName = 'feature';

    description: string;
    direction: 'left' | 'right';
    image: string;
    prosList?: ProsItem[];
    subDescription?: string;
    theme?: string;
    title: string;
    width = '100';

    constructor(rawData: Feature) {
        _.assignIn(this, rawData);

        this.prosList = _.map(this.prosList, prosItem => new ProsItem(prosItem));
    }
}

export class ProsItem {
    image: string;
    description: string;

    constructor(rawData: ProsItem) {
        _.assignIn(this, rawData);
    }
}
