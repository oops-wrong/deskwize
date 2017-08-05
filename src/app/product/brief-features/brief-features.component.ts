import { Component, Input, OnInit } from '@angular/core';
import { BriefFeatures } from './brief-features.model';

@Component({
    selector: 'prod-brief-features',
    templateUrl: './brief-features.component.html',
    styleUrls: ['./brief-features.component.scss']
})
export class BriefFeaturesComponent implements OnInit {

    @Input() briefFeatures: BriefFeatures;

    constructor() { }

    ngOnInit() { }

    public trackByIndex(index: number) {
        return index;
    }
}
