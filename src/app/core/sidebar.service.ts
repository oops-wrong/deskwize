import { Injectable } from '@angular/core';

export const openedSideBarWidth = 300;

export class Sidebar {
    right = -openedSideBarWidth;
    width = openedSideBarWidth;
}

@Injectable()
export class SidebarService {

    public sidebar = new Sidebar();

    constructor () { }

    public closeSidebar(): void {
        this.sidebar.right = -openedSideBarWidth;
    }

    public openSidebar(): void {
        this.sidebar.right = 0;
    }
}
