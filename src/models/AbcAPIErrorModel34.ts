/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.16.0
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
 * @interface AbcAPIErrorModel34
 */
export interface AbcAPIErrorModel34 {
    /**
     * 
     * @type {number}
     * @memberof AbcAPIErrorModel34
     */
    code: number;
    /**
     * 
     * @type {string}
     * @memberof AbcAPIErrorModel34
     */
    detail: string;
}

/**
 * Check if a given object implements the AbcAPIErrorModel34 interface.
 */
export function instanceOfAbcAPIErrorModel34(value: object): boolean {
    if (!('code' in value)) return false;
    if (!('detail' in value)) return false;
    return true;
}

export function AbcAPIErrorModel34FromJSON(json: any): AbcAPIErrorModel34 {
    return AbcAPIErrorModel34FromJSONTyped(json, false);
}

export function AbcAPIErrorModel34FromJSONTyped(json: any, ignoreDiscriminator: boolean): AbcAPIErrorModel34 {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'],
        'detail': json['detail'],
    };
}

export function AbcAPIErrorModel34ToJSON(value?: AbcAPIErrorModel34 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'code': value['code'],
        'detail': value['detail'],
    };
}

