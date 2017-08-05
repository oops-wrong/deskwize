import * as _ from 'lodash';

export class Partners {

    static sectionName = 'partners';

    fragment: string;
    icons: string[];
    link: string;
    title: string;

    constructor(rawData: Partners) {
        _.assignIn(this, rawData);
    }
}
