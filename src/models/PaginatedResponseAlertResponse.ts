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
import type { AlertResponse } from './AlertResponse';
import {
    AlertResponseFromJSON,
    AlertResponseFromJSONTyped,
    AlertResponseToJSON,
} from './AlertResponse';

/**
 * 
 * @export
 * @interface PaginatedResponseAlertResponse
 */
export interface PaginatedResponseAlertResponse {
    /**
     * 
     * @type {Array<AlertResponse>}
     * @memberof PaginatedResponseAlertResponse
     */
    items: Array<AlertResponse>;
    /**
     * 
     * @type {number}
     * @memberof PaginatedResponseAlertResponse
     */
    count: number;
    /**
     * 
     * @type {number}
     * @memberof PaginatedResponseAlertResponse
     */
    nextPage: number | null;
    /**
     * 
     * @type {number}
     * @memberof PaginatedResponseAlertResponse
     */
    previousPage: number | null;
}

/**
 * Check if a given object implements the PaginatedResponseAlertResponse interface.
 */
export function instanceOfPaginatedResponseAlertResponse(value: object): boolean {
    if (!('items' in value)) return false;
    if (!('count' in value)) return false;
    if (!('nextPage' in value)) return false;
    if (!('previousPage' in value)) return false;
    return true;
}

export function PaginatedResponseAlertResponseFromJSON(json: any): PaginatedResponseAlertResponse {
    return PaginatedResponseAlertResponseFromJSONTyped(json, false);
}

export function PaginatedResponseAlertResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginatedResponseAlertResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'items': ((json['items'] as Array<any>).map(AlertResponseFromJSON)),
        'count': json['count'],
        'nextPage': json['next_page'],
        'previousPage': json['previous_page'],
    };
}

export function PaginatedResponseAlertResponseToJSON(value?: PaginatedResponseAlertResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'items': ((value['items'] as Array<any>).map(AlertResponseToJSON)),
        'count': value['count'],
        'next_page': value['nextPage'],
        'previous_page': value['previousPage'],
    };
}

