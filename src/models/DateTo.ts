/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.8.6
 * Contact: contact@emergentmethods.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * The end date in ISO format
 * @export
 * @interface DateTo
 */
export interface DateTo {
}

/**
 * Check if a given object implements the DateTo interface.
 */
export function instanceOfDateTo(value: object): boolean {
    return true;
}

export function DateToFromJSON(json: any): DateTo {
    return DateToFromJSONTyped(json, false);
}

export function DateToFromJSONTyped(json: any, ignoreDiscriminator: boolean): DateTo {
    return json;
}

export function DateToToJSON(value?: DateTo | null): any {
    return value;
}

