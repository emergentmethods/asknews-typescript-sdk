/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.9.3
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
 * @interface Choice
 */
export interface Choice {
}

/**
 * Check if a given object implements the Choice interface.
 */
export function instanceOfChoice(value: object): boolean {
    return true;
}

export function ChoiceFromJSON(json: any): Choice {
    return ChoiceFromJSONTyped(json, false);
}

export function ChoiceFromJSONTyped(json: any, ignoreDiscriminator: boolean): Choice {
    return json;
}

export function ChoiceToJSON(value?: Choice | null): any {
    return value;
}
