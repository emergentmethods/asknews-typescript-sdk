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
 * The start date in ISO format
 * @export
 * @interface DateFrom
 */
export interface DateFrom {
}

/**
 * Check if a given object implements the DateFrom interface.
 */
export function instanceOfDateFrom(value: object): boolean {
    return true;
}

export function DateFromFromJSON(json: any): DateFrom {
    return DateFromFromJSONTyped(json, false);
}

export function DateFromFromJSONTyped(json: any, ignoreDiscriminator: boolean): DateFrom {
    return json;
}

export function DateFromToJSON(value?: DateFrom | null): any {
    return value;
}

