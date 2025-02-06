/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.17.3
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
 * @interface AbcAPIErrorModel36
 */
export interface AbcAPIErrorModel36 {
    /**
     * 
     * @type {number}
     * @memberof AbcAPIErrorModel36
     */
    code: number;
    /**
     * 
     * @type {string}
     * @memberof AbcAPIErrorModel36
     */
    detail: string;
}

/**
 * Check if a given object implements the AbcAPIErrorModel36 interface.
 */
export function instanceOfAbcAPIErrorModel36(value: object): boolean {
    if (!('code' in value)) return false;
    if (!('detail' in value)) return false;
    return true;
}

export function AbcAPIErrorModel36FromJSON(json: any): AbcAPIErrorModel36 {
    return AbcAPIErrorModel36FromJSONTyped(json, false);
}

export function AbcAPIErrorModel36FromJSONTyped(json: any, ignoreDiscriminator: boolean): AbcAPIErrorModel36 {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'],
        'detail': json['detail'],
    };
}

export function AbcAPIErrorModel36ToJSON(value?: AbcAPIErrorModel36 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'code': value['code'],
        'detail': value['detail'],
    };
}

