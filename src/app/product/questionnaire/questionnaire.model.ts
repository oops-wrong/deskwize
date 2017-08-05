import * as _ from 'lodash';

export class Questionnaire {
    slides: QuestionnaireSlide[];

    constructor(rawData: Questionnaire) {
        _.assignIn(this, rawData);

        this.slides = _.map(this.slides, slide => new QuestionnaireSlide(slide));
    }
}

export class QuestionnaireSlide {
    button: string;
    center: boolean;
    descriptions: string[];
    headline: string;
    checks: QuestionnaireCheck[];
    inputs: QuestionnaireInput[];
    props: QuestionnaireProp[];
    style: string;

    constructor(rawData: QuestionnaireSlide) {
        _.assignIn(this, rawData);

        this.checks = _.map(this.checks, check => new QuestionnaireCheck(check));
        this.inputs = _.map(this.inputs, input => new QuestionnaireInput(input));
        this.props = _.map(this.props, props => new QuestionnaireProp(props));
    }
}

export class QuestionnaireProp {
    label: string;
    value: string;

    constructor(rawData: QuestionnaireProp) {
        _.assignIn(this, rawData);
    }
}

export class QuestionnaireCheck {
    text_area: boolean;
    label: string;
    name: string;
    shift = 1;
    value: string;
    required = true;
    type = 'radio';

    constructor(rawData: QuestionnaireCheck) {
        _.assignIn(this, rawData);

        this.shift = _.toNumber(this.shift);
    }
}

export class QuestionnaireInput {
    label: string;
    name: string;
    required = true;
    pattern: RegExp;
    type = 'text';

    constructor(rawData: QuestionnaireInput) {
        _.assignIn(this, rawData);

        this.pattern = this.pattern && new RegExp(this.pattern);
    }
}
