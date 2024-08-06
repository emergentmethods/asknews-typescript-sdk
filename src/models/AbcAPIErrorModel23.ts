/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.9.1
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
 * @interface AbcAPIErrorModel23
 */
export interface AbcAPIErrorModel23 {
    /**
     * 
     * @type {number}
     * @memberof AbcAPIErrorModel23
     */
    code: number;
    /**
     * 
     * @type {string}
     * @memberof AbcAPIErrorModel23
     */
    detail: string;
}

/**
 * Check if a given object implements the AbcAPIErrorModel23 interface.
 */
export function instanceOfAbcAPIErrorModel23(value: object): boolean {
    if (!('code' in value)) return false;
    if (!('detail' in value)) return false;
    return true;
}

export function AbcAPIErrorModel23FromJSON(json: any): AbcAPIErrorModel23 {
    return AbcAPIErrorModel23FromJSONTyped(json, false);
}

export function AbcAPIErrorModel23FromJSONTyped(json: any, ignoreDiscriminator: boolean): AbcAPIErrorModel23 {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'],
        'detail': json['detail'],
    };
}

export function AbcAPIErrorModel23ToJSON(value?: AbcAPIErrorModel23 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'code': value['code'],
        'detail': value['detail'],
    };
}

