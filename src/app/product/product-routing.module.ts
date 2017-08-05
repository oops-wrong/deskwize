import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductComponent } from './product.component';

const productRoutes: Routes = [
    { path: '', component: ProductComponent },
    { path: ':product', component: ProductComponent },
    { path: ':product/:version', component: ProductComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(productRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ProductRoutingModule { }
