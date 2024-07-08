/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.8.6
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
 * @interface AbcAPIErrorModel31
 */
export interface AbcAPIErrorModel31 {
    /**
     * 
     * @type {number}
     * @memberof AbcAPIErrorModel31
     */
    code: number;
    /**
     * 
     * @type {string}
     * @memberof AbcAPIErrorModel31
     */
    detail: string;
}

/**
 * Check if a given object implements the AbcAPIErrorModel31 interface.
 */
export function instanceOfAbcAPIErrorModel31(value: object): boolean {
    if (!('code' in value)) return false;
    if (!('detail' in value)) return false;
    return true;
}

export function AbcAPIErrorModel31FromJSON(json: any): AbcAPIErrorModel31 {
    return AbcAPIErrorModel31FromJSONTyped(json, false);
}

export function AbcAPIErrorModel31FromJSONTyped(json: any, ignoreDiscriminator: boolean): AbcAPIErrorModel31 {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'],
        'detail': json['detail'],
    };
}

export function AbcAPIErrorModel31ToJSON(value?: AbcAPIErrorModel31 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'code': value['code'],
        'detail': value['detail'],
    };
}

