import { Component, Input, OnInit } from '@angular/core';

import { SidebarItem } from '~/models/sidebar.model';
import { SidebarService } from '~/core/sidebar.service';

@Component({
    selector: 'main-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    @Input() mainMenuItems: SidebarItem[] = [];

    constructor(private sidebarService: SidebarService) { }

    ngOnInit() { }

    public openSidebar(event): boolean {
        event.stopPropagation();

        this.sidebarService.openSidebar();

        return false;
    }
}
