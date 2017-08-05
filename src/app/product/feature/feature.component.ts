import { Component, Input, OnInit } from '@angular/core';

import { Feature } from './feature.model';

@Component({
    selector: 'prod-feature',
    templateUrl: './feature.component.html',
    styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {

    @Input() feature: Feature;

    constructor() { }

    ngOnInit() { }

    public trackByIndex(index: number) {
        return index;
    }
}
