/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.13.0
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
 * @interface AbcAPIErrorModel19
 */
export interface AbcAPIErrorModel19 {
    /**
     * 
     * @type {number}
     * @memberof AbcAPIErrorModel19
     */
    code: number;
    /**
     * 
     * @type {string}
     * @memberof AbcAPIErrorModel19
     */
    detail: string;
}

/**
 * Check if a given object implements the AbcAPIErrorModel19 interface.
 */
export function instanceOfAbcAPIErrorModel19(value: object): boolean {
    if (!('code' in value)) return false;
    if (!('detail' in value)) return false;
    return true;
}

export function AbcAPIErrorModel19FromJSON(json: any): AbcAPIErrorModel19 {
    return AbcAPIErrorModel19FromJSONTyped(json, false);
}

export function AbcAPIErrorModel19FromJSONTyped(json: any, ignoreDiscriminator: boolean): AbcAPIErrorModel19 {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'],
        'detail': json['detail'],
    };
}

export function AbcAPIErrorModel19ToJSON(value?: AbcAPIErrorModel19 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'code': value['code'],
        'detail': value['detail'],
    };
}

