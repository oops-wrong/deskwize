import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'main-review',
    templateUrl: './review.component.html',
    styleUrls: ['./review.component.scss'],
    host: {'class': 'col-lg-4 d-flex align-items-stretch mb-4'}
})
export class ReviewComponent implements OnInit {
    @Input() text: string;
    @Input() reviewerName: string;
    @Input() reviewerCompanyName: string;

    constructor() { }

    ngOnInit() { }
}
