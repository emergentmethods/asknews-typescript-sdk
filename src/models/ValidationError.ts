/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.15.10
 * Contact: contact@emergentmethods.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { ValidationErrorLocInner } from './ValidationErrorLocInner';
import {
    ValidationErrorLocInnerFromJSON,
    ValidationErrorLocInnerFromJSONTyped,
    ValidationErrorLocInnerToJSON,
} from './ValidationErrorLocInner';

/**
 * 
 * @export
 * @interface ValidationError
 */
export interface ValidationError {
    /**
     * 
     * @type {Array<ValidationErrorLocInner>}
     * @memberof ValidationError
     */
    loc: Array<ValidationErrorLocInner>;
    /**
     * 
     * @type {string}
     * @memberof ValidationError
     */
    msg: string;
    /**
     * 
     * @type {string}
     * @memberof ValidationError
     */
    type: string;
}

/**
 * Check if a given object implements the ValidationError interface.
 */
export function instanceOfValidationError(value: object): boolean {
    if (!('loc' in value)) return false;
    if (!('msg' in value)) return false;
    if (!('type' in value)) return false;
    return true;
}

export function ValidationErrorFromJSON(json: any): ValidationError {
    return ValidationErrorFromJSONTyped(json, false);
}

export function ValidationErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): ValidationError {
    if (json == null) {
        return json;
    }
    return {
        
        'loc': ((json['loc'] as Array<any>).map(ValidationErrorLocInnerFromJSON)),
        'msg': json['msg'],
        'type': json['type'],
    };
}

export function ValidationErrorToJSON(value?: ValidationError | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'loc': ((value['loc'] as Array<any>).map(ValidationErrorLocInnerToJSON)),
        'msg': value['msg'],
        'type': value['type'],
    };
}

