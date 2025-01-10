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
 * @interface AbcAPIErrorModel5
 */
export interface AbcAPIErrorModel5 {
    /**
     * 
     * @type {number}
     * @memberof AbcAPIErrorModel5
     */
    code: number;
    /**
     * 
     * @type {string}
     * @memberof AbcAPIErrorModel5
     */
    detail: string;
}

/**
 * Check if a given object implements the AbcAPIErrorModel5 interface.
 */
export function instanceOfAbcAPIErrorModel5(value: object): boolean {
    if (!('code' in value)) return false;
    if (!('detail' in value)) return false;
    return true;
}

export function AbcAPIErrorModel5FromJSON(json: any): AbcAPIErrorModel5 {
    return AbcAPIErrorModel5FromJSONTyped(json, false);
}

export function AbcAPIErrorModel5FromJSONTyped(json: any, ignoreDiscriminator: boolean): AbcAPIErrorModel5 {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'],
        'detail': json['detail'],
    };
}

export function AbcAPIErrorModel5ToJSON(value?: AbcAPIErrorModel5 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'code': value['code'],
        'detail': value['detail'],
    };
}

