/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.10.0
 * Contact: contact@emergentmethods.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { ModelItem } from './ModelItem';
import {
    ModelItemFromJSON,
    ModelItemFromJSONTyped,
    ModelItemToJSON,
} from './ModelItem';

/**
 * 
 * @export
 * @interface ListModelResponse
 */
export interface ListModelResponse {
    /**
     * 
     * @type {string}
     * @memberof ListModelResponse
     */
    object?: string;
    /**
     * 
     * @type {Array<ModelItem>}
     * @memberof ListModelResponse
     */
    data: Array<ModelItem>;
}

/**
 * Check if a given object implements the ListModelResponse interface.
 */
export function instanceOfListModelResponse(value: object): boolean {
    if (!('data' in value)) return false;
    return true;
}

export function ListModelResponseFromJSON(json: any): ListModelResponse {
    return ListModelResponseFromJSONTyped(json, false);
}

export function ListModelResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListModelResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'object': json['object'] == null ? undefined : json['object'],
        'data': ((json['data'] as Array<any>).map(ModelItemFromJSON)),
    };
}

export function ListModelResponseToJSON(value?: ListModelResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'object': value['object'],
        'data': ((value['data'] as Array<any>).map(ModelItemToJSON)),
    };
}

