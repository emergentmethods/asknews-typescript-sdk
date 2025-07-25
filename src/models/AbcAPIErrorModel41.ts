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
 * @interface AbcAPIErrorModel41
 */
export interface AbcAPIErrorModel41 {
    /**
     * 
     * @type {number}
     * @memberof AbcAPIErrorModel41
     */
    code: number;
    /**
     * 
     * @type {string}
     * @memberof AbcAPIErrorModel41
     */
    detail: string;
}

/**
 * Check if a given object implements the AbcAPIErrorModel41 interface.
 */
export function instanceOfAbcAPIErrorModel41(value: object): value is AbcAPIErrorModel41 {
    if (!('code' in value) || value['code'] === undefined) return false;
    if (!('detail' in value) || value['detail'] === undefined) return false;
    return true;
}

export function AbcAPIErrorModel41FromJSON(json: any): AbcAPIErrorModel41 {
    return AbcAPIErrorModel41FromJSONTyped(json, false);
}

export function AbcAPIErrorModel41FromJSONTyped(json: any, ignoreDiscriminator: boolean): AbcAPIErrorModel41 {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'],
        'detail': json['detail'],
    };
}

export function AbcAPIErrorModel41ToJSON(json: any): AbcAPIErrorModel41 {
    return AbcAPIErrorModel41ToJSONTyped(json, false);
}

export function AbcAPIErrorModel41ToJSONTyped(value?: AbcAPIErrorModel41 | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'code': value['code'],
        'detail': value['detail'],
    };
}

