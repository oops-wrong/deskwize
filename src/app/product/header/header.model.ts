import * as _ from 'lodash';

export class Header {
    description: string;
    checks: string[];
    icons: string[];
    icons_description: string;
    image: string;
    headline: string;
    headline2: string;

    constructor(rawData: Header) {
        _.assignIn(this, rawData);
    }
}
