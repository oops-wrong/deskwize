import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { BluelineComponent } from './blueline/blueline.component';
import { FooterComponent } from './footer/footer.component';
import { IcongridComponent } from './icongrid/icongrid.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TitleComponent } from './title/title.component';
import { TopbtnComponent } from './topbtn/topbtn.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule
    ],
    declarations: [
        BluelineComponent,
        FooterComponent,
        IcongridComponent,
        PageNotFoundComponent,
        SidebarComponent,
        TitleComponent,
        TopbtnComponent
    ],
    exports: [
        BluelineComponent,
        CommonModule,
        FooterComponent,
        FormsModule,
        IcongridComponent,
        PageNotFoundComponent,
        RouterModule,
        SidebarComponent,
        TitleComponent,
        TopbtnComponent
    ],
})
export class SharedModule { }
