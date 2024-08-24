/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.9.10
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
 * @interface AbcAPIErrorModel22
 */
export interface AbcAPIErrorModel22 {
    /**
     * 
     * @type {number}
     * @memberof AbcAPIErrorModel22
     */
    code: number;
    /**
     * 
     * @type {string}
     * @memberof AbcAPIErrorModel22
     */
    detail: string;
}

/**
 * Check if a given object implements the AbcAPIErrorModel22 interface.
 */
export function instanceOfAbcAPIErrorModel22(value: object): boolean {
    if (!('code' in value)) return false;
    if (!('detail' in value)) return false;
    return true;
}

export function AbcAPIErrorModel22FromJSON(json: any): AbcAPIErrorModel22 {
    return AbcAPIErrorModel22FromJSONTyped(json, false);
}

export function AbcAPIErrorModel22FromJSONTyped(json: any, ignoreDiscriminator: boolean): AbcAPIErrorModel22 {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'],
        'detail': json['detail'],
    };
}

export function AbcAPIErrorModel22ToJSON(value?: AbcAPIErrorModel22 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'code': value['code'],
        'detail': value['detail'],
    };
}

