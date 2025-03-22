/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.18.3
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
 * @interface AbcAPIErrorModel14
 */
export interface AbcAPIErrorModel14 {
    /**
     * 
     * @type {number}
     * @memberof AbcAPIErrorModel14
     */
    code: number;
    /**
     * 
     * @type {string}
     * @memberof AbcAPIErrorModel14
     */
    detail: string;
}

/**
 * Check if a given object implements the AbcAPIErrorModel14 interface.
 */
export function instanceOfAbcAPIErrorModel14(value: object): boolean {
    if (!('code' in value)) return false;
    if (!('detail' in value)) return false;
    return true;
}

export function AbcAPIErrorModel14FromJSON(json: any): AbcAPIErrorModel14 {
    return AbcAPIErrorModel14FromJSONTyped(json, false);
}

export function AbcAPIErrorModel14FromJSONTyped(json: any, ignoreDiscriminator: boolean): AbcAPIErrorModel14 {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'],
        'detail': json['detail'],
    };
}

export function AbcAPIErrorModel14ToJSON(value?: AbcAPIErrorModel14 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'code': value['code'],
        'detail': value['detail'],
    };
}

