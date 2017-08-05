import { Component, Input, OnInit } from '@angular/core';

import { Partners } from './partners.model';

@Component({
    selector: 'prod-partners',
    templateUrl: './partners.component.html',
    styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {

    @Input() partners = <Partners>null;

    constructor() { }

    ngOnInit() { }
}
