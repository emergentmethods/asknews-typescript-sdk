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
import type { WebSearchResult } from './WebSearchResult';
import {
    WebSearchResultFromJSON,
    WebSearchResultFromJSONTyped,
    WebSearchResultToJSON,
    WebSearchResultToJSONTyped,
} from './WebSearchResult';

/**
 * 
 * @export
 * @interface WebSearchResponse
 */
export interface WebSearchResponse {
    /**
     * 
     * @type {string}
     * @memberof WebSearchResponse
     */
    asString: string;
    /**
     * 
     * @type {Array<WebSearchResult>}
     * @memberof WebSearchResponse
     */
    asDicts: Array<WebSearchResult>;
}

/**
 * Check if a given object implements the WebSearchResponse interface.
 */
export function instanceOfWebSearchResponse(value: object): value is WebSearchResponse {
    if (!('asString' in value) || value['asString'] === undefined) return false;
    if (!('asDicts' in value) || value['asDicts'] === undefined) return false;
    return true;
}

export function WebSearchResponseFromJSON(json: any): WebSearchResponse {
    return WebSearchResponseFromJSONTyped(json, false);
}

export function WebSearchResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebSearchResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'asString': json['as_string'],
        'asDicts': ((json['as_dicts'] as Array<any>).map(WebSearchResultFromJSON)),
    };
}

export function WebSearchResponseToJSON(json: any): WebSearchResponse {
    return WebSearchResponseToJSONTyped(json, false);
}

export function WebSearchResponseToJSONTyped(value?: WebSearchResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'as_string': value['asString'],
        'as_dicts': ((value['asDicts'] as Array<any>).map(WebSearchResultToJSON)),
    };
}

