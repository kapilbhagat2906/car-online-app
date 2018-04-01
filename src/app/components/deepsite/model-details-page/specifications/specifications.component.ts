import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'mozo-specifications',
    templateUrl: './specifications.component.html',
    styleUrls: ['./specifications.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SpecificationsComponent implements OnInit {
    modelsData: any;
    variantsInfo: any;
    selectedVariant: any;
    specsToBeDisplayed: Array<any> = [];

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.parent.data
            .subscribe((data: any) => {
                if (data) {
                    this.modelsData = data.modelDetails && data.modelDetails.json();
                    this.variantsInfo = data.variantsInfo && data.variantsInfo.json();

                    if (Array.isArray(this.variantsInfo) && this.variantsInfo.length) {
                        this.selectedVariant = this.variantsInfo[0];
                        this.setSpecsToBeDisplayed(this.selectedVariant);
                    }
                }
            });
    }

    changeVariantSelection(variant) {
        this.selectedVariant = variant;
        this.setSpecsToBeDisplayed(this.selectedVariant);
    }

    setSpecsToBeDisplayed(selectedVariant) {
        this.specsToBeDisplayed = [
            { 'value': selectedVariant.mileage, 'label': 'Mileage' },
            { 'value': selectedVariant.engine, 'label': 'Engine' },
            { 'value': selectedVariant.gears, 'label': 'Gears' },
            { 'value': selectedVariant.cylinders, 'label': 'Cylinders' },
            { 'value': selectedVariant.seating, 'label': 'Seating' },
            { 'value': selectedVariant.powerSteering, 'label': 'Power Steering' },
            { 'value': selectedVariant.brakeAssist, 'label': 'Brake Assist' },
            { 'value': selectedVariant.airbags, 'label': 'Air Bags' },
            { 'value': selectedVariant.parkingSensor, 'label': 'Parking Sensor' },
            { 'value': selectedVariant.topSpeed, 'label': 'Top Speed' },
            { 'value': selectedVariant.bhp, 'label': 'BHP' },
            { 'value': selectedVariant.powerWindow, 'label': 'Power Window' },
            { 'value': selectedVariant.fuelType, 'label': 'Fuel Type' },
            { 'value': selectedVariant.transmissionType, 'label': 'Transmission Type' }
        ];
    }

}
