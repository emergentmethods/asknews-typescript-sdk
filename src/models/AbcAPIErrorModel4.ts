/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.9.10
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
 * @interface AbcAPIErrorModel4
 */
export interface AbcAPIErrorModel4 {
    /**
     * 
     * @type {number}
     * @memberof AbcAPIErrorModel4
     */
    code: number;
    /**
     * 
     * @type {string}
     * @memberof AbcAPIErrorModel4
     */
    detail: string;
}

/**
 * Check if a given object implements the AbcAPIErrorModel4 interface.
 */
export function instanceOfAbcAPIErrorModel4(value: object): boolean {
    if (!('code' in value)) return false;
    if (!('detail' in value)) return false;
    return true;
}

export function AbcAPIErrorModel4FromJSON(json: any): AbcAPIErrorModel4 {
    return AbcAPIErrorModel4FromJSONTyped(json, false);
}

export function AbcAPIErrorModel4FromJSONTyped(json: any, ignoreDiscriminator: boolean): AbcAPIErrorModel4 {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'],
        'detail': json['detail'],
    };
}

export function AbcAPIErrorModel4ToJSON(value?: AbcAPIErrorModel4 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'code': value['code'],
        'detail': value['detail'],
    };
}

