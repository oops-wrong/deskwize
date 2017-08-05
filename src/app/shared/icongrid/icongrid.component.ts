import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'shared-icongrid',
    templateUrl: './icongrid.component.html',
    styleUrls: ['./icongrid.component.scss'],
    host: {'class': 'col-md-6 col-lg-3 d-flex mb-4 align-items-stretch'}
})
export class IcongridComponent implements OnInit {

    @Input() icon: string;
    @Input() text: string;

    constructor() { }

    ngOnInit() { }
}
