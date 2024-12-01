/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.15.5
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
 * @interface AbcAPIErrorModel28
 */
export interface AbcAPIErrorModel28 {
    /**
     * 
     * @type {number}
     * @memberof AbcAPIErrorModel28
     */
    code: number;
    /**
     * 
     * @type {string}
     * @memberof AbcAPIErrorModel28
     */
    detail: string;
}

/**
 * Check if a given object implements the AbcAPIErrorModel28 interface.
 */
export function instanceOfAbcAPIErrorModel28(value: object): boolean {
    if (!('code' in value)) return false;
    if (!('detail' in value)) return false;
    return true;
}

export function AbcAPIErrorModel28FromJSON(json: any): AbcAPIErrorModel28 {
    return AbcAPIErrorModel28FromJSONTyped(json, false);
}

export function AbcAPIErrorModel28FromJSONTyped(json: any, ignoreDiscriminator: boolean): AbcAPIErrorModel28 {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'],
        'detail': json['detail'],
    };
}

export function AbcAPIErrorModel28ToJSON(value?: AbcAPIErrorModel28 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'code': value['code'],
        'detail': value['detail'],
    };
}

