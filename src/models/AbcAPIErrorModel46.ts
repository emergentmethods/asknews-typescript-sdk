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
 * @interface AbcAPIErrorModel46
 */
export interface AbcAPIErrorModel46 {
    /**
     * 
     * @type {number}
     * @memberof AbcAPIErrorModel46
     */
    code: number;
    /**
     * 
     * @type {string}
     * @memberof AbcAPIErrorModel46
     */
    detail: string;
}

/**
 * Check if a given object implements the AbcAPIErrorModel46 interface.
 */
export function instanceOfAbcAPIErrorModel46(value: object): boolean {
    if (!('code' in value)) return false;
    if (!('detail' in value)) return false;
    return true;
}

export function AbcAPIErrorModel46FromJSON(json: any): AbcAPIErrorModel46 {
    return AbcAPIErrorModel46FromJSONTyped(json, false);
}

export function AbcAPIErrorModel46FromJSONTyped(json: any, ignoreDiscriminator: boolean): AbcAPIErrorModel46 {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'],
        'detail': json['detail'],
    };
}

export function AbcAPIErrorModel46ToJSON(value?: AbcAPIErrorModel46 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'code': value['code'],
        'detail': value['detail'],
    };
}

