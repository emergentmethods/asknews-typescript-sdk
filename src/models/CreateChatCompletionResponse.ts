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
import type { CreateChatCompletionResponseChoice } from './CreateChatCompletionResponseChoice';
import {
    CreateChatCompletionResponseChoiceFromJSON,
    CreateChatCompletionResponseChoiceFromJSONTyped,
    CreateChatCompletionResponseChoiceToJSON,
} from './CreateChatCompletionResponseChoice';
import type { CreateChatCompletionResponseUsage } from './CreateChatCompletionResponseUsage';
import {
    CreateChatCompletionResponseUsageFromJSON,
    CreateChatCompletionResponseUsageFromJSONTyped,
    CreateChatCompletionResponseUsageToJSON,
} from './CreateChatCompletionResponseUsage';

/**
 * 
 * @export
 * @interface CreateChatCompletionResponse
 */
export interface CreateChatCompletionResponse {
    /**
     * 
     * @type {string}
     * @memberof CreateChatCompletionResponse
     */
    id: string;
    /**
     * 
     * @type {number}
     * @memberof CreateChatCompletionResponse
     */
    created: number;
    /**
     * 
     * @type {string}
     * @memberof CreateChatCompletionResponse
     */
    object?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateChatCompletionResponse
     */
    model?: string;
    /**
     * 
     * @type {CreateChatCompletionResponseUsage}
     * @memberof CreateChatCompletionResponse
     */
    usage: CreateChatCompletionResponseUsage;
    /**
     * 
     * @type {Array<CreateChatCompletionResponseChoice>}
     * @memberof CreateChatCompletionResponse
     */
    choices: Array<CreateChatCompletionResponseChoice>;
}

/**
 * Check if a given object implements the CreateChatCompletionResponse interface.
 */
export function instanceOfCreateChatCompletionResponse(value: object): boolean {
    if (!('id' in value)) return false;
    if (!('created' in value)) return false;
    if (!('usage' in value)) return false;
    if (!('choices' in value)) return false;
    return true;
}

export function CreateChatCompletionResponseFromJSON(json: any): CreateChatCompletionResponse {
    return CreateChatCompletionResponseFromJSONTyped(json, false);
}

export function CreateChatCompletionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateChatCompletionResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'created': json['created'],
        'object': json['object'] == null ? undefined : json['object'],
        'model': json['model'] == null ? undefined : json['model'],
        'usage': CreateChatCompletionResponseUsageFromJSON(json['usage']),
        'choices': ((json['choices'] as Array<any>).map(CreateChatCompletionResponseChoiceFromJSON)),
    };
}

export function CreateChatCompletionResponseToJSON(value?: CreateChatCompletionResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'created': value['created'],
        'object': value['object'],
        'model': value['model'],
        'usage': CreateChatCompletionResponseUsageToJSON(value['usage']),
        'choices': ((value['choices'] as Array<any>).map(CreateChatCompletionResponseChoiceToJSON)),
    };
}

