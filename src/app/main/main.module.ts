import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ng2CompleterModule } from 'ng2-completer';

import { AboutComponent } from './about/about.component';
import { FindcardComponent } from './findcard/findcard.component';
import { FindProductComponent } from './find-product/find-product.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MainRoutingModule } from './main-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { PopularProductComponent } from './popular-product/popular-product.component';
import { ReviewComponent } from './review/review.component';
import { SharedModule } from '~/shared/shared.module';

@NgModule({
    imports: [
        FormsModule,
        MainRoutingModule,
        Ng2CompleterModule,
        SharedModule
    ],
    declarations: [
        AboutComponent,
        FindcardComponent,
        FindProductComponent,
        HeaderComponent,
        HomeComponent,
        NavbarComponent,
        PopularProductComponent,
        ReviewComponent,
    ]
})
export class MainModule { }
