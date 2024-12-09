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
import type { SearchResponseDictItem } from './SearchResponseDictItem';
import {
    SearchResponseDictItemFromJSON,
    SearchResponseDictItemFromJSONTyped,
    SearchResponseDictItemToJSON,
} from './SearchResponseDictItem';

/**
 * 
 * @export
 * @interface GraphResponse
 */
export interface GraphResponse {
    /**
     * 
     * @type {object}
     * @memberof GraphResponse
     */
    fullGraph: object;
    /**
     * 
     * @type {Array<object>}
     * @memberof GraphResponse
     */
    disambiguations: Array<object>;
    /**
     * 
     * @type {Array<SearchResponseDictItem>}
     * @memberof GraphResponse
     */
    articles?: Array<SearchResponseDictItem>;
    /**
     * 
     * @type {string}
     * @memberof GraphResponse
     */
    query?: string;
    /**
     * 
     * @type {Array<object>}
     * @memberof GraphResponse
     */
    docsEnhanced?: Array<object>;
    /**
     * 
     * @type {string}
     * @memberof GraphResponse
     */
    triplesUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof GraphResponse
     */
    visualizeUrl?: string;
}

/**
 * Check if a given object implements the GraphResponse interface.
 */
export function instanceOfGraphResponse(value: object): boolean {
    if (!('fullGraph' in value)) return false;
    if (!('disambiguations' in value)) return false;
    return true;
}

export function GraphResponseFromJSON(json: any): GraphResponse {
    return GraphResponseFromJSONTyped(json, false);
}

export function GraphResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GraphResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'fullGraph': json['full_graph'],
        'disambiguations': json['disambiguations'],
        'articles': json['articles'] == null ? undefined : ((json['articles'] as Array<any>).map(SearchResponseDictItemFromJSON)),
        'query': json['query'] == null ? undefined : json['query'],
        'docsEnhanced': json['docs_enhanced'] == null ? undefined : json['docs_enhanced'],
        'triplesUrl': json['triples_url'] == null ? undefined : json['triples_url'],
        'visualizeUrl': json['visualize_url'] == null ? undefined : json['visualize_url'],
    };
}

export function GraphResponseToJSON(value?: GraphResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'full_graph': value['fullGraph'],
        'disambiguations': value['disambiguations'],
        'articles': value['articles'] == null ? undefined : ((value['articles'] as Array<any>).map(SearchResponseDictItemToJSON)),
        'query': value['query'],
        'docs_enhanced': value['docsEnhanced'],
        'triples_url': value['triplesUrl'],
        'visualize_url': value['visualizeUrl'],
    };
}

