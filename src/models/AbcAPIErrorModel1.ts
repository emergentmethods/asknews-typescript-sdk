/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.14.6
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
 * @interface AbcAPIErrorModel1
 */
export interface AbcAPIErrorModel1 {
    /**
     * 
     * @type {number}
     * @memberof AbcAPIErrorModel1
     */
    code: number;
    /**
     * 
     * @type {string}
     * @memberof AbcAPIErrorModel1
     */
    detail: string;
}

/**
 * Check if a given object implements the AbcAPIErrorModel1 interface.
 */
export function instanceOfAbcAPIErrorModel1(value: object): boolean {
    if (!('code' in value)) return false;
    if (!('detail' in value)) return false;
    return true;
}

export function AbcAPIErrorModel1FromJSON(json: any): AbcAPIErrorModel1 {
    return AbcAPIErrorModel1FromJSONTyped(json, false);
}

export function AbcAPIErrorModel1FromJSONTyped(json: any, ignoreDiscriminator: boolean): AbcAPIErrorModel1 {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'],
        'detail': json['detail'],
    };
}

export function AbcAPIErrorModel1ToJSON(value?: AbcAPIErrorModel1 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'code': value['code'],
        'detail': value['detail'],
    };
}

