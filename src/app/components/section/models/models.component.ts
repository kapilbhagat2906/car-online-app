import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
    selector: 'mozo-models',
    templateUrl: './models.component.html',
    styleUrls: ['./models.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ModelsComponent implements OnInit {
    @Input() items: Array<any>;

    modelCategories: any = [
        {
            'groupName': 'Popular',
            'criteria': ''
        },
        {
            'groupName': 'Upcoming Cars',
            'criteria': ''
        },
        {
            'groupName': 'Just Launched',
            'criteria': ''
        }
    ];

    constructor() { }

    ngOnInit() {
    }

}
