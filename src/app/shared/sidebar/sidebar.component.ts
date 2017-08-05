import { Component, HostListener, Input, OnInit } from '@angular/core';

import { Sidebar, SidebarService } from '~/core/sidebar.service';
import { SidebarItem } from '~/models/sidebar.model';

@Component({
    selector: 'shared-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

    public sidebar: Sidebar;

    @Input() sidebarProducts: SidebarItem[];
    @Input() mainMenuItems: SidebarItem[];

    constructor(
        private sidebarService: SidebarService
    ) { }

    ngOnInit() {
        this.sidebar = this.sidebarService.sidebar;
    }

    public close(): void {
        this.sidebarService.closeSidebar();
    }

    @HostListener('click', ['$event'])
    public onHostClick() {
        event.stopPropagation();

        return false;
    }

    @HostListener('window:click', [])
    public onWindowClick() {
        this.close();
    }
}
