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
 * Maximum allowed page rank for returned articles.
 * @export
 * @interface PageRank
 */
export interface PageRank {
}

/**
 * Check if a given object implements the PageRank interface.
 */
export function instanceOfPageRank(value: object): boolean {
    return true;
}

export function PageRankFromJSON(json: any): PageRank {
    return PageRankFromJSONTyped(json, false);
}

export function PageRankFromJSONTyped(json: any, ignoreDiscriminator: boolean): PageRank {
    return json;
}

export function PageRankToJSON(value?: PageRank | null): any {
    return value;
}
