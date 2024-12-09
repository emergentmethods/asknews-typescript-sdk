/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.15.9
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
 * @interface CreateChatCompletionResponseUsage
 */
export interface CreateChatCompletionResponseUsage {
    /**
     * 
     * @type {number}
     * @memberof CreateChatCompletionResponseUsage
     */
    promptTokens: number;
    /**
     * 
     * @type {number}
     * @memberof CreateChatCompletionResponseUsage
     */
    completionTokens: number;
    /**
     * 
     * @type {number}
     * @memberof CreateChatCompletionResponseUsage
     */
    totalTokens: number;
}

/**
 * Check if a given object implements the CreateChatCompletionResponseUsage interface.
 */
export function instanceOfCreateChatCompletionResponseUsage(value: object): boolean {
    if (!('promptTokens' in value)) return false;
    if (!('completionTokens' in value)) return false;
    if (!('totalTokens' in value)) return false;
    return true;
}

export function CreateChatCompletionResponseUsageFromJSON(json: any): CreateChatCompletionResponseUsage {
    return CreateChatCompletionResponseUsageFromJSONTyped(json, false);
}

export function CreateChatCompletionResponseUsageFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateChatCompletionResponseUsage {
    if (json == null) {
        return json;
    }
    return {
        
        'promptTokens': json['prompt_tokens'],
        'completionTokens': json['completion_tokens'],
        'totalTokens': json['total_tokens'],
    };
}

export function CreateChatCompletionResponseUsageToJSON(value?: CreateChatCompletionResponseUsage | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'prompt_tokens': value['promptTokens'],
        'completion_tokens': value['completionTokens'],
        'total_tokens': value['totalTokens'],
    };
}

