/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.10.0
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
 * @interface DisplayImageUrl
 */
export interface DisplayImageUrl {
    /**
     * 
     * @type {string}
     * @memberof DisplayImageUrl
     */
    sourceId: string;
    /**
     * 
     * @type {string}
     * @memberof DisplayImageUrl
     */
    imageUrl: string;
}

/**
 * Check if a given object implements the DisplayImageUrl interface.
 */
export function instanceOfDisplayImageUrl(value: object): boolean {
    if (!('sourceId' in value)) return false;
    if (!('imageUrl' in value)) return false;
    return true;
}

export function DisplayImageUrlFromJSON(json: any): DisplayImageUrl {
    return DisplayImageUrlFromJSONTyped(json, false);
}

export function DisplayImageUrlFromJSONTyped(json: any, ignoreDiscriminator: boolean): DisplayImageUrl {
    if (json == null) {
        return json;
    }
    return {
        
        'sourceId': json['source_id'],
        'imageUrl': json['image_url'],
    };
}

export function DisplayImageUrlToJSON(value?: DisplayImageUrl | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'source_id': value['sourceId'],
        'image_url': value['imageUrl'],
    };
}

