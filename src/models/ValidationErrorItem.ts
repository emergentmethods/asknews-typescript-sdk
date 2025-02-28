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
 * @interface ValidationErrorItem
 */
export interface ValidationErrorItem {
    /**
     * 
     * @type {Array<string>}
     * @memberof ValidationErrorItem
     */
    loc: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ValidationErrorItem
     */
    msg: string;
    /**
     * 
     * @type {string}
     * @memberof ValidationErrorItem
     */
    type: string;
}

/**
 * Check if a given object implements the ValidationErrorItem interface.
 */
export function instanceOfValidationErrorItem(value: object): boolean {
    if (!('loc' in value)) return false;
    if (!('msg' in value)) return false;
    if (!('type' in value)) return false;
    return true;
}

export function ValidationErrorItemFromJSON(json: any): ValidationErrorItem {
    return ValidationErrorItemFromJSONTyped(json, false);
}

export function ValidationErrorItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): ValidationErrorItem {
    if (json == null) {
        return json;
    }
    return {
        
        'loc': json['loc'],
        'msg': json['msg'],
        'type': json['type'],
    };
}

export function ValidationErrorItemToJSON(value?: ValidationErrorItem | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'loc': value['loc'],
        'msg': value['msg'],
        'type': value['type'],
    };
}

