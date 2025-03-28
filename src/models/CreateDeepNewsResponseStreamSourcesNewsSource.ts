/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.18.6
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
 * @interface CreateDeepNewsResponseStreamSourcesNewsSource
 */
export interface CreateDeepNewsResponseStreamSourcesNewsSource {
    /**
     * 
     * @type {string}
     * @memberof CreateDeepNewsResponseStreamSourcesNewsSource
     */
    kind?: CreateDeepNewsResponseStreamSourcesNewsSourceKindEnum;
    /**
     * 
     * @type {SearchResponseDictItem}
     * @memberof CreateDeepNewsResponseStreamSourcesNewsSource
     */
    data: SearchResponseDictItem;
}


/**
 * @export
 */
export const CreateDeepNewsResponseStreamSourcesNewsSourceKindEnum = {
    News: 'news'
} as const;
export type CreateDeepNewsResponseStreamSourcesNewsSourceKindEnum = typeof CreateDeepNewsResponseStreamSourcesNewsSourceKindEnum[keyof typeof CreateDeepNewsResponseStreamSourcesNewsSourceKindEnum];


/**
 * Check if a given object implements the CreateDeepNewsResponseStreamSourcesNewsSource interface.
 */
export function instanceOfCreateDeepNewsResponseStreamSourcesNewsSource(value: object): boolean {
    if (!('data' in value)) return false;
    return true;
}

export function CreateDeepNewsResponseStreamSourcesNewsSourceFromJSON(json: any): CreateDeepNewsResponseStreamSourcesNewsSource {
    return CreateDeepNewsResponseStreamSourcesNewsSourceFromJSONTyped(json, false);
}

export function CreateDeepNewsResponseStreamSourcesNewsSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateDeepNewsResponseStreamSourcesNewsSource {
    if (json == null) {
        return json;
    }
    return {
        
        'kind': json['kind'] == null ? undefined : json['kind'],
        'data': SearchResponseDictItemFromJSON(json['data']),
    };
}

export function CreateDeepNewsResponseStreamSourcesNewsSourceToJSON(value?: CreateDeepNewsResponseStreamSourcesNewsSource | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'kind': value['kind'],
        'data': SearchResponseDictItemToJSON(value['data']),
    };
}

