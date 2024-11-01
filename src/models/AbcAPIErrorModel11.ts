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
 * @interface AbcAPIErrorModel11
 */
export interface AbcAPIErrorModel11 {
    /**
     * 
     * @type {number}
     * @memberof AbcAPIErrorModel11
     */
    code: number;
    /**
     * 
     * @type {string}
     * @memberof AbcAPIErrorModel11
     */
    detail: string;
}

/**
 * Check if a given object implements the AbcAPIErrorModel11 interface.
 */
export function instanceOfAbcAPIErrorModel11(value: object): boolean {
    if (!('code' in value)) return false;
    if (!('detail' in value)) return false;
    return true;
}

export function AbcAPIErrorModel11FromJSON(json: any): AbcAPIErrorModel11 {
    return AbcAPIErrorModel11FromJSONTyped(json, false);
}

export function AbcAPIErrorModel11FromJSONTyped(json: any, ignoreDiscriminator: boolean): AbcAPIErrorModel11 {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'],
        'detail': json['detail'],
    };
}

export function AbcAPIErrorModel11ToJSON(value?: AbcAPIErrorModel11 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'code': value['code'],
        'detail': value['detail'],
    };
}

