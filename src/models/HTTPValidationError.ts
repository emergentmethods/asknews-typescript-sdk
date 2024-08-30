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
import type { ValidationError } from './ValidationError';
import {
    ValidationErrorFromJSON,
    ValidationErrorFromJSONTyped,
    ValidationErrorToJSON,
} from './ValidationError';

/**
 * 
 * @export
 * @interface HTTPValidationError
 */
export interface HTTPValidationError {
    /**
     * 
     * @type {Array<ValidationError>}
     * @memberof HTTPValidationError
     */
    detail?: Array<ValidationError>;
}

/**
 * Check if a given object implements the HTTPValidationError interface.
 */
export function instanceOfHTTPValidationError(value: object): boolean {
    return true;
}

export function HTTPValidationErrorFromJSON(json: any): HTTPValidationError {
    return HTTPValidationErrorFromJSONTyped(json, false);
}

export function HTTPValidationErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): HTTPValidationError {
    if (json == null) {
        return json;
    }
    return {
        
        'detail': json['detail'] == null ? undefined : ((json['detail'] as Array<any>).map(ValidationErrorFromJSON)),
    };
}

export function HTTPValidationErrorToJSON(value?: HTTPValidationError | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'detail': value['detail'] == null ? undefined : ((value['detail'] as Array<any>).map(ValidationErrorToJSON)),
    };
}

