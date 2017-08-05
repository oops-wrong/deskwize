import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainMenuService } from './main-menu.service';
import { ProductService } from './product.service';
import { SidebarService } from './sidebar.service';
import { SubmitService } from './submit.service';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        MainMenuService,
        ProductService,
        SidebarService,
        SubmitService,
    ]
})
export class CoreModule {
    constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}
