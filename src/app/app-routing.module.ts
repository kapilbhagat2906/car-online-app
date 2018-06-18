import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './components/homepage/homepage.component';
import { DeepsiteComponent } from './components/deepsite/deepsite.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ModelDetailsPageComponent } from './components/deepsite/model-details-page/model-details-page.component';
import { BrandDetailsPageComponent } from './components/deepsite/brand-details-page/brand-details-page.component';
import { OverviewComponent } from './components/deepsite/model-details-page/overview/overview.component';
import { PriceComponent } from './components/deepsite/model-details-page/price/price.component';
import { SpecificationsComponent } from './components/deepsite/model-details-page/specifications/specifications.component';

import { ModelDetailsResolve } from './components/deepsite/model-details-page/model-details.resolver';
import { VariantsInfoResolve } from './components/deepsite/model-details-page/variants-info.resolver';
import { BrandDetailsResolve } from './components/deepsite/brand-details-page/brand-details.resolver';

const routes: Routes = [
    {
        path: '',
        component: HomepageComponent,
        children: [
            {
                path: 'detail',
                component: DeepsiteComponent,
                children: [
                    {
                        path: 'model/:id',
                        component: ModelDetailsPageComponent,
                        resolve: {
                            modelDetails: ModelDetailsResolve,
                            variantsInfo: VariantsInfoResolve
                        },
                        children: [
                            {
                                path: '',
                                pathMatch: 'full',
                                redirectTo: 'overview'
                            },
                            {
                                path: 'overview',
                                component: OverviewComponent
                            },
                            {
                                path: 'price',
                                component: PriceComponent
                            },
                            {
                                path: 'specs',
                                component: SpecificationsComponent
                            }
                        ]
                    },
                    {
                        path: 'brand/:id',
                        component: BrandDetailsPageComponent,
                        resolve: {
                            brandDetails: BrandDetailsResolve
                        }
                    }
                ]
            }
        ]
    },
    {
        path: 'home',
        redirectTo: ''
    },
    {
        path: 'aboutUs',
        component: AboutUsComponent
    },
    {
        path: 'contactUs',
        component: ContactUsComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
