import { Component, Input, OnInit } from '@angular/core';
import { Promotion } from './promotion.model';

@Component({
    selector: 'prod-promotion',
    templateUrl: './promotion.component.html',
    styleUrls: ['./promotion.component.scss']
})
export class PromotionComponent implements OnInit {

    @Input() promotion: Promotion;
    @Input() theme: string;

    constructor() { }

    ngOnInit() { }
}
