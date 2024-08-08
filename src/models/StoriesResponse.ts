/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.9.5
 * Contact: contact@emergentmethods.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { Offset } from './Offset';
import {
    OffsetFromJSON,
    OffsetFromJSONTyped,
    OffsetToJSON,
} from './Offset';
import type { StoryResponse } from './StoryResponse';
import {
    StoryResponseFromJSON,
    StoryResponseFromJSONTyped,
    StoryResponseToJSON,
} from './StoryResponse';

/**
 * 
 * @export
 * @interface StoriesResponse
 */
export interface StoriesResponse {
    /**
     * 
     * @type {Array<StoryResponse>}
     * @memberof StoriesResponse
     */
    stories: Array<StoryResponse>;
    /**
     * 
     * @type {Offset}
     * @memberof StoriesResponse
     */
    offset: Offset;
}

/**
 * Check if a given object implements the StoriesResponse interface.
 */
export function instanceOfStoriesResponse(value: object): boolean {
    if (!('stories' in value)) return false;
    if (!('offset' in value)) return false;
    return true;
}

export function StoriesResponseFromJSON(json: any): StoriesResponse {
    return StoriesResponseFromJSONTyped(json, false);
}

export function StoriesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): StoriesResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'stories': ((json['stories'] as Array<any>).map(StoryResponseFromJSON)),
        'offset': OffsetFromJSON(json['offset']),
    };
}

export function StoriesResponseToJSON(value?: StoriesResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'stories': ((value['stories'] as Array<any>).map(StoryResponseToJSON)),
        'offset': OffsetToJSON(value['offset']),
    };
}

