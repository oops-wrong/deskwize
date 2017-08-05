import * as _ from 'lodash';
import { Feature } from '../feature/feature.model';

export class BriefFeatures {

    static sectionName = 'briefFeatures';

    features: Feature[];
    title: string;
    theme?: string;

    constructor(rawData: BriefFeatures) {
        _.assignIn(this, rawData);

        this.features = _.map(this.features, feature => new Feature(feature));
    }
}
