/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.14.8
 * Contact: contact@emergentmethods.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * Offset for pagination. The n_articles is your page size, while your offset is the number of articles to skip to get to your page of interest. For example, if you want to get page 3 for n_article page size of 10, you would set offset to 20.
 * @export
 * @interface Offset
 */
export interface Offset {
}

/**
 * Check if a given object implements the Offset interface.
 */
export function instanceOfOffset(value: object): boolean {
    return true;
}

export function OffsetFromJSON(json: any): Offset {
    return OffsetFromJSONTyped(json, false);
}

export function OffsetFromJSONTyped(json: any, ignoreDiscriminator: boolean): Offset {
    return json;
}

export function OffsetToJSON(value?: Offset | null): any {
    return value;
}

