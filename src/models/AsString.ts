/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.9.1
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
 * @interface AsString
 */
export interface AsString {
}

/**
 * Check if a given object implements the AsString interface.
 */
export function instanceOfAsString(value: object): boolean {
    return true;
}

export function AsStringFromJSON(json: any): AsString {
    return AsStringFromJSONTyped(json, false);
}

export function AsStringFromJSONTyped(json: any, ignoreDiscriminator: boolean): AsString {
    return json;
}

export function AsStringToJSON(value?: AsString | null): any {
    return value;
}

