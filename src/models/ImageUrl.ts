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
 * @interface ImageUrl
 */
export interface ImageUrl {
}

/**
 * Check if a given object implements the ImageUrl interface.
 */
export function instanceOfImageUrl(value: object): boolean {
    return true;
}

export function ImageUrlFromJSON(json: any): ImageUrl {
    return ImageUrlFromJSONTyped(json, false);
}

export function ImageUrlFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImageUrl {
    return json;
}

export function ImageUrlToJSON(value?: ImageUrl | null): any {
    return value;
}
