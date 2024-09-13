/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.10.8
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
 * @interface AbcAPIErrorModel30
 */
export interface AbcAPIErrorModel30 {
    /**
     * 
     * @type {number}
     * @memberof AbcAPIErrorModel30
     */
    code: number;
    /**
     * 
     * @type {string}
     * @memberof AbcAPIErrorModel30
     */
    detail: string;
}

/**
 * Check if a given object implements the AbcAPIErrorModel30 interface.
 */
export function instanceOfAbcAPIErrorModel30(value: object): boolean {
    if (!('code' in value)) return false;
    if (!('detail' in value)) return false;
    return true;
}

export function AbcAPIErrorModel30FromJSON(json: any): AbcAPIErrorModel30 {
    return AbcAPIErrorModel30FromJSONTyped(json, false);
}

export function AbcAPIErrorModel30FromJSONTyped(json: any, ignoreDiscriminator: boolean): AbcAPIErrorModel30 {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'],
        'detail': json['detail'],
    };
}

export function AbcAPIErrorModel30ToJSON(value?: AbcAPIErrorModel30 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'code': value['code'],
        'detail': value['detail'],
    };
}

