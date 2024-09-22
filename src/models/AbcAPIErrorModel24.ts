/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.12.4
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
 * @interface AbcAPIErrorModel24
 */
export interface AbcAPIErrorModel24 {
    /**
     * 
     * @type {number}
     * @memberof AbcAPIErrorModel24
     */
    code: number;
    /**
     * 
     * @type {string}
     * @memberof AbcAPIErrorModel24
     */
    detail: string;
}

/**
 * Check if a given object implements the AbcAPIErrorModel24 interface.
 */
export function instanceOfAbcAPIErrorModel24(value: object): boolean {
    if (!('code' in value)) return false;
    if (!('detail' in value)) return false;
    return true;
}

export function AbcAPIErrorModel24FromJSON(json: any): AbcAPIErrorModel24 {
    return AbcAPIErrorModel24FromJSONTyped(json, false);
}

export function AbcAPIErrorModel24FromJSONTyped(json: any, ignoreDiscriminator: boolean): AbcAPIErrorModel24 {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'],
        'detail': json['detail'],
    };
}

export function AbcAPIErrorModel24ToJSON(value?: AbcAPIErrorModel24 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'code': value['code'],
        'detail': value['detail'],
    };
}

