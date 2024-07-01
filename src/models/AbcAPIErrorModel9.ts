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
 * @interface AbcAPIErrorModel9
 */
export interface AbcAPIErrorModel9 {
    /**
     * 
     * @type {number}
     * @memberof AbcAPIErrorModel9
     */
    code: number;
    /**
     * 
     * @type {string}
     * @memberof AbcAPIErrorModel9
     */
    detail: string;
}

/**
 * Check if a given object implements the AbcAPIErrorModel9 interface.
 */
export function instanceOfAbcAPIErrorModel9(value: object): boolean {
    if (!('code' in value)) return false;
    if (!('detail' in value)) return false;
    return true;
}

export function AbcAPIErrorModel9FromJSON(json: any): AbcAPIErrorModel9 {
    return AbcAPIErrorModel9FromJSONTyped(json, false);
}

export function AbcAPIErrorModel9FromJSONTyped(json: any, ignoreDiscriminator: boolean): AbcAPIErrorModel9 {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'],
        'detail': json['detail'],
    };
}

export function AbcAPIErrorModel9ToJSON(value?: AbcAPIErrorModel9 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'code': value['code'],
        'detail': value['detail'],
    };
}

