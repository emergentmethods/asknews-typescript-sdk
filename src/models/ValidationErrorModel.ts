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
import type { ValidationErrorItem } from './ValidationErrorItem';
import {
    ValidationErrorItemFromJSON,
    ValidationErrorItemFromJSONTyped,
    ValidationErrorItemToJSON,
} from './ValidationErrorItem';

/**
 * 
 * @export
 * @interface ValidationErrorModel
 */
export interface ValidationErrorModel {
    /**
     * 
     * @type {number}
     * @memberof ValidationErrorModel
     */
    code?: number;
    /**
     * 
     * @type {Array<ValidationErrorItem>}
     * @memberof ValidationErrorModel
     */
    detail: Array<ValidationErrorItem>;
}

/**
 * Check if a given object implements the ValidationErrorModel interface.
 */
export function instanceOfValidationErrorModel(value: object): boolean {
    if (!('detail' in value)) return false;
    return true;
}

export function ValidationErrorModelFromJSON(json: any): ValidationErrorModel {
    return ValidationErrorModelFromJSONTyped(json, false);
}

export function ValidationErrorModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): ValidationErrorModel {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'] == null ? undefined : json['code'],
        'detail': ((json['detail'] as Array<any>).map(ValidationErrorItemFromJSON)),
    };
}

export function ValidationErrorModelToJSON(value?: ValidationErrorModel | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'code': value['code'],
        'detail': ((value['detail'] as Array<any>).map(ValidationErrorItemToJSON)),
    };
}

