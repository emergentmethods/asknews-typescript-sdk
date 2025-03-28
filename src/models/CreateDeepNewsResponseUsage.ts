/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.18.6
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
 * @interface CreateDeepNewsResponseUsage
 */
export interface CreateDeepNewsResponseUsage {
    /**
     * 
     * @type {number}
     * @memberof CreateDeepNewsResponseUsage
     */
    promptTokens: number;
    /**
     * 
     * @type {number}
     * @memberof CreateDeepNewsResponseUsage
     */
    completionTokens: number;
    /**
     * 
     * @type {number}
     * @memberof CreateDeepNewsResponseUsage
     */
    totalTokens: number;
}

/**
 * Check if a given object implements the CreateDeepNewsResponseUsage interface.
 */
export function instanceOfCreateDeepNewsResponseUsage(value: object): boolean {
    if (!('promptTokens' in value)) return false;
    if (!('completionTokens' in value)) return false;
    if (!('totalTokens' in value)) return false;
    return true;
}

export function CreateDeepNewsResponseUsageFromJSON(json: any): CreateDeepNewsResponseUsage {
    return CreateDeepNewsResponseUsageFromJSONTyped(json, false);
}

export function CreateDeepNewsResponseUsageFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateDeepNewsResponseUsage {
    if (json == null) {
        return json;
    }
    return {
        
        'promptTokens': json['prompt_tokens'],
        'completionTokens': json['completion_tokens'],
        'totalTokens': json['total_tokens'],
    };
}

export function CreateDeepNewsResponseUsageToJSON(value?: CreateDeepNewsResponseUsage | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'prompt_tokens': value['promptTokens'],
        'completion_tokens': value['completionTokens'],
        'total_tokens': value['totalTokens'],
    };
}

