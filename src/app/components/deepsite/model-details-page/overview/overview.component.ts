import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'mozo-overview',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class OverviewComponent implements OnInit {
    modelsData: any;
    variantsInfo: any;
    priceRange = {
        'min': 0,
        'max': 0
    };
    modelOverviewImageUrl: String = '';
    detailsBoxConfig: Array<any> = [];

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.parent.data
            .subscribe((data: any) => {
                if (data) {
                    this.modelsData = data.modelDetails && data.modelDetails.json();
                    this.variantsInfo = data.variantsInfo && data.variantsInfo.json();

                    this.priceRange.min = Math.min.apply(Math, this.variantsInfo.map((variant) => variant.price ));
                    this.priceRange.max = Math.max.apply(Math, this.variantsInfo.map((variant) => variant.price ));

                    if (Array.isArray(this.modelsData.modelDetails.images) && this.modelsData.modelDetails.images.length) {
                        this.modelOverviewImageUrl = this.modelsData.modelDetails.images[0] || '';
                    }

                    this.setDetailsBoxConfig(this.modelsData);
                }
            });
    }

    setDetailsBoxConfig(modelsData) {
        this.detailsBoxConfig = [
            {
                title: 'Economy',
                details: [
                    {
                        dataField: modelsData.modelDetails.mileage,
                        title: 'Mileage'
                    },
                    {
                        dataField: modelsData.modelDetails.serviceCost,
                        title: 'Service Cost'
                    },
                    {
                        dataField: '',
                        title: 'Fuel Type'
                    },
                    {
                        dataField: '',
                        title: 'Fuel Tank'
                    }
                ]
            },
            {
                title: 'Performance',
                details: [
                    {
                        dataField: modelsData.modelDetails.engine,
                        title: 'Engine'
                    },
                    {
                        dataField: modelsData.modelDetails.bhp,
                        title: 'BHP'
                    },
                    {
                        dataField: modelsData.modelDetails.cylinders,
                        title: 'No. of Cylinders'
                    },
                    {
                        dataField: modelsData.modelDetails.gears,
                        title: 'No. of Gears'
                    }
                ]
            },
            {
                title: 'Comfort',
                details: [
                    {
                        dataField: '',
                        title: 'A/C'
                    },
                    {
                        dataField: modelsData.modelDetails.powerSteering,
                        title: 'Power Steering'
                    },
                    {
                        dataField: modelsData.modelDetails.seating,
                        title: 'Seating Capacity'
                    },
                    {
                        dataField: '',
                        title: 'Boot Space'
                    }
                ]
            },
            {
                title: 'Safety',
                details: [
                    {
                        dataField: modelsData.modelDetails.centeralLock,
                        title: 'Central Lock'
                    },
                    {
                        dataField: modelsData.modelDetails.brakeAssist,
                        title: 'Brake Assist'
                    },
                    {
                        dataField: modelsData.modelDetails.parkingSensor,
                        title: 'Parking Sensor'
                    },
                    {
                        dataField: modelsData.modelDetails.airbags,
                        title: 'Airbags'
                    }
                ]
            }
        ];
    }

}
