import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'mozo-svg-icon',
    templateUrl: './svg-icon.component.html',
    styleUrls: ['./svg-icon.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SvgIconComponent implements OnInit {
    @Input() name: string;
    @Input() size: string;

    icon: string;

    constructor() { }

    ngOnInit() {
        this.icon = `#${this.name}`;
    }

}
