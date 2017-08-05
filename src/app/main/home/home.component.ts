import { Component, OnInit } from '@angular/core';

import { MainMenuService } from '~/core/main-menu.service';
import { productRoutePrefix } from '~/models/product-match.model';
import { SidebarItem } from '~/models/sidebar.model';

@Component({
    selector: 'main-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    public mainMenuItems: SidebarItem[] = [];
    public productRoutePrefix = productRoutePrefix;

    constructor(private mainMenuService: MainMenuService) { }

    ngOnInit() {
        this.loadMainMenuItems();
    }

    private loadMainMenuItems(): void {
        this.mainMenuService.loadMainMenuItems()
            .add(() => {
                this.mainMenuItems = this.mainMenuService.mainMenuItems;
            });
    }
}
