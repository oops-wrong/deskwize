import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subscription } from 'rxjs/Subscription';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/distinct';
import 'rxjs/add/operator/map';

import { CommonHelper } from './common.helper';
import { SidebarItem } from '~/models/sidebar.model';

@Injectable()
export class MainMenuService {

    public mainMenuItems: SidebarItem[];

    private mainMenuSubscription: Subscription;

    constructor(private http: Http) { }

    public loadMainMenuItems() {
        if (!this.mainMenuSubscription) {
            this.mainMenuSubscription = this.http.get(`/assets/mock-api/main-menu/default.json`)
                .map(CommonHelper.extractJsonData)
                .catch(CommonHelper.handleError)
                .subscribe((mainMenuItems: SidebarItem[]) => {
                    this.mainMenuItems = mainMenuItems;
                });
        }

        return this.mainMenuSubscription;
    }
}
