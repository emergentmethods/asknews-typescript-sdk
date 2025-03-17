/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.18.2
 * Contact: contact@emergentmethods.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { CreateChatCompletionRequestMessage } from './CreateChatCompletionRequestMessage';
import {
    CreateChatCompletionRequestMessageFromJSON,
    CreateChatCompletionRequestMessageFromJSONTyped,
    CreateChatCompletionRequestMessageToJSON,
} from './CreateChatCompletionRequestMessage';

/**
 * 
 * @export
 * @interface CreateChatCompletionResponseStreamChoice
 */
export interface CreateChatCompletionResponseStreamChoice {
    /**
     * 
     * @type {number}
     * @memberof CreateChatCompletionResponseStreamChoice
     */
    index: number;
    /**
     * 
     * @type {CreateChatCompletionRequestMessage}
     * @memberof CreateChatCompletionResponseStreamChoice
     */
    delta: CreateChatCompletionRequestMessage;
    /**
     * 
     * @type {string}
     * @memberof CreateChatCompletionResponseStreamChoice
     */
    finishReason?: string;
}

/**
 * Check if a given object implements the CreateChatCompletionResponseStreamChoice interface.
 */
export function instanceOfCreateChatCompletionResponseStreamChoice(value: object): boolean {
    if (!('index' in value)) return false;
    if (!('delta' in value)) return false;
    return true;
}

export function CreateChatCompletionResponseStreamChoiceFromJSON(json: any): CreateChatCompletionResponseStreamChoice {
    return CreateChatCompletionResponseStreamChoiceFromJSONTyped(json, false);
}

export function CreateChatCompletionResponseStreamChoiceFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateChatCompletionResponseStreamChoice {
    if (json == null) {
        return json;
    }
    return {
        
        'index': json['index'],
        'delta': CreateChatCompletionRequestMessageFromJSON(json['delta']),
        'finishReason': json['finish_reason'] == null ? undefined : json['finish_reason'],
    };
}

export function CreateChatCompletionResponseStreamChoiceToJSON(value?: CreateChatCompletionResponseStreamChoice | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'index': value['index'],
        'delta': CreateChatCompletionRequestMessageToJSON(value['delta']),
        'finish_reason': value['finishReason'],
    };
}

