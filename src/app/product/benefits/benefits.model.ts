import * as _ from 'lodash';

export class Benefits {

    static sectionName = 'benefits';

    color_theme: string;
    list: BenefitsList;
    steps: BenefitsStep[];
    title: string;

    constructor(rawData: Benefits) {
        _.assignIn(this, rawData);

        this.list = new BenefitsList(this.list);
        this.steps = _.map(this.steps, benefitsStep => new BenefitsStep(benefitsStep));
    }
}

export class BenefitsList {
    description: string;
    items: string[];
    title: string;

    constructor(rawData: BenefitsList) {
        _.assignIn(this, rawData);
    }
}

export class BenefitsStep {
    description: string;
    image: string;
    title: string;

    constructor(rawData: BenefitsStep) {
        _.assignIn(this, rawData);
    }
}
