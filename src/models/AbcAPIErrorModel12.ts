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
 * @interface AbcAPIErrorModel12
 */
export interface AbcAPIErrorModel12 {
    /**
     * 
     * @type {number}
     * @memberof AbcAPIErrorModel12
     */
    code: number;
    /**
     * 
     * @type {string}
     * @memberof AbcAPIErrorModel12
     */
    detail: string;
}

/**
 * Check if a given object implements the AbcAPIErrorModel12 interface.
 */
export function instanceOfAbcAPIErrorModel12(value: object): boolean {
    if (!('code' in value)) return false;
    if (!('detail' in value)) return false;
    return true;
}

export function AbcAPIErrorModel12FromJSON(json: any): AbcAPIErrorModel12 {
    return AbcAPIErrorModel12FromJSONTyped(json, false);
}

export function AbcAPIErrorModel12FromJSONTyped(json: any, ignoreDiscriminator: boolean): AbcAPIErrorModel12 {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'],
        'detail': json['detail'],
    };
}

export function AbcAPIErrorModel12ToJSON(value?: AbcAPIErrorModel12 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'code': value['code'],
        'detail': value['detail'],
    };
}

