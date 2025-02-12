/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.17.4
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
 * @interface CreateChatCompletionRequestMessage
 */
export interface CreateChatCompletionRequestMessage {
    /**
     * 
     * @type {string}
     * @memberof CreateChatCompletionRequestMessage
     */
    role: string;
    /**
     * 
     * @type {string}
     * @memberof CreateChatCompletionRequestMessage
     */
    content: string;
    /**
     * 
     * @type {string}
     * @memberof CreateChatCompletionRequestMessage
     */
    name?: string;
    /**
     * 
     * @type {object}
     * @memberof CreateChatCompletionRequestMessage
     */
    functionCall?: object;
}

/**
 * Check if a given object implements the CreateChatCompletionRequestMessage interface.
 */
export function instanceOfCreateChatCompletionRequestMessage(value: object): boolean {
    if (!('role' in value)) return false;
    if (!('content' in value)) return false;
    return true;
}

export function CreateChatCompletionRequestMessageFromJSON(json: any): CreateChatCompletionRequestMessage {
    return CreateChatCompletionRequestMessageFromJSONTyped(json, false);
}

export function CreateChatCompletionRequestMessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateChatCompletionRequestMessage {
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

export function CreateChatCompletionRequestMessageToJSON(value?: CreateChatCompletionRequestMessage | null): any {
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

