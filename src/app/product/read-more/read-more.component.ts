import { Component, Input, OnInit } from '@angular/core';

import { ReadMore } from './read-more.model';

@Component({
    selector: 'prod-read-more',
    templateUrl: './read-more.component.html',
    styleUrls: ['./read-more.component.scss']
})
export class ReadMoreComponent implements OnInit {

    @Input() readMore = <ReadMore>null;

    constructor() { }

    ngOnInit() { }

    public trackByIndex(index: number) {
        return index;
    }
}
