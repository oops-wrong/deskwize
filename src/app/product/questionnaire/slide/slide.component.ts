import {
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnDestroy,
    OnInit,
    Output,
    ViewChild
} from '@angular/core';
import {
    animate,
    state,
    style,
    transition,
    trigger
} from '@angular/animations';
import { NgForm } from '@angular/forms';

import * as _ from 'lodash';

import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';

import { QuestionnaireSlide, QuestionnaireCheck } from './../questionnaire.model';

@Component({
    selector: 'shared-slide',
    templateUrl: './slide.component.html',
    styleUrls: ['./slide.component.scss'],
    animations: [
        trigger('slideChange', [
            state('toLeft', style({
                left: '-100%'
            })),
            state('toCenter', style({
                left: '0'
            })),
            state('toRight',   style({
                left: '100%'
            })),
            transition('* => *', animate('500ms'))
        ])
    ]
})
export class SlideComponent implements OnDestroy, OnInit {

    public checkedOption: QuestionnaireCheck;
    public position: string;

    @Input() index: number;
    @Input() model: any;
    @Input() slide: QuestionnaireSlide;
    @Input() validateSlideTo: Subject<any>;
    @Output() slideTo = new EventEmitter<number>();
    @ViewChild('form') form: NgForm;
    @ViewChild('formEl') formEl: ElementRef;

    private subscription: Subscription;

    constructor() { }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    ngOnInit() {
        this.position = 'toCenter';
        this.checkSlideTransition();
    }

    public checked(check: QuestionnaireCheck): void {
        this.checkedOption = check;
        if (!this.checkedOption.text_area && check.type !== 'checkbox') {
            this.slideTo.emit(check.shift);
        }
    }

    public hasAutoSlide(): boolean {
        return _.some(this.slide.props, prop => prop.label === 'autoslide');
    }

    private checkSlideTransition(): void {
        this.subscription = this.validateSlideTo.subscribe((currentIndex: number) => {
            if (currentIndex !== this.index) {
                return;
            }

            if (this.form.valid) {
                this.slideTo.emit(1);
            } else {
                this.formEl.nativeElement.classList.add('touched');
            }
        });
    }
}
