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
 * If defined, the search will only occur on articles that contain strings in this list.
 * @export
 * @interface StringGuarantee
 */
export interface StringGuarantee {
}

/**
 * Check if a given object implements the StringGuarantee interface.
 */
export function instanceOfStringGuarantee(value: object): boolean {
    return true;
}

export function StringGuaranteeFromJSON(json: any): StringGuarantee {
    return StringGuaranteeFromJSONTyped(json, false);
}

export function StringGuaranteeFromJSONTyped(json: any, ignoreDiscriminator: boolean): StringGuarantee {
    return json;
}

export function StringGuaranteeToJSON(value?: StringGuarantee | null): any {
    return value;
}

