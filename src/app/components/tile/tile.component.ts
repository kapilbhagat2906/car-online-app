import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'mozo-tile',
    templateUrl: './tile.component.html',
    styleUrls: ['./tile.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class TileComponent implements OnInit {
    @Input() item: any;

    constructor(private router: Router) { }

    ngOnInit() {
    }

    showDetails() {
        this.router.navigate(['detail/model', this.item.id]);
    }

}
