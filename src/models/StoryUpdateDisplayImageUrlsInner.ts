/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.19.6
 * Contact: contact@emergentmethods.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { DisplayImageUrl } from './DisplayImageUrl';
import {
    DisplayImageUrlFromJSON,
    DisplayImageUrlFromJSONTyped,
    DisplayImageUrlToJSON,
    DisplayImageUrlToJSONTyped,
} from './DisplayImageUrl';

/**
 * 
 * @export
 * @interface StoryUpdateDisplayImageUrlsInner
 */
export interface StoryUpdateDisplayImageUrlsInner {
    /**
     * 
     * @type {string}
     * @memberof StoryUpdateDisplayImageUrlsInner
     */
    sourceId: string;
    /**
     * 
     * @type {string}
     * @memberof StoryUpdateDisplayImageUrlsInner
     */
    imageUrl: string;
}

/**
 * Check if a given object implements the StoryUpdateDisplayImageUrlsInner interface.
 */
export function instanceOfStoryUpdateDisplayImageUrlsInner(value: object): value is StoryUpdateDisplayImageUrlsInner {
    if (!('sourceId' in value) || value['sourceId'] === undefined) return false;
    if (!('imageUrl' in value) || value['imageUrl'] === undefined) return false;
    return true;
}

export function StoryUpdateDisplayImageUrlsInnerFromJSON(json: any): StoryUpdateDisplayImageUrlsInner {
    return StoryUpdateDisplayImageUrlsInnerFromJSONTyped(json, false);
}

export function StoryUpdateDisplayImageUrlsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): StoryUpdateDisplayImageUrlsInner {
    if (json == null) {
        return json;
    }
    return {
        
        'sourceId': json['source_id'],
        'imageUrl': json['image_url'],
    };
}

export function StoryUpdateDisplayImageUrlsInnerToJSON(json: any): StoryUpdateDisplayImageUrlsInner {
    return StoryUpdateDisplayImageUrlsInnerToJSONTyped(json, false);
}

export function StoryUpdateDisplayImageUrlsInnerToJSONTyped(value?: StoryUpdateDisplayImageUrlsInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'source_id': value['sourceId'],
        'image_url': value['imageUrl'],
    };
}

