/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.18.3
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
 * @interface FilterParamsMetadata
 */
export interface FilterParamsMetadata {
    /**
     * 
     * @type {string}
     * @memberof FilterParamsMetadata
     */
    title?: string;
}

/**
 * Check if a given object implements the FilterParamsMetadata interface.
 */
export function instanceOfFilterParamsMetadata(value: object): boolean {
    return true;
}

export function FilterParamsMetadataFromJSON(json: any): FilterParamsMetadata {
    return FilterParamsMetadataFromJSONTyped(json, false);
}

export function FilterParamsMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): FilterParamsMetadata {
    if (json == null) {
        return json;
    }
    return {
        
        'title': json['title'] == null ? undefined : json['title'],
    };
}

export function FilterParamsMetadataToJSON(value?: FilterParamsMetadata | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'title': value['title'],
    };
}

