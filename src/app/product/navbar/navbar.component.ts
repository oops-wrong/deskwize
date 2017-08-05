import { Component, Input, OnInit } from '@angular/core';

import { ProductColorThemeName } from '~/models/product.model';
import { Navbar } from './navbar.model';

@Component({
    selector: 'prod-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    @Input() navbar: Navbar;
    @Input() theme = <ProductColorThemeName>null;

    constructor() { }

    ngOnInit() { }
}
