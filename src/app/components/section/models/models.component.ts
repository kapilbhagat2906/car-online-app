import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
    selector: 'mozo-models',
    templateUrl: './models.component.html',
    styleUrls: ['./models.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ModelsComponent implements OnInit {
    @Input() items: Array<any>;
    @Input() modelCategories: Array<any>;
    @Input() tilesPerView: number;

    constructor() { }

    ngOnInit() {
    }

}
