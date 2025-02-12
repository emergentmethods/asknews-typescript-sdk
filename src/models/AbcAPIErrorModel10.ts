/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.17.4
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
 * @interface AbcAPIErrorModel10
 */
export interface AbcAPIErrorModel10 {
    /**
     * 
     * @type {number}
     * @memberof AbcAPIErrorModel10
     */
    code: number;
    /**
     * 
     * @type {string}
     * @memberof AbcAPIErrorModel10
     */
    detail: string;
}

/**
 * Check if a given object implements the AbcAPIErrorModel10 interface.
 */
export function instanceOfAbcAPIErrorModel10(value: object): boolean {
    if (!('code' in value)) return false;
    if (!('detail' in value)) return false;
    return true;
}

export function AbcAPIErrorModel10FromJSON(json: any): AbcAPIErrorModel10 {
    return AbcAPIErrorModel10FromJSONTyped(json, false);
}

export function AbcAPIErrorModel10FromJSONTyped(json: any, ignoreDiscriminator: boolean): AbcAPIErrorModel10 {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'],
        'detail': json['detail'],
    };
}

export function AbcAPIErrorModel10ToJSON(value?: AbcAPIErrorModel10 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'code': value['code'],
        'detail': value['detail'],
    };
}

