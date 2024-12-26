/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.16.0
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
 * @interface AbcAPIErrorModel16
 */
export interface AbcAPIErrorModel16 {
    /**
     * 
     * @type {number}
     * @memberof AbcAPIErrorModel16
     */
    code: number;
    /**
     * 
     * @type {string}
     * @memberof AbcAPIErrorModel16
     */
    detail: string;
}

/**
 * Check if a given object implements the AbcAPIErrorModel16 interface.
 */
export function instanceOfAbcAPIErrorModel16(value: object): boolean {
    if (!('code' in value)) return false;
    if (!('detail' in value)) return false;
    return true;
}

export function AbcAPIErrorModel16FromJSON(json: any): AbcAPIErrorModel16 {
    return AbcAPIErrorModel16FromJSONTyped(json, false);
}

export function AbcAPIErrorModel16FromJSONTyped(json: any, ignoreDiscriminator: boolean): AbcAPIErrorModel16 {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'],
        'detail': json['detail'],
    };
}

export function AbcAPIErrorModel16ToJSON(value?: AbcAPIErrorModel16 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'code': value['code'],
        'detail': value['detail'],
    };
}

