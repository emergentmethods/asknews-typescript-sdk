/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.9.5
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
 * @interface CreateChatCompletionResponseUsage1
 */
export interface CreateChatCompletionResponseUsage1 {
    /**
     * 
     * @type {number}
     * @memberof CreateChatCompletionResponseUsage1
     */
    promptTokens: number;
    /**
     * 
     * @type {number}
     * @memberof CreateChatCompletionResponseUsage1
     */
    completionTokens: number;
    /**
     * 
     * @type {number}
     * @memberof CreateChatCompletionResponseUsage1
     */
    totalTokens: number;
}

/**
 * Check if a given object implements the CreateChatCompletionResponseUsage1 interface.
 */
export function instanceOfCreateChatCompletionResponseUsage1(value: object): boolean {
    if (!('promptTokens' in value)) return false;
    if (!('completionTokens' in value)) return false;
    if (!('totalTokens' in value)) return false;
    return true;
}

export function CreateChatCompletionResponseUsage1FromJSON(json: any): CreateChatCompletionResponseUsage1 {
    return CreateChatCompletionResponseUsage1FromJSONTyped(json, false);
}

export function CreateChatCompletionResponseUsage1FromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateChatCompletionResponseUsage1 {
    if (json == null) {
        return json;
    }
    return {
        
        'promptTokens': json['prompt_tokens'],
        'completionTokens': json['completion_tokens'],
        'totalTokens': json['total_tokens'],
    };
}

export function CreateChatCompletionResponseUsage1ToJSON(value?: CreateChatCompletionResponseUsage1 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'prompt_tokens': value['promptTokens'],
        'completion_tokens': value['completionTokens'],
        'total_tokens': value['totalTokens'],
    };
}

