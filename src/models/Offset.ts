/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.9.5
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
 * @interface Offset
 */
export interface Offset {
}

/**
 * Check if a given object implements the Offset interface.
 */
export function instanceOfOffset(value: object): boolean {
    return true;
}

export function OffsetFromJSON(json: any): Offset {
    return OffsetFromJSONTyped(json, false);
}

export function OffsetFromJSONTyped(json: any, ignoreDiscriminator: boolean): Offset {
    return json;
}

export function OffsetToJSON(value?: Offset | null): any {
    return value;
}

