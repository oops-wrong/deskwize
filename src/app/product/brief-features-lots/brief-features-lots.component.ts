import { Component, Input, OnInit } from '@angular/core';
import { BriefFeaturesLots } from './brief-features-lots.model';

@Component({
    selector: 'prod-brief-features-lots',
    templateUrl: './brief-features-lots.component.html',
    styleUrls: ['./brief-features-lots.component.scss']
})
export class BriefFeaturesLotsComponent implements OnInit {

    @Input() briefFeaturesLots: BriefFeaturesLots;

    constructor() { }

    ngOnInit() { }

    public trackByIndex(index: number) {
        return index;
    }
}
