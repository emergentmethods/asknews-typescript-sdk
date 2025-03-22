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
import type { CreateChatCompletionRequestMessage1 } from './CreateChatCompletionRequestMessage1';
import {
    CreateChatCompletionRequestMessage1FromJSON,
    CreateChatCompletionRequestMessage1FromJSONTyped,
    CreateChatCompletionRequestMessage1ToJSON,
} from './CreateChatCompletionRequestMessage1';

/**
 * 
 * @export
 * @interface CreateChatCompletionResponseStreamChoice1
 */
export interface CreateChatCompletionResponseStreamChoice1 {
    /**
     * 
     * @type {number}
     * @memberof CreateChatCompletionResponseStreamChoice1
     */
    index: number;
    /**
     * 
     * @type {CreateChatCompletionRequestMessage1}
     * @memberof CreateChatCompletionResponseStreamChoice1
     */
    delta: CreateChatCompletionRequestMessage1;
    /**
     * 
     * @type {string}
     * @memberof CreateChatCompletionResponseStreamChoice1
     */
    finishReason?: string;
}

/**
 * Check if a given object implements the CreateChatCompletionResponseStreamChoice1 interface.
 */
export function instanceOfCreateChatCompletionResponseStreamChoice1(value: object): boolean {
    if (!('index' in value)) return false;
    if (!('delta' in value)) return false;
    return true;
}

export function CreateChatCompletionResponseStreamChoice1FromJSON(json: any): CreateChatCompletionResponseStreamChoice1 {
    return CreateChatCompletionResponseStreamChoice1FromJSONTyped(json, false);
}

export function CreateChatCompletionResponseStreamChoice1FromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateChatCompletionResponseStreamChoice1 {
    if (json == null) {
        return json;
    }
    return {
        
        'index': json['index'],
        'delta': CreateChatCompletionRequestMessage1FromJSON(json['delta']),
        'finishReason': json['finish_reason'] == null ? undefined : json['finish_reason'],
    };
}

export function CreateChatCompletionResponseStreamChoice1ToJSON(value?: CreateChatCompletionResponseStreamChoice1 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'index': value['index'],
        'delta': CreateChatCompletionRequestMessage1ToJSON(value['delta']),
        'finish_reason': value['finishReason'],
    };
}

