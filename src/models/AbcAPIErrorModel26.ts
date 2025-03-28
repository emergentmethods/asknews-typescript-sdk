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
/**
 * 
 * @export
 * @interface AbcAPIErrorModel26
 */
export interface AbcAPIErrorModel26 {
    /**
     * 
     * @type {number}
     * @memberof AbcAPIErrorModel26
     */
    code: number;
    /**
     * 
     * @type {string}
     * @memberof AbcAPIErrorModel26
     */
    detail: string;
}

/**
 * Check if a given object implements the AbcAPIErrorModel26 interface.
 */
export function instanceOfAbcAPIErrorModel26(value: object): boolean {
    if (!('code' in value)) return false;
    if (!('detail' in value)) return false;
    return true;
}

export function AbcAPIErrorModel26FromJSON(json: any): AbcAPIErrorModel26 {
    return AbcAPIErrorModel26FromJSONTyped(json, false);
}

export function AbcAPIErrorModel26FromJSONTyped(json: any, ignoreDiscriminator: boolean): AbcAPIErrorModel26 {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'],
        'detail': json['detail'],
    };
}

export function AbcAPIErrorModel26ToJSON(value?: AbcAPIErrorModel26 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'code': value['code'],
        'detail': value['detail'],
    };
}

