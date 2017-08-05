import { Component, EventEmitter, Input, OnInit, Output, ViewChildren } from '@angular/core';

import { Subject } from 'rxjs/Subject';

import * as _ from 'lodash';

import { Questionnaire, QuestionnaireSlide } from './questionnaire.model';

@Component({
    selector: 'prod-questionnaire',
    templateUrl: './questionnaire.component.html',
    styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {

    public currIndex = 0;
    public hideback = false;
    public hidenext = false;
    public progress = 0; // todo delete this
    public shift = [];
    public slides: QuestionnaireSlide[] = [];
    public validateSlideTo: Subject<any> = new Subject();

    private percent = 0;
    private shiftSize = 1;

    @Input() model: any;
    @Input() questionnaire: Questionnaire;
    @Output() lastSlide = new EventEmitter<void>();
    @ViewChildren('slideArr') slideArr: any;

    constructor() { }

    ngOnInit() {
        this.slides.push(this.questionnaire.slides[0]);
        this.checkProps();
        this.percent = Math.round(100 / (this.questionnaire.slides.length - 1));
    }

    public slideTo(shift: number): void {
        if (shift > 0) {
            this.slideToNext(shift);
        } else if (shift < 0) {
            this.slideToBack();
        }
    }

    public slideToBack(): void {
        if (this.slides.length > 1) {
            this.setPosition('toCenter', 2);
            this.setPosition('toRight');
            this.currIndex -= this.shift.pop();
            setTimeout(() => {
                this.slides.splice(-1, 1);
                this.setProgress(1, false);
            }, 500);
            this.checkProps();
        }
        if (this.slides.length === 2) {
            this.hideback = true;
        }
    }

    public slideToNext(shift?: number): void {
        if (this.currIndex < this.sourceLength() - 1) {
            this.setPosition('toLeft');
            this.slides.push(this.questionnaire.slides[this.currIndex += shift || 1]);
            this.shift.push(shift || 1);
            this.setProgress(shift);
            this.checkProps();
            this.checkLastSlide();
        }
    }

    public slideAuto(): void {
        this.setPosition('toLeft');
        this.slides.push(this.questionnaire.slides[this.currIndex += 1]);
        this.shift[this.shift.length - 1] = 2;
        this.setProgress();
        this.checkProps();
        setTimeout(() => {
            this.slides.splice(-2, 1);
        }, 500);
    }

    private checkLastSlide(): void {
        if (this.slides.length === this.sourceLength() - 1) {
            this.lastSlide.emit();
        }
    }

    private checkProps() {
        this.hideback = false;
        this.hidenext = false;
        _.each(this.slides[this.slides.length - 1].props, (obj) => {
            switch (obj.label) {
                case 'autoslide':
                    setTimeout(() => {
                        this.slideAuto();
                    }, obj.value);
                    break;
                case 'hideback':
                    this.hideback = !!obj.value;
                    break;
                case 'hidenext':
                    this.hidenext = !!obj.value;
            }
        });
    }

    private setPosition(side: string, shift?: number): void {
        this.slideArr._results[this.slideArr._results.length - (shift || 1)].position = side;
    };

    private sourceLength(): number {
        return this.questionnaire.slides.length;
    }

    private setProgress(shift = 1, forward = true): void {
        if (forward) {
            this.progress += this.percent * shift;
        } else {
            if (this.shiftSize > shift) {
                this.progress -= this.percent * this.shiftSize;
                this.shiftSize = shift;
            } else {
                this.progress -= this.percent * shift;
            }
        }
        this.shiftSize = shift;
        if (this.progress >= 98) { // we can got 98-102 at last slide because we use Math.round
            this.progress = 100;
        }
    }
}
