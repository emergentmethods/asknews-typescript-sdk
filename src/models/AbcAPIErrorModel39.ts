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
 * @interface AbcAPIErrorModel39
 */
export interface AbcAPIErrorModel39 {
    /**
     * 
     * @type {number}
     * @memberof AbcAPIErrorModel39
     */
    code: number;
    /**
     * 
     * @type {string}
     * @memberof AbcAPIErrorModel39
     */
    detail: string;
}

/**
 * Check if a given object implements the AbcAPIErrorModel39 interface.
 */
export function instanceOfAbcAPIErrorModel39(value: object): boolean {
    if (!('code' in value)) return false;
    if (!('detail' in value)) return false;
    return true;
}

export function AbcAPIErrorModel39FromJSON(json: any): AbcAPIErrorModel39 {
    return AbcAPIErrorModel39FromJSONTyped(json, false);
}

export function AbcAPIErrorModel39FromJSONTyped(json: any, ignoreDiscriminator: boolean): AbcAPIErrorModel39 {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'],
        'detail': json['detail'],
    };
}

export function AbcAPIErrorModel39ToJSON(value?: AbcAPIErrorModel39 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'code': value['code'],
        'detail': value['detail'],
    };
}

