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
 * @interface Classification
 */
export interface Classification {
}

/**
 * Check if a given object implements the Classification interface.
 */
export function instanceOfClassification(value: object): boolean {
    return true;
}

export function ClassificationFromJSON(json: any): Classification {
    return ClassificationFromJSONTyped(json, false);
}

export function ClassificationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Classification {
    return json;
}

export function ClassificationToJSON(value?: Classification | null): any {
    return value;
}

