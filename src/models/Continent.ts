/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.18.6
 * Contact: contact@emergentmethods.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * Continents to filter by.
 * @export
 * @interface Continent
 */
export interface Continent {
}

/**
 * Check if a given object implements the Continent interface.
 */
export function instanceOfContinent(value: object): boolean {
    return true;
}

export function ContinentFromJSON(json: any): Continent {
    return ContinentFromJSONTyped(json, false);
}

export function ContinentFromJSONTyped(json: any, ignoreDiscriminator: boolean): Continent {
    return json;
}

export function ContinentToJSON(value?: Continent | null): any {
    return value;
}

