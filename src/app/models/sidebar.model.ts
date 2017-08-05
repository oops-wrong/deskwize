import * as _ from 'lodash';

export class SidebarItem {
    display: string;
    link: string;

    constructor(rawData: SidebarItem) {
        _.assignIn(this, rawData);
    }
}
