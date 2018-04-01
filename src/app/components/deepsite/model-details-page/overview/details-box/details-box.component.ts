import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'mozo-details-box',
    templateUrl: './details-box.component.html',
    styleUrls: ['./details-box.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class DetailsBoxComponent implements OnInit {
    @Input() config: Array<any>;

    constructor() { }

    ngOnInit() {
    }

}
