import { Component, Input, OnInit } from '@angular/core';

import { SubmitService } from '~/core/submit.service';
import { Product, ProductColorThemeName } from '~/models/product.model';
import { SubmitModel } from '~/models/submit.model';

@Component({
    selector: 'prod-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    public submitModel: SubmitModel;

    @Input() product: Product;
    @Input() theme = <ProductColorThemeName>null;

    constructor(private submitService: SubmitService) { }

    ngOnInit() {
        this.submitModel = this.submitService.getSubmitModel();
    }

    public sendQuestionnaire() {
        this.submitService.sendQuestionnaire(this.product)
            .subscribe(() => {
                console.log('sent questionnaire');
            });
    }
}
