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
 * @interface FinishReason
 */
export interface FinishReason {
}

/**
 * Check if a given object implements the FinishReason interface.
 */
export function instanceOfFinishReason(value: object): boolean {
    return true;
}

export function FinishReasonFromJSON(json: any): FinishReason {
    return FinishReasonFromJSONTyped(json, false);
}

export function FinishReasonFromJSONTyped(json: any, ignoreDiscriminator: boolean): FinishReason {
    return json;
}

export function FinishReasonToJSON(value?: FinishReason | null): any {
    return value;
}

