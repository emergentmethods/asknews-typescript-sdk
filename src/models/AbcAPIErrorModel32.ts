/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.18.3
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
 * @interface AbcAPIErrorModel32
 */
export interface AbcAPIErrorModel32 {
    /**
     * 
     * @type {number}
     * @memberof AbcAPIErrorModel32
     */
    code: number;
    /**
     * 
     * @type {string}
     * @memberof AbcAPIErrorModel32
     */
    detail: string;
}

/**
 * Check if a given object implements the AbcAPIErrorModel32 interface.
 */
export function instanceOfAbcAPIErrorModel32(value: object): boolean {
    if (!('code' in value)) return false;
    if (!('detail' in value)) return false;
    return true;
}

export function AbcAPIErrorModel32FromJSON(json: any): AbcAPIErrorModel32 {
    return AbcAPIErrorModel32FromJSONTyped(json, false);
}

export function AbcAPIErrorModel32FromJSONTyped(json: any, ignoreDiscriminator: boolean): AbcAPIErrorModel32 {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'],
        'detail': json['detail'],
    };
}

export function AbcAPIErrorModel32ToJSON(value?: AbcAPIErrorModel32 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'code': value['code'],
        'detail': value['detail'],
    };
}

