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
}

/**
 * Check if a given object implements the WebSearchResult interface.
 */
export function instanceOfWebSearchResult(value: object): boolean {
    if (!('title' in value)) return false;
    if (!('url' in value)) return false;
    if (!('source' in value)) return false;
    if (!('published' in value)) return false;
    if (!('keyPoints' in value)) return false;
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
    };
}

export function WebSearchResultToJSON(value?: WebSearchResult | null): any {
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
    };
}

