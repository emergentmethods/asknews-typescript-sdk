/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.18.2
 * Contact: contact@emergentmethods.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { CreateDeepNewsResponseStreamSourcesNewsSource } from './CreateDeepNewsResponseStreamSourcesNewsSource';
import {
    CreateDeepNewsResponseStreamSourcesNewsSourceFromJSON,
    CreateDeepNewsResponseStreamSourcesNewsSourceFromJSONTyped,
    CreateDeepNewsResponseStreamSourcesNewsSourceToJSON,
} from './CreateDeepNewsResponseStreamSourcesNewsSource';
import type { CreateDeepNewsResponseStreamSourcesWebSource } from './CreateDeepNewsResponseStreamSourcesWebSource';
import {
    CreateDeepNewsResponseStreamSourcesWebSourceFromJSON,
    CreateDeepNewsResponseStreamSourcesWebSourceFromJSONTyped,
    CreateDeepNewsResponseStreamSourcesWebSourceToJSON,
} from './CreateDeepNewsResponseStreamSourcesWebSource';
import type { WebSearchResult } from './WebSearchResult';
import {
    WebSearchResultFromJSON,
    WebSearchResultFromJSONTyped,
    WebSearchResultToJSON,
} from './WebSearchResult';

/**
 * 
 * @export
 * @interface Source
 */
export interface Source {
    /**
     * 
     * @type {string}
     * @memberof Source
     */
    kind?: SourceKindEnum;
    /**
     * 
     * @type {WebSearchResult}
     * @memberof Source
     */
    data: WebSearchResult;
}


/**
 * @export
 */
export const SourceKindEnum = {
    Web: 'web'
} as const;
export type SourceKindEnum = typeof SourceKindEnum[keyof typeof SourceKindEnum];


/**
 * Check if a given object implements the Source interface.
 */
export function instanceOfSource(value: object): boolean {
    if (!('data' in value)) return false;
    return true;
}

export function SourceFromJSON(json: any): Source {
    return SourceFromJSONTyped(json, false);
}

export function SourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): Source {
    if (json == null) {
        return json;
    }
    return {
        
        'kind': json['kind'] == null ? undefined : json['kind'],
        'data': WebSearchResultFromJSON(json['data']),
    };
}

export function SourceToJSON(value?: Source | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'kind': value['kind'],
        'data': WebSearchResultToJSON(value['data']),
    };
}

