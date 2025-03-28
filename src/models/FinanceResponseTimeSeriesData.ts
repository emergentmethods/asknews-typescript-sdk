/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.18.6
 * Contact: contact@emergentmethods.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { Value } from './Value';
import {
    ValueFromJSON,
    ValueFromJSONTyped,
    ValueToJSON,
} from './Value';

/**
 * 
 * @export
 * @interface FinanceResponseTimeSeriesData
 */
export interface FinanceResponseTimeSeriesData {
    /**
     * 
     * @type {Date}
     * @memberof FinanceResponseTimeSeriesData
     */
    datetime: Date;
    /**
     * 
     * @type {Value}
     * @memberof FinanceResponseTimeSeriesData
     */
    value: Value;
}

/**
 * Check if a given object implements the FinanceResponseTimeSeriesData interface.
 */
export function instanceOfFinanceResponseTimeSeriesData(value: object): boolean {
    if (!('datetime' in value)) return false;
    if (!('value' in value)) return false;
    return true;
}

export function FinanceResponseTimeSeriesDataFromJSON(json: any): FinanceResponseTimeSeriesData {
    return FinanceResponseTimeSeriesDataFromJSONTyped(json, false);
}

export function FinanceResponseTimeSeriesDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): FinanceResponseTimeSeriesData {
    if (json == null) {
        return json;
    }
    return {
        
        'datetime': (new Date(json['datetime'])),
        'value': ValueFromJSON(json['value']),
    };
}

export function FinanceResponseTimeSeriesDataToJSON(value?: FinanceResponseTimeSeriesData | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'datetime': ((value['datetime']).toISOString()),
        'value': ValueToJSON(value['value']),
    };
}

