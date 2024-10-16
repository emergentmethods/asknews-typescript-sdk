/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.13.4
 * Contact: contact@emergentmethods.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { FinanceResponseTimeSeries } from './FinanceResponseTimeSeries';
import {
    FinanceResponseTimeSeriesFromJSON,
    FinanceResponseTimeSeriesFromJSONTyped,
    FinanceResponseTimeSeriesToJSON,
} from './FinanceResponseTimeSeries';

/**
 * 
 * @export
 * @interface FinanceResponse
 */
export interface FinanceResponse {
    /**
     * 
     * @type {FinanceResponseTimeSeries}
     * @memberof FinanceResponse
     */
    data: FinanceResponseTimeSeries;
}

/**
 * Check if a given object implements the FinanceResponse interface.
 */
export function instanceOfFinanceResponse(value: object): boolean {
    if (!('data' in value)) return false;
    return true;
}

export function FinanceResponseFromJSON(json: any): FinanceResponse {
    return FinanceResponseFromJSONTyped(json, false);
}

export function FinanceResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): FinanceResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': FinanceResponseTimeSeriesFromJSON(json['data']),
    };
}

export function FinanceResponseToJSON(value?: FinanceResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'data': FinanceResponseTimeSeriesToJSON(value['data']),
    };
}

