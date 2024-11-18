/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.14.8
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
 * @interface AbcAPIErrorModel17
 */
export interface AbcAPIErrorModel17 {
    /**
     * 
     * @type {number}
     * @memberof AbcAPIErrorModel17
     */
    code: number;
    /**
     * 
     * @type {string}
     * @memberof AbcAPIErrorModel17
     */
    detail: string;
}

/**
 * Check if a given object implements the AbcAPIErrorModel17 interface.
 */
export function instanceOfAbcAPIErrorModel17(value: object): boolean {
    if (!('code' in value)) return false;
    if (!('detail' in value)) return false;
    return true;
}

export function AbcAPIErrorModel17FromJSON(json: any): AbcAPIErrorModel17 {
    return AbcAPIErrorModel17FromJSONTyped(json, false);
}

export function AbcAPIErrorModel17FromJSONTyped(json: any, ignoreDiscriminator: boolean): AbcAPIErrorModel17 {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'],
        'detail': json['detail'],
    };
}

export function AbcAPIErrorModel17ToJSON(value?: AbcAPIErrorModel17 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'code': value['code'],
        'detail': value['detail'],
    };
}

