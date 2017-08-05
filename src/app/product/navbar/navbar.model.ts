import * as _ from 'lodash';

export class Navbar {
    headline: string;

    constructor(rawData: Navbar) {
        _.assignIn(this, rawData);
    }
}
