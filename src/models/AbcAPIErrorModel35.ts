/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.15.2
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
 * @interface AbcAPIErrorModel35
 */
export interface AbcAPIErrorModel35 {
    /**
     * 
     * @type {number}
     * @memberof AbcAPIErrorModel35
     */
    code: number;
    /**
     * 
     * @type {string}
     * @memberof AbcAPIErrorModel35
     */
    detail: string;
}

/**
 * Check if a given object implements the AbcAPIErrorModel35 interface.
 */
export function instanceOfAbcAPIErrorModel35(value: object): boolean {
    if (!('code' in value)) return false;
    if (!('detail' in value)) return false;
    return true;
}

export function AbcAPIErrorModel35FromJSON(json: any): AbcAPIErrorModel35 {
    return AbcAPIErrorModel35FromJSONTyped(json, false);
}

export function AbcAPIErrorModel35FromJSONTyped(json: any, ignoreDiscriminator: boolean): AbcAPIErrorModel35 {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'],
        'detail': json['detail'],
    };
}

export function AbcAPIErrorModel35ToJSON(value?: AbcAPIErrorModel35 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'code': value['code'],
        'detail': value['detail'],
    };
}

