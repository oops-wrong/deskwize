import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MainMenuService } from '~/core/main-menu.service';
import { ProductService } from '~/core/product.service';
import { SubmitService } from '~/core/submit.service';
import { ProductMatch } from '~/models/product-match.model';
import { SidebarItem } from '~/models/sidebar.model';

@Component({
    selector: 'apt-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    public productsList: ProductMatch[] = [];
    public mainMenuItems: SidebarItem[] = [];

    constructor(
        private mainMenuService: MainMenuService,
        private productService: ProductService,
        private route: ActivatedRoute,
        private submitService: SubmitService
    ) { }

    ngOnInit() {
        this.loadMainMenuItems();
        this.loadProductsList();

        this.route.queryParams.subscribe((params) => {
            this.submitService.setUTMParams(params as any);
        });
    }

    private loadProductsList(): void {
        this.productService.loadProductsList()
            .add(() => {
                this.productsList = this.productService.productsList;
            });
    }

    private loadMainMenuItems(): void {
        this.mainMenuService.loadMainMenuItems()
            .add(() => {
                this.mainMenuItems = this.mainMenuService.mainMenuItems;
            });
    }
}
