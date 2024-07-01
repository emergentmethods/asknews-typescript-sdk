/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.8.2
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
 * @interface AbcAPIErrorModel25
 */
export interface AbcAPIErrorModel25 {
    /**
     * 
     * @type {number}
     * @memberof AbcAPIErrorModel25
     */
    code: number;
    /**
     * 
     * @type {string}
     * @memberof AbcAPIErrorModel25
     */
    detail: string;
}

/**
 * Check if a given object implements the AbcAPIErrorModel25 interface.
 */
export function instanceOfAbcAPIErrorModel25(value: object): boolean {
    if (!('code' in value)) return false;
    if (!('detail' in value)) return false;
    return true;
}

export function AbcAPIErrorModel25FromJSON(json: any): AbcAPIErrorModel25 {
    return AbcAPIErrorModel25FromJSONTyped(json, false);
}

export function AbcAPIErrorModel25FromJSONTyped(json: any, ignoreDiscriminator: boolean): AbcAPIErrorModel25 {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'],
        'detail': json['detail'],
    };
}

export function AbcAPIErrorModel25ToJSON(value?: AbcAPIErrorModel25 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'code': value['code'],
        'detail': value['detail'],
    };
}

