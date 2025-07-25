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
 * @interface AbcAPIErrorModel18
 */
export interface AbcAPIErrorModel18 {
    /**
     * 
     * @type {number}
     * @memberof AbcAPIErrorModel18
     */
    code: number;
    /**
     * 
     * @type {string}
     * @memberof AbcAPIErrorModel18
     */
    detail: string;
}

/**
 * Check if a given object implements the AbcAPIErrorModel18 interface.
 */
export function instanceOfAbcAPIErrorModel18(value: object): value is AbcAPIErrorModel18 {
    if (!('code' in value) || value['code'] === undefined) return false;
    if (!('detail' in value) || value['detail'] === undefined) return false;
    return true;
}

export function AbcAPIErrorModel18FromJSON(json: any): AbcAPIErrorModel18 {
    return AbcAPIErrorModel18FromJSONTyped(json, false);
}

export function AbcAPIErrorModel18FromJSONTyped(json: any, ignoreDiscriminator: boolean): AbcAPIErrorModel18 {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'],
        'detail': json['detail'],
    };
}

export function AbcAPIErrorModel18ToJSON(json: any): AbcAPIErrorModel18 {
    return AbcAPIErrorModel18ToJSONTyped(json, false);
}

export function AbcAPIErrorModel18ToJSONTyped(value?: AbcAPIErrorModel18 | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'code': value['code'],
        'detail': value['detail'],
    };
}

