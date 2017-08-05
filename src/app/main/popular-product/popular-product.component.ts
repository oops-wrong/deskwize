import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'main-popular-product',
    templateUrl: './popular-product.component.html',
    styleUrls: ['./popular-product.component.scss']
})
export class PopularProductComponent implements OnInit {

    @Input() bgImage: string;
    @Input() icon: string;
    @Input() text: string;
    @Input() url: string;

    constructor() { }

    ngOnInit() { }
}
