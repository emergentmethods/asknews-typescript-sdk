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
 * @interface AbcAPIErrorModel37
 */
export interface AbcAPIErrorModel37 {
    /**
     * 
     * @type {number}
     * @memberof AbcAPIErrorModel37
     */
    code: number;
    /**
     * 
     * @type {string}
     * @memberof AbcAPIErrorModel37
     */
    detail: string;
}

/**
 * Check if a given object implements the AbcAPIErrorModel37 interface.
 */
export function instanceOfAbcAPIErrorModel37(value: object): boolean {
    if (!('code' in value)) return false;
    if (!('detail' in value)) return false;
    return true;
}

export function AbcAPIErrorModel37FromJSON(json: any): AbcAPIErrorModel37 {
    return AbcAPIErrorModel37FromJSONTyped(json, false);
}

export function AbcAPIErrorModel37FromJSONTyped(json: any, ignoreDiscriminator: boolean): AbcAPIErrorModel37 {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'],
        'detail': json['detail'],
    };
}

export function AbcAPIErrorModel37ToJSON(value?: AbcAPIErrorModel37 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'code': value['code'],
        'detail': value['detail'],
    };
}

