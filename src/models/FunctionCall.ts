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
 * @interface FunctionCall
 */
export interface FunctionCall {
}

/**
 * Check if a given object implements the FunctionCall interface.
 */
export function instanceOfFunctionCall(value: object): boolean {
    return true;
}

export function FunctionCallFromJSON(json: any): FunctionCall {
    return FunctionCallFromJSONTyped(json, false);
}

export function FunctionCallFromJSONTyped(json: any, ignoreDiscriminator: boolean): FunctionCall {
    return json;
}

export function FunctionCallToJSON(value?: FunctionCall | null): any {
    return value;
}

