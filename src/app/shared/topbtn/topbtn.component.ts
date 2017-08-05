import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'shared-topbtn',
    templateUrl: './topbtn.component.html',
    styleUrls: ['./topbtn.component.scss']
})
export class TopbtnComponent implements OnInit {

    public show: boolean;

    constructor(
        @Inject(DOCUMENT) private document: any,
        private route: ActivatedRoute,
        private router: Router
    ) {
        this.show = false;
    }

    ngOnInit() {
        this.setSubscribeToFragment();
    }

    @HostListener('window:scroll', [])
    public onWindowScroll() {
        const scroll = window.pageYOffset || document.documentElement.scrollTop;
        const height = this.document.body.offsetHeight;

        this.show = scroll > height;
    }

    public toTopScroll() {
        let i = this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
        const int = setInterval(function() {
            window.scrollTo(0, i -= 100);
            if (i <= 0) {
                clearInterval(int);
            }
        }, 15);
    }

    private setSubscribeToFragment(): void {
        this.route.fragment.filter(Boolean).subscribe(fragment => {
            const element = document.querySelector(`#${fragment}`);

            if (element) {
                element.scrollIntoView(element);
                this.router.navigate([], { fragment: void 0 });
            }
        });
    }
}
