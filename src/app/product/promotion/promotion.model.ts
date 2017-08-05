import * as _ from 'lodash';

export class Promotion {

    static sectionName = 'promotion';

    description: string;
    image: string;
    title: string;
    items: string[];

    constructor(rawData: Promotion) {
        _.assignIn(this, rawData);
    }
}
