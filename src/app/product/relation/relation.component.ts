import { Component, Input, OnInit } from '@angular/core';

import { Relation } from './relation.model';

@Component({
    selector: 'prod-relation',
    templateUrl: './relation.component.html',
    styleUrls: ['./relation.component.scss']
})
export class RelationComponent implements OnInit {

    @Input() relation = <Relation>null;

    constructor() { }

    ngOnInit() { }
}
