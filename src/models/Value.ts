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
/**
 * 
 * @export
 * @interface Value
 */
export interface Value {
}

/**
 * Check if a given object implements the Value interface.
 */
export function instanceOfValue(value: object): boolean {
    return true;
}

export function ValueFromJSON(json: any): Value {
    return ValueFromJSONTyped(json, false);
}

export function ValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): Value {
    return json;
}

export function ValueToJSON(value?: Value | null): any {
    return value;
}

