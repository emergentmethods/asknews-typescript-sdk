/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.18.6
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
 * @interface AbcAPIErrorModel27
 */
export interface AbcAPIErrorModel27 {
    /**
     * 
     * @type {number}
     * @memberof AbcAPIErrorModel27
     */
    code: number;
    /**
     * 
     * @type {string}
     * @memberof AbcAPIErrorModel27
     */
    detail: string;
}

/**
 * Check if a given object implements the AbcAPIErrorModel27 interface.
 */
export function instanceOfAbcAPIErrorModel27(value: object): boolean {
    if (!('code' in value)) return false;
    if (!('detail' in value)) return false;
    return true;
}

export function AbcAPIErrorModel27FromJSON(json: any): AbcAPIErrorModel27 {
    return AbcAPIErrorModel27FromJSONTyped(json, false);
}

export function AbcAPIErrorModel27FromJSONTyped(json: any, ignoreDiscriminator: boolean): AbcAPIErrorModel27 {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'],
        'detail': json['detail'],
    };
}

export function AbcAPIErrorModel27ToJSON(value?: AbcAPIErrorModel27 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'code': value['code'],
        'detail': value['detail'],
    };
}

