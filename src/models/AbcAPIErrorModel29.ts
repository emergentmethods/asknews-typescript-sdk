/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.9.3
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
 * @interface AbcAPIErrorModel29
 */
export interface AbcAPIErrorModel29 {
    /**
     * 
     * @type {number}
     * @memberof AbcAPIErrorModel29
     */
    code: number;
    /**
     * 
     * @type {string}
     * @memberof AbcAPIErrorModel29
     */
    detail: string;
}

/**
 * Check if a given object implements the AbcAPIErrorModel29 interface.
 */
export function instanceOfAbcAPIErrorModel29(value: object): boolean {
    if (!('code' in value)) return false;
    if (!('detail' in value)) return false;
    return true;
}

export function AbcAPIErrorModel29FromJSON(json: any): AbcAPIErrorModel29 {
    return AbcAPIErrorModel29FromJSONTyped(json, false);
}

export function AbcAPIErrorModel29FromJSONTyped(json: any, ignoreDiscriminator: boolean): AbcAPIErrorModel29 {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'],
        'detail': json['detail'],
    };
}

export function AbcAPIErrorModel29ToJSON(value?: AbcAPIErrorModel29 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'code': value['code'],
        'detail': value['detail'],
    };
}
