import { Pipe, PipeTransform } from '@angular/core';
import { _ } from 'underscore';
import * as moment from 'moment';

@Pipe({
    name: 'modelsFilter'
})
export class ModelsFilterPipe implements PipeTransform {

    transform(value: any[], args?: any): any {
        let transformedValue = [];

        if (!value || !Array.isArray(value)) {
            return transformedValue;
        }

        if (args) {
            transformedValue = _.filter(value, args);
            if (args && args.launchDaysAgo) {
                transformedValue = value.filter((item) => {
                    return (item.launchStatus === 'LAUNCHED' && item.launchDate &&
                        (moment(item.launchDate) > moment().add((-1 * args.launchDaysAgo), 'days')));
                });
            }
        } else {
            transformedValue = value;
        }

        return transformedValue;
    }

}
