import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { productRoutePrefix } from '~/models/product-match.model';
import { PageNotFoundComponent } from '~/shared/page-not-found/page-not-found.component';

const appRoutes: Routes = [
    { path: productRoutePrefix, loadChildren: '~/product/product.module#ProductModule' },
    { path: '', loadChildren: '~/main/main.module#MainModule' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
