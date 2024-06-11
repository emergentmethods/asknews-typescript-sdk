/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.6.3
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
 * @interface AsknewsApiErrorsAPIErrorModel
 */
export interface AsknewsApiErrorsAPIErrorModel {
    /**
     * 
     * @type {number}
     * @memberof AsknewsApiErrorsAPIErrorModel
     */
    code: number;
    /**
     * 
     * @type {string}
     * @memberof AsknewsApiErrorsAPIErrorModel
     */
    detail: string;
}

/**
 * Check if a given object implements the AsknewsApiErrorsAPIErrorModel interface.
 */
export function instanceOfAsknewsApiErrorsAPIErrorModel(value: object): boolean {
    if (!('code' in value)) return false;
    if (!('detail' in value)) return false;
    return true;
}

export function AsknewsApiErrorsAPIErrorModelFromJSON(json: any): AsknewsApiErrorsAPIErrorModel {
    return AsknewsApiErrorsAPIErrorModelFromJSONTyped(json, false);
}

export function AsknewsApiErrorsAPIErrorModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): AsknewsApiErrorsAPIErrorModel {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'],
        'detail': json['detail'],
    };
}

export function AsknewsApiErrorsAPIErrorModelToJSON(value?: AsknewsApiErrorsAPIErrorModel | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'code': value['code'],
        'detail': value['detail'],
    };
}

