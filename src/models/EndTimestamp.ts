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
 * Timestamp to end search at
 * @export
 * @interface EndTimestamp
 */
export interface EndTimestamp {
}

/**
 * Check if a given object implements the EndTimestamp interface.
 */
export function instanceOfEndTimestamp(value: object): boolean {
    return true;
}

export function EndTimestampFromJSON(json: any): EndTimestamp {
    return EndTimestampFromJSONTyped(json, false);
}

export function EndTimestampFromJSONTyped(json: any, ignoreDiscriminator: boolean): EndTimestamp {
    return json;
}

export function EndTimestampToJSON(value?: EndTimestamp | null): any {
    return value;
}

