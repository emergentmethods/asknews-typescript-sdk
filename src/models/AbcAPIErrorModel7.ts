/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.6.3
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
 * @interface AbcAPIErrorModel7
 */
export interface AbcAPIErrorModel7 {
    /**
     * 
     * @type {number}
     * @memberof AbcAPIErrorModel7
     */
    code: number;
    /**
     * 
     * @type {string}
     * @memberof AbcAPIErrorModel7
     */
    detail: string;
}

/**
 * Check if a given object implements the AbcAPIErrorModel7 interface.
 */
export function instanceOfAbcAPIErrorModel7(value: object): boolean {
    if (!('code' in value)) return false;
    if (!('detail' in value)) return false;
    return true;
}

export function AbcAPIErrorModel7FromJSON(json: any): AbcAPIErrorModel7 {
    return AbcAPIErrorModel7FromJSONTyped(json, false);
}

export function AbcAPIErrorModel7FromJSONTyped(json: any, ignoreDiscriminator: boolean): AbcAPIErrorModel7 {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'],
        'detail': json['detail'],
    };
}

export function AbcAPIErrorModel7ToJSON(value?: AbcAPIErrorModel7 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'code': value['code'],
        'detail': value['detail'],
    };
}
