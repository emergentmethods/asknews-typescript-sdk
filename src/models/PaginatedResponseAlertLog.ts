/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.18.2
 * Contact: contact@emergentmethods.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { AlertLog } from './AlertLog';
import {
    AlertLogFromJSON,
    AlertLogFromJSONTyped,
    AlertLogToJSON,
} from './AlertLog';

/**
 * 
 * @export
 * @interface PaginatedResponseAlertLog
 */
export interface PaginatedResponseAlertLog {
    /**
     * 
     * @type {Array<AlertLog>}
     * @memberof PaginatedResponseAlertLog
     */
    items: Array<AlertLog>;
    /**
     * 
     * @type {number}
     * @memberof PaginatedResponseAlertLog
     */
    count: number;
    /**
     * 
     * @type {number}
     * @memberof PaginatedResponseAlertLog
     */
    nextPage: number | null;
    /**
     * 
     * @type {number}
     * @memberof PaginatedResponseAlertLog
     */
    previousPage: number | null;
}

/**
 * Check if a given object implements the PaginatedResponseAlertLog interface.
 */
export function instanceOfPaginatedResponseAlertLog(value: object): boolean {
    if (!('items' in value)) return false;
    if (!('count' in value)) return false;
    if (!('nextPage' in value)) return false;
    if (!('previousPage' in value)) return false;
    return true;
}

export function PaginatedResponseAlertLogFromJSON(json: any): PaginatedResponseAlertLog {
    return PaginatedResponseAlertLogFromJSONTyped(json, false);
}

export function PaginatedResponseAlertLogFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginatedResponseAlertLog {
    if (json == null) {
        return json;
    }
    return {
        
        'items': ((json['items'] as Array<any>).map(AlertLogFromJSON)),
        'count': json['count'],
        'nextPage': json['next_page'],
        'previousPage': json['previous_page'],
    };
}

export function PaginatedResponseAlertLogToJSON(value?: PaginatedResponseAlertLog | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'items': ((value['items'] as Array<any>).map(AlertLogToJSON)),
        'count': value['count'],
        'next_page': value['nextPage'],
        'previous_page': value['previousPage'],
    };
}

