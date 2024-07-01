/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.8.2
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
 * @interface CreateChatCompletionResponseChoice
 */
export interface CreateChatCompletionResponseChoice {
    /**
     * 
     * @type {number}
     * @memberof CreateChatCompletionResponseChoice
     */
    index: number;
    /**
     * 
     * @type {CreateChatCompletionRequestMessage}
     * @memberof CreateChatCompletionResponseChoice
     */
    message: CreateChatCompletionRequestMessage;
    /**
     * 
     * @type {string}
     * @memberof CreateChatCompletionResponseChoice
     */
    finishReason?: string;
}

/**
 * Check if a given object implements the CreateChatCompletionResponseChoice interface.
 */
export function instanceOfCreateChatCompletionResponseChoice(value: object): boolean {
    if (!('index' in value)) return false;
    if (!('message' in value)) return false;
    return true;
}

export function CreateChatCompletionResponseChoiceFromJSON(json: any): CreateChatCompletionResponseChoice {
    return CreateChatCompletionResponseChoiceFromJSONTyped(json, false);
}

export function CreateChatCompletionResponseChoiceFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateChatCompletionResponseChoice {
    if (json == null) {
        return json;
    }
    return {
        
        'index': json['index'],
        'message': CreateChatCompletionRequestMessageFromJSON(json['message']),
        'finishReason': json['finish_reason'] == null ? undefined : json['finish_reason'],
    };
}

export function CreateChatCompletionResponseChoiceToJSON(value?: CreateChatCompletionResponseChoice | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'index': value['index'],
        'message': CreateChatCompletionRequestMessageToJSON(value['message']),
        'finish_reason': value['finishReason'],
    };
}

