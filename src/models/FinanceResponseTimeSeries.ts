/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.8.2
 * Contact: contact@emergentmethods.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { FinanceResponseTimeSeriesData } from './FinanceResponseTimeSeriesData';
import {
    FinanceResponseTimeSeriesDataFromJSON,
    FinanceResponseTimeSeriesDataFromJSONTyped,
    FinanceResponseTimeSeriesDataToJSON,
} from './FinanceResponseTimeSeriesData';

/**
 * 
 * @export
 * @interface FinanceResponseTimeSeries
 */
export interface FinanceResponseTimeSeries {
    /**
     * 
     * @type {Array<FinanceResponseTimeSeriesData>}
     * @memberof FinanceResponseTimeSeries
     */
    timeseries: Array<FinanceResponseTimeSeriesData>;
}

/**
 * Check if a given object implements the FinanceResponseTimeSeries interface.
 */
export function instanceOfFinanceResponseTimeSeries(value: object): boolean {
    if (!('timeseries' in value)) return false;
    return true;
}

export function FinanceResponseTimeSeriesFromJSON(json: any): FinanceResponseTimeSeries {
    return FinanceResponseTimeSeriesFromJSONTyped(json, false);
}

export function FinanceResponseTimeSeriesFromJSONTyped(json: any, ignoreDiscriminator: boolean): FinanceResponseTimeSeries {
    if (json == null) {
        return json;
    }
    return {
        
        'timeseries': ((json['timeseries'] as Array<any>).map(FinanceResponseTimeSeriesDataFromJSON)),
    };
}

export function FinanceResponseTimeSeriesToJSON(value?: FinanceResponseTimeSeries | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'timeseries': ((value['timeseries'] as Array<any>).map(FinanceResponseTimeSeriesDataToJSON)),
    };
}

