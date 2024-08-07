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
 * Query to be used for the search. If method='nl', then this will beused as a natural language query. If method='kw', then this willbe used as a direct keyword query.
 * @export
 * @interface Query
 */
export interface Query {
}

/**
 * Check if a given object implements the Query interface.
 */
export function instanceOfQuery(value: object): boolean {
    return true;
}

export function QueryFromJSON(json: any): Query {
    return QueryFromJSONTyped(json, false);
}

export function QueryFromJSONTyped(json: any, ignoreDiscriminator: boolean): Query {
    return json;
}

export function QueryToJSON(value?: Query | null): any {
    return value;
}
