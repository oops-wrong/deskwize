import { Response } from '@angular/http';

import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';

import * as _ from 'lodash';

export class CommonHelper {
    public static castModel<T>(element: T, Model: new(...rest) => T): T {
        return new Model(element);
    }

    public static castModels<T>(elements: T[], Model: new(...rest) => T): T[] {
        return _.map(elements, element => this.castModel(element, Model));
    }

    public static extractJsonData(res: Response): any {
        const body = res.json();

        return body || {};
    }

    public static extractTextData(res: Response): string {
        const body = res.text();

        return body || '';
    }

    public static handleError (error: Response | any) {
        let errMsg: string;

        if (error instanceof Response) {
            const body = error.text() || '';
            errMsg = `${error.status} - ${error.statusText || ''} ${body}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);

        return Observable.throw(errMsg);
    }
}
