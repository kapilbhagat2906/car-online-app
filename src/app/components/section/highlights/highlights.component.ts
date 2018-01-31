import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'mozo-highlights',
    templateUrl: './highlights.component.html',
    styleUrls: ['./highlights.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class HighlightsComponent implements OnInit {
    @Input() items: Array<any>;

    constructor() { }

    ngOnInit() {
    }

}
