/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.15.10
 * Contact: contact@emergentmethods.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { Offset2 } from './Offset2';
import {
    Offset2FromJSON,
    Offset2FromJSONTyped,
    Offset2ToJSON,
} from './Offset2';
import type { SearchResponseDictItem } from './SearchResponseDictItem';
import {
    SearchResponseDictItemFromJSON,
    SearchResponseDictItemFromJSONTyped,
    SearchResponseDictItemToJSON,
} from './SearchResponseDictItem';

/**
 * 
 * @export
 * @interface SearchResponse
 */
export interface SearchResponse {
    /**
     * 
     * @type {Array<SearchResponseDictItem>}
     * @memberof SearchResponse
     */
    asDicts?: Array<SearchResponseDictItem>;
    /**
     * 
     * @type {string}
     * @memberof SearchResponse
     */
    asString?: string;
    /**
     * 
     * @type {Offset2}
     * @memberof SearchResponse
     */
    offset?: Offset2;
}

/**
 * Check if a given object implements the SearchResponse interface.
 */
export function instanceOfSearchResponse(value: object): boolean {
    return true;
}

export function SearchResponseFromJSON(json: any): SearchResponse {
    return SearchResponseFromJSONTyped(json, false);
}

export function SearchResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'asDicts': json['as_dicts'] == null ? undefined : ((json['as_dicts'] as Array<any>).map(SearchResponseDictItemFromJSON)),
        'asString': json['as_string'] == null ? undefined : json['as_string'],
        'offset': json['offset'] == null ? undefined : Offset2FromJSON(json['offset']),
    };
}

export function SearchResponseToJSON(value?: SearchResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'as_dicts': value['asDicts'] == null ? undefined : ((value['asDicts'] as Array<any>).map(SearchResponseDictItemToJSON)),
        'as_string': value['asString'],
        'offset': Offset2ToJSON(value['offset']),
    };
}

