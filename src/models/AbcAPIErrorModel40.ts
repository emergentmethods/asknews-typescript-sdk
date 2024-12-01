/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.15.5
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
 * @interface AbcAPIErrorModel40
 */
export interface AbcAPIErrorModel40 {
    /**
     * 
     * @type {number}
     * @memberof AbcAPIErrorModel40
     */
    code: number;
    /**
     * 
     * @type {string}
     * @memberof AbcAPIErrorModel40
     */
    detail: string;
}

/**
 * Check if a given object implements the AbcAPIErrorModel40 interface.
 */
export function instanceOfAbcAPIErrorModel40(value: object): boolean {
    if (!('code' in value)) return false;
    if (!('detail' in value)) return false;
    return true;
}

export function AbcAPIErrorModel40FromJSON(json: any): AbcAPIErrorModel40 {
    return AbcAPIErrorModel40FromJSONTyped(json, false);
}

export function AbcAPIErrorModel40FromJSONTyped(json: any, ignoreDiscriminator: boolean): AbcAPIErrorModel40 {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'],
        'detail': json['detail'],
    };
}

export function AbcAPIErrorModel40ToJSON(value?: AbcAPIErrorModel40 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'code': value['code'],
        'detail': value['detail'],
    };
}

