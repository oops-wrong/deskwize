import { Component, Input, OnInit } from '@angular/core';

import { Benefits } from './benefits.model';

@Component({
    selector: 'prod-benefits',
    templateUrl: './benefits.component.html',
    styleUrls: ['./benefits.component.scss']
})
export class BenefitsComponent implements OnInit {

    @Input() benefits = <Benefits>null;

    constructor() { }

    ngOnInit() { }
}
