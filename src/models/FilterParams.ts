/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.16.0
 * Contact: contact@emergentmethods.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface FilterParams
 */
export interface FilterParams {
}

/**
 * Check if a given object implements the FilterParams interface.
 */
export function instanceOfFilterParams(value: object): boolean {
    return true;
}

export function FilterParamsFromJSON(json: any): FilterParams {
    return FilterParamsFromJSONTyped(json, false);
}

export function FilterParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): FilterParams {
    return json;
}

export function FilterParamsToJSON(value?: FilterParams | null): any {
    return value;
}

