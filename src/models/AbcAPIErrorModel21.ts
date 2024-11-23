/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.15.0
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
 * @interface AbcAPIErrorModel21
 */
export interface AbcAPIErrorModel21 {
    /**
     * 
     * @type {number}
     * @memberof AbcAPIErrorModel21
     */
    code: number;
    /**
     * 
     * @type {string}
     * @memberof AbcAPIErrorModel21
     */
    detail: string;
}

/**
 * Check if a given object implements the AbcAPIErrorModel21 interface.
 */
export function instanceOfAbcAPIErrorModel21(value: object): boolean {
    if (!('code' in value)) return false;
    if (!('detail' in value)) return false;
    return true;
}

export function AbcAPIErrorModel21FromJSON(json: any): AbcAPIErrorModel21 {
    return AbcAPIErrorModel21FromJSONTyped(json, false);
}

export function AbcAPIErrorModel21FromJSONTyped(json: any, ignoreDiscriminator: boolean): AbcAPIErrorModel21 {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'],
        'detail': json['detail'],
    };
}

export function AbcAPIErrorModel21ToJSON(value?: AbcAPIErrorModel21 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'code': value['code'],
        'detail': value['detail'],
    };
}

