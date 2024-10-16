/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.13.4
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
 * @interface CreateChatCompletionRequestMessage1
 */
export interface CreateChatCompletionRequestMessage1 {
    /**
     * 
     * @type {string}
     * @memberof CreateChatCompletionRequestMessage1
     */
    role: string;
    /**
     * 
     * @type {string}
     * @memberof CreateChatCompletionRequestMessage1
     */
    content: string;
    /**
     * 
     * @type {string}
     * @memberof CreateChatCompletionRequestMessage1
     */
    name?: string;
    /**
     * 
     * @type {object}
     * @memberof CreateChatCompletionRequestMessage1
     */
    functionCall?: object;
}

/**
 * Check if a given object implements the CreateChatCompletionRequestMessage1 interface.
 */
export function instanceOfCreateChatCompletionRequestMessage1(value: object): boolean {
    if (!('role' in value)) return false;
    if (!('content' in value)) return false;
    return true;
}

export function CreateChatCompletionRequestMessage1FromJSON(json: any): CreateChatCompletionRequestMessage1 {
    return CreateChatCompletionRequestMessage1FromJSONTyped(json, false);
}

export function CreateChatCompletionRequestMessage1FromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateChatCompletionRequestMessage1 {
    if (json == null) {
        return json;
    }
    return {
        
        'role': json['role'],
        'content': json['content'],
        'name': json['name'] == null ? undefined : json['name'],
        'functionCall': json['function_call'] == null ? undefined : json['function_call'],
    };
}

export function CreateChatCompletionRequestMessage1ToJSON(value?: CreateChatCompletionRequestMessage1 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'role': value['role'],
        'content': value['content'],
        'name': value['name'],
        'function_call': value['functionCall'],
    };
}

