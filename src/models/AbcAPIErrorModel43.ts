/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.17.4
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
 * @interface AbcAPIErrorModel43
 */
export interface AbcAPIErrorModel43 {
    /**
     * 
     * @type {number}
     * @memberof AbcAPIErrorModel43
     */
    code: number;
    /**
     * 
     * @type {string}
     * @memberof AbcAPIErrorModel43
     */
    detail: string;
}

/**
 * Check if a given object implements the AbcAPIErrorModel43 interface.
 */
export function instanceOfAbcAPIErrorModel43(value: object): boolean {
    if (!('code' in value)) return false;
    if (!('detail' in value)) return false;
    return true;
}

export function AbcAPIErrorModel43FromJSON(json: any): AbcAPIErrorModel43 {
    return AbcAPIErrorModel43FromJSONTyped(json, false);
}

export function AbcAPIErrorModel43FromJSONTyped(json: any, ignoreDiscriminator: boolean): AbcAPIErrorModel43 {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'],
        'detail': json['detail'],
    };
}

export function AbcAPIErrorModel43ToJSON(value?: AbcAPIErrorModel43 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'code': value['code'],
        'detail': value['detail'],
    };
}

