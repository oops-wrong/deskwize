import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'shared-title',
    templateUrl: './title.component.html',
    styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

    @Input() headerClass = 'py-5';
    @Input() text: string;

    constructor() { }

    ngOnInit() { }
}
