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
 * @interface AbcAPIErrorModel6
 */
export interface AbcAPIErrorModel6 {
    /**
     * 
     * @type {number}
     * @memberof AbcAPIErrorModel6
     */
    code: number;
    /**
     * 
     * @type {string}
     * @memberof AbcAPIErrorModel6
     */
    detail: string;
}

/**
 * Check if a given object implements the AbcAPIErrorModel6 interface.
 */
export function instanceOfAbcAPIErrorModel6(value: object): boolean {
    if (!('code' in value)) return false;
    if (!('detail' in value)) return false;
    return true;
}

export function AbcAPIErrorModel6FromJSON(json: any): AbcAPIErrorModel6 {
    return AbcAPIErrorModel6FromJSONTyped(json, false);
}

export function AbcAPIErrorModel6FromJSONTyped(json: any, ignoreDiscriminator: boolean): AbcAPIErrorModel6 {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'],
        'detail': json['detail'],
    };
}

export function AbcAPIErrorModel6ToJSON(value?: AbcAPIErrorModel6 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'code': value['code'],
        'detail': value['detail'],
    };
}
