import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
    selector: 'shared-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    constructor( @Inject(DOCUMENT) private document: any) { }

    ngOnInit() {
    }

    public toTopScroll() {
        let i = this.document.body.scrollTop;
        const int = setInterval(function() {
            window.scrollTo(0, i -= 100);
            if (i <= 0) {
                clearInterval(int);
            }
        }, 15);
    }

}
