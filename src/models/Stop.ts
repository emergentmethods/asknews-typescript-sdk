/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.12.1
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
 * @interface Stop
 */
export interface Stop {
}

/**
 * Check if a given object implements the Stop interface.
 */
export function instanceOfStop(value: object): boolean {
    return true;
}

export function StopFromJSON(json: any): Stop {
    return StopFromJSONTyped(json, false);
}

export function StopFromJSONTyped(json: any, ignoreDiscriminator: boolean): Stop {
    return json;
}

export function StopToJSON(value?: Stop | null): any {
    return value;
}

