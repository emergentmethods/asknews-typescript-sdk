/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.15.0
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
 * @interface AbcAPIErrorModel8
 */
export interface AbcAPIErrorModel8 {
    /**
     * 
     * @type {number}
     * @memberof AbcAPIErrorModel8
     */
    code: number;
    /**
     * 
     * @type {string}
     * @memberof AbcAPIErrorModel8
     */
    detail: string;
}

/**
 * Check if a given object implements the AbcAPIErrorModel8 interface.
 */
export function instanceOfAbcAPIErrorModel8(value: object): boolean {
    if (!('code' in value)) return false;
    if (!('detail' in value)) return false;
    return true;
}

export function AbcAPIErrorModel8FromJSON(json: any): AbcAPIErrorModel8 {
    return AbcAPIErrorModel8FromJSONTyped(json, false);
}

export function AbcAPIErrorModel8FromJSONTyped(json: any, ignoreDiscriminator: boolean): AbcAPIErrorModel8 {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'],
        'detail': json['detail'],
    };
}

export function AbcAPIErrorModel8ToJSON(value?: AbcAPIErrorModel8 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'code': value['code'],
        'detail': value['detail'],
    };
}

