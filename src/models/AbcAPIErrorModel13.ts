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
 * @interface AbcAPIErrorModel13
 */
export interface AbcAPIErrorModel13 {
    /**
     * 
     * @type {number}
     * @memberof AbcAPIErrorModel13
     */
    code: number;
    /**
     * 
     * @type {string}
     * @memberof AbcAPIErrorModel13
     */
    detail: string;
}

/**
 * Check if a given object implements the AbcAPIErrorModel13 interface.
 */
export function instanceOfAbcAPIErrorModel13(value: object): value is AbcAPIErrorModel13 {
    if (!('code' in value) || value['code'] === undefined) return false;
    if (!('detail' in value) || value['detail'] === undefined) return false;
    return true;
}

export function AbcAPIErrorModel13FromJSON(json: any): AbcAPIErrorModel13 {
    return AbcAPIErrorModel13FromJSONTyped(json, false);
}

export function AbcAPIErrorModel13FromJSONTyped(json: any, ignoreDiscriminator: boolean): AbcAPIErrorModel13 {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'],
        'detail': json['detail'],
    };
}

export function AbcAPIErrorModel13ToJSON(json: any): AbcAPIErrorModel13 {
    return AbcAPIErrorModel13ToJSONTyped(json, false);
}

export function AbcAPIErrorModel13ToJSONTyped(value?: AbcAPIErrorModel13 | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'code': value['code'],
        'detail': value['detail'],
    };
}

