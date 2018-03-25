import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'mozo-details-box',
    templateUrl: './details-box.component.html',
    styleUrls: ['./details-box.component.scss']
})
export class DetailsBoxComponent implements OnInit {
    @Input() config: Array<any>;

    constructor() { }

    ngOnInit() {
    }

}
