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
 * @interface AbcAPIErrorModel33
 */
export interface AbcAPIErrorModel33 {
    /**
     * 
     * @type {number}
     * @memberof AbcAPIErrorModel33
     */
    code: number;
    /**
     * 
     * @type {string}
     * @memberof AbcAPIErrorModel33
     */
    detail: string;
}

/**
 * Check if a given object implements the AbcAPIErrorModel33 interface.
 */
export function instanceOfAbcAPIErrorModel33(value: object): boolean {
    if (!('code' in value)) return false;
    if (!('detail' in value)) return false;
    return true;
}

export function AbcAPIErrorModel33FromJSON(json: any): AbcAPIErrorModel33 {
    return AbcAPIErrorModel33FromJSONTyped(json, false);
}

export function AbcAPIErrorModel33FromJSONTyped(json: any, ignoreDiscriminator: boolean): AbcAPIErrorModel33 {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'],
        'detail': json['detail'],
    };
}

export function AbcAPIErrorModel33ToJSON(value?: AbcAPIErrorModel33 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'code': value['code'],
        'detail': value['detail'],
    };
}

