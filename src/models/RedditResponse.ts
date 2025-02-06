/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.17.3
 * Contact: contact@emergentmethods.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { RedditThread } from './RedditThread';
import {
    RedditThreadFromJSON,
    RedditThreadFromJSONTyped,
    RedditThreadToJSON,
} from './RedditThread';

/**
 * 
 * @export
 * @interface RedditResponse
 */
export interface RedditResponse {
    /**
     * 
     * @type {Array<RedditThread>}
     * @memberof RedditResponse
     */
    asDicts?: Array<RedditThread>;
    /**
     * 
     * @type {string}
     * @memberof RedditResponse
     */
    asString?: string;
}

/**
 * Check if a given object implements the RedditResponse interface.
 */
export function instanceOfRedditResponse(value: object): boolean {
    return true;
}

export function RedditResponseFromJSON(json: any): RedditResponse {
    return RedditResponseFromJSONTyped(json, false);
}

export function RedditResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RedditResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'asDicts': json['as_dicts'] == null ? undefined : ((json['as_dicts'] as Array<any>).map(RedditThreadFromJSON)),
        'asString': json['as_string'] == null ? undefined : json['as_string'],
    };
}

export function RedditResponseToJSON(value?: RedditResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'as_dicts': value['asDicts'] == null ? undefined : ((value['asDicts'] as Array<any>).map(RedditThreadToJSON)),
        'as_string': value['asString'],
    };
}

