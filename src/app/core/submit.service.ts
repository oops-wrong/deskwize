import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { CommonHelper } from './common.helper';
import { Product } from '~/models/product.model';
import { SubmitModel, UTMParams } from '~/models/submit.model';

@Injectable()
export class SubmitService {

    private readonly submitModel = new SubmitModel();

    constructor(private http: Http) { }

    public getSubmitModel(): SubmitModel {
        return this.submitModel;
    }

    public sendQuestionnaire(product: Product) {
        this.submitModel.trackingUrl = window.location.toString();

        return this.http.post(product.questionnaire_url, this.submitModel)
            .map(CommonHelper.extractJsonData)
            .catch(CommonHelper.handleError);
    }

    public setUTMParams(utmParams: Partial<UTMParams>) {
        this.submitModel.source = utmParams.utm_source;
        this.submitModel.source_id = utmParams.utm_source_id;
        this.submitModel.channel = utmParams.utm_medium;
        this.submitModel.campaign = utmParams.utm_campaign;
        this.submitModel.keyword = utmParams.utm_term;

        this.setIp();
    }

    private setIp(): void {
        this.http.get('//freegeoip.net/json/').subscribe((response: Response) => {
            const data: any = response.json();

            this.submitModel.ip_address = data.ip;
        });
    }
}
