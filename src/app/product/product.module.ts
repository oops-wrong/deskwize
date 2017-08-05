import { NgModule } from '@angular/core';

import { BenefitsComponent } from './benefits/benefits.component';
import { BriefFeaturesComponent } from './brief-features/brief-features.component';
import { FeatureComponent } from './feature/feature.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PartnersComponent } from './partners/partners.component';
import { PaymentIconComponent } from './payment-icon/payment-icon.component';
import { ProductComponent } from './product.component';
import { ProductRoutingModule } from './product-routing.module';
import { PromotionComponent } from './promotion/promotion.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { SlideComponent } from './questionnaire/slide/slide.component';
import { ReadMoreComponent } from './read-more/read-more.component';
import { RelationComponent } from './relation/relation.component';
import { SharedModule } from '~/shared/shared.module';
import { BriefFeaturesLotsComponent } from '~/product/brief-features-lots/brief-features-lots.component';

@NgModule({
    imports: [
        ProductRoutingModule,
        SharedModule
    ],
    declarations: [
        BenefitsComponent,
        BriefFeaturesComponent,
        BriefFeaturesLotsComponent,
        FeatureComponent,
        HeaderComponent,
        NavbarComponent,
        PartnersComponent,
        PaymentIconComponent,
        ProductComponent,
        PromotionComponent,
        QuestionnaireComponent,
        ReadMoreComponent,
        RelationComponent,
        SlideComponent
    ]
})
export class ProductModule { }
