import * as _ from 'lodash';

export class ReadMore {

    static sectionName = 'readMore';

    articles: ReadMoreArticle[];
    color_theme: string;
    title: string;

    constructor(rawData: ReadMore) {
        _.assignIn(this, rawData);

        this.articles = _.map(this.articles, article => new ReadMoreArticle(article));
    }
}

export class ReadMoreArticle {
    body: string;
    features: ReadMoreFeature[];
    image: string;
    fragment: string;
    link: string;
    title: string;

    constructor(rawData: ReadMoreArticle) {
        _.assignIn(this, rawData);
    }
}

export class ReadMoreFeature {
    body: string;
    label: string;
}
