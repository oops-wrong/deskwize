import * as _ from 'lodash';

import { Feature } from '../feature/feature.model';

export class BriefFeaturesLots {

    static sectionName = 'briefFeaturesLots';

    features: Feature[];
    title: string;
    noSpace: boolean;
    blueline?: boolean;
    theme?: string;

    constructor(rawData: BriefFeaturesLots) {
        _.assignIn(this, rawData);

        this.features = _.map(this.features, feature => new Feature(feature));
    }
}
