/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.19.6
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
 * @interface ThreadId1
 */
export interface ThreadId1 {
}

/**
 * Check if a given object implements the ThreadId1 interface.
 */
export function instanceOfThreadId1(value: object): value is ThreadId1 {
    return true;
}

export function ThreadId1FromJSON(json: any): ThreadId1 {
    return ThreadId1FromJSONTyped(json, false);
}

export function ThreadId1FromJSONTyped(json: any, ignoreDiscriminator: boolean): ThreadId1 {
    return json;
}

export function ThreadId1ToJSON(json: any): ThreadId1 {
    return ThreadId1ToJSONTyped(json, false);
}

export function ThreadId1ToJSONTyped(value?: ThreadId1 | null, ignoreDiscriminator: boolean = false): any {
    return value;
}

