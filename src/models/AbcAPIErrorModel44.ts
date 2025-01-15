/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.16.2
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
 * @interface AbcAPIErrorModel44
 */
export interface AbcAPIErrorModel44 {
    /**
     * 
     * @type {number}
     * @memberof AbcAPIErrorModel44
     */
    code: number;
    /**
     * 
     * @type {string}
     * @memberof AbcAPIErrorModel44
     */
    detail: string;
}

/**
 * Check if a given object implements the AbcAPIErrorModel44 interface.
 */
export function instanceOfAbcAPIErrorModel44(value: object): boolean {
    if (!('code' in value)) return false;
    if (!('detail' in value)) return false;
    return true;
}

export function AbcAPIErrorModel44FromJSON(json: any): AbcAPIErrorModel44 {
    return AbcAPIErrorModel44FromJSONTyped(json, false);
}

export function AbcAPIErrorModel44FromJSONTyped(json: any, ignoreDiscriminator: boolean): AbcAPIErrorModel44 {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'],
        'detail': json['detail'],
    };
}

export function AbcAPIErrorModel44ToJSON(value?: AbcAPIErrorModel44 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'code': value['code'],
        'detail': value['detail'],
    };
}

