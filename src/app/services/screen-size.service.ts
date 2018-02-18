import { Injectable } from '@angular/core';

@Injectable()
export class ScreenSizeService {
    screenSizes: any = {
        'tn': {
            'min': 0,
            'max': 479
        },
        'xs': {
            'min': 480,
            'max': 767
        },
        'sm': {
            'min': 768,
            'max': 991
        },
        'md': {
            'min': 992,
            'max': 1199
        },
        'lg': {
            'min': 1200,
            'max': undefined
        }
    };

    constructor() { }

    isSmallScreen(windowWidth: Number) {
        const SM_CONFIG: any = this.screenSizes.xs;
        let isSmallScreen: Boolean = false;

        if (SM_CONFIG && windowWidth <= SM_CONFIG.max) {
            isSmallScreen = true;
        }

        return isSmallScreen;
    }

    getDeviceType(windowWidth: Number) {
        let deviceType: String = '';

        for (const prop in this.screenSizes) {
            if (this.screenSizes.hasOwnProperty(prop)) {
                const deviceTypeConfig = this.screenSizes[prop];

                if (deviceTypeConfig) {
                    if (windowWidth >= deviceTypeConfig.min && (deviceTypeConfig.max ? (windowWidth <= deviceTypeConfig.max) : true)) {
                        deviceType = prop;
                    }
                }
            }
        }

        return deviceType;
    }

}
