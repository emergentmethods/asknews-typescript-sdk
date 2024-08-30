/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.10.0
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
 * @interface AbcAPIErrorModel20
 */
export interface AbcAPIErrorModel20 {
    /**
     * 
     * @type {number}
     * @memberof AbcAPIErrorModel20
     */
    code: number;
    /**
     * 
     * @type {string}
     * @memberof AbcAPIErrorModel20
     */
    detail: string;
}

/**
 * Check if a given object implements the AbcAPIErrorModel20 interface.
 */
export function instanceOfAbcAPIErrorModel20(value: object): boolean {
    if (!('code' in value)) return false;
    if (!('detail' in value)) return false;
    return true;
}

export function AbcAPIErrorModel20FromJSON(json: any): AbcAPIErrorModel20 {
    return AbcAPIErrorModel20FromJSONTyped(json, false);
}

export function AbcAPIErrorModel20FromJSONTyped(json: any, ignoreDiscriminator: boolean): AbcAPIErrorModel20 {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'],
        'detail': json['detail'],
    };
}

export function AbcAPIErrorModel20ToJSON(value?: AbcAPIErrorModel20 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'code': value['code'],
        'detail': value['detail'],
    };
}

