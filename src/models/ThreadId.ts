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
/**
 * 
 * @export
 * @interface ThreadId
 */
export interface ThreadId {
}

/**
 * Check if a given object implements the ThreadId interface.
 */
export function instanceOfThreadId(value: object): boolean {
    return true;
}

export function ThreadIdFromJSON(json: any): ThreadId {
    return ThreadIdFromJSONTyped(json, false);
}

export function ThreadIdFromJSONTyped(json: any, ignoreDiscriminator: boolean): ThreadId {
    return json;
}

export function ThreadIdToJSON(value?: ThreadId | null): any {
    return value;
}

