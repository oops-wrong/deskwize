import * as _ from 'lodash';

export class SubmitModel {
    business_postcode: string;
    company_formation_year: string;
    company_name: string;
    company_type: string;
    contact_f_name: string;
    contact_l_name: string;
    contact_title: string;
    current_provider: string;
    current_terminal: string;
    email_address: string;
    estimated_card_payments: string;
    industry: string;
    payment_type: string;
    phone_no: string;

    source: string;
    source_id: string;
    channel: string;
    campaign: string;
    keyword: string;
    trackingUrl: string;
    ip_address: string;

    constructor(rawData?: Partial<SubmitModel>) {
        _.assignIn(this, rawData);
    }
}

export class UTMParams {
    utm_source: string;
    utm_source_id: string;
    utm_medium: string;
    utm_campaign: string;
    utm_term: string;
}
