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
import type { CreateChatCompletionRequestMessage1 } from './CreateChatCompletionRequestMessage1';
import {
    CreateChatCompletionRequestMessage1FromJSON,
    CreateChatCompletionRequestMessage1FromJSONTyped,
    CreateChatCompletionRequestMessage1ToJSON,
} from './CreateChatCompletionRequestMessage1';

/**
 * 
 * @export
 * @interface CreateChatCompletionResponseChoice1
 */
export interface CreateChatCompletionResponseChoice1 {
    /**
     * 
     * @type {number}
     * @memberof CreateChatCompletionResponseChoice1
     */
    index: number;
    /**
     * 
     * @type {CreateChatCompletionRequestMessage1}
     * @memberof CreateChatCompletionResponseChoice1
     */
    message: CreateChatCompletionRequestMessage1;
    /**
     * 
     * @type {string}
     * @memberof CreateChatCompletionResponseChoice1
     */
    finishReason?: string;
}

/**
 * Check if a given object implements the CreateChatCompletionResponseChoice1 interface.
 */
export function instanceOfCreateChatCompletionResponseChoice1(value: object): boolean {
    if (!('index' in value)) return false;
    if (!('message' in value)) return false;
    return true;
}

export function CreateChatCompletionResponseChoice1FromJSON(json: any): CreateChatCompletionResponseChoice1 {
    return CreateChatCompletionResponseChoice1FromJSONTyped(json, false);
}

export function CreateChatCompletionResponseChoice1FromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateChatCompletionResponseChoice1 {
    if (json == null) {
        return json;
    }
    return {
        
        'index': json['index'],
        'message': CreateChatCompletionRequestMessage1FromJSON(json['message']),
        'finishReason': json['finish_reason'] == null ? undefined : json['finish_reason'],
    };
}

export function CreateChatCompletionResponseChoice1ToJSON(value?: CreateChatCompletionResponseChoice1 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'index': value['index'],
        'message': CreateChatCompletionRequestMessage1ToJSON(value['message']),
        'finish_reason': value['finishReason'],
    };
}

