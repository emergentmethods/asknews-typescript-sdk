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
 * @interface Name
 */
export interface Name {
}

/**
 * Check if a given object implements the Name interface.
 */
export function instanceOfName(value: object): boolean {
    return true;
}

export function NameFromJSON(json: any): Name {
    return NameFromJSONTyped(json, false);
}

export function NameFromJSONTyped(json: any, ignoreDiscriminator: boolean): Name {
    return json;
}

export function NameToJSON(value?: Name | null): any {
    return value;
}

