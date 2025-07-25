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
/**
 * 
 * @export
 * @interface WebSearchResult
 */
export interface WebSearchResult {
    /**
     * 
     * @type {string}
     * @memberof WebSearchResult
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof WebSearchResult
     */
    url: string;
    /**
     * 
     * @type {string}
     * @memberof WebSearchResult
     */
    source: string;
    /**
     * 
     * @type {string}
     * @memberof WebSearchResult
     */
    published: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof WebSearchResult
     */
    keyPoints: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof WebSearchResult
     */
    rawText?: string;
    /**
     * 
     * @type {string}
     * @memberof WebSearchResult
     */
    asStringKey?: string | null;
}

/**
 * Check if a given object implements the WebSearchResult interface.
 */
export function instanceOfWebSearchResult(value: object): value is WebSearchResult {
    if (!('title' in value) || value['title'] === undefined) return false;
    if (!('url' in value) || value['url'] === undefined) return false;
    if (!('source' in value) || value['source'] === undefined) return false;
    if (!('published' in value) || value['published'] === undefined) return false;
    if (!('keyPoints' in value) || value['keyPoints'] === undefined) return false;
    return true;
}

export function WebSearchResultFromJSON(json: any): WebSearchResult {
    return WebSearchResultFromJSONTyped(json, false);
}

export function WebSearchResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebSearchResult {
    if (json == null) {
        return json;
    }
    return {
        
        'title': json['title'],
        'url': json['url'],
        'source': json['source'],
        'published': json['published'],
        'keyPoints': json['key_points'],
        'rawText': json['raw_text'] == null ? undefined : json['raw_text'],
        'asStringKey': json['as_string_key'] == null ? undefined : json['as_string_key'],
    };
}

export function WebSearchResultToJSON(json: any): WebSearchResult {
    return WebSearchResultToJSONTyped(json, false);
}

export function WebSearchResultToJSONTyped(value?: WebSearchResult | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'title': value['title'],
        'url': value['url'],
        'source': value['source'],
        'published': value['published'],
        'key_points': value['keyPoints'],
        'raw_text': value['rawText'],
        'as_string_key': value['asStringKey'],
    };
}

