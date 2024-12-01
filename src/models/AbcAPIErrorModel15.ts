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
 * @interface AbcAPIErrorModel15
 */
export interface AbcAPIErrorModel15 {
    /**
     * 
     * @type {number}
     * @memberof AbcAPIErrorModel15
     */
    code: number;
    /**
     * 
     * @type {string}
     * @memberof AbcAPIErrorModel15
     */
    detail: string;
}

/**
 * Check if a given object implements the AbcAPIErrorModel15 interface.
 */
export function instanceOfAbcAPIErrorModel15(value: object): boolean {
    if (!('code' in value)) return false;
    if (!('detail' in value)) return false;
    return true;
}

export function AbcAPIErrorModel15FromJSON(json: any): AbcAPIErrorModel15 {
    return AbcAPIErrorModel15FromJSONTyped(json, false);
}

export function AbcAPIErrorModel15FromJSONTyped(json: any, ignoreDiscriminator: boolean): AbcAPIErrorModel15 {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'],
        'detail': json['detail'],
    };
}

export function AbcAPIErrorModel15ToJSON(value?: AbcAPIErrorModel15 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'code': value['code'],
        'detail': value['detail'],
    };
}

