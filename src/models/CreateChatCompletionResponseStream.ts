/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.15.0
 * Contact: contact@emergentmethods.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { CreateChatCompletionResponseStreamChoice } from './CreateChatCompletionResponseStreamChoice';
import {
    CreateChatCompletionResponseStreamChoiceFromJSON,
    CreateChatCompletionResponseStreamChoiceFromJSONTyped,
    CreateChatCompletionResponseStreamChoiceToJSON,
} from './CreateChatCompletionResponseStreamChoice';
import type { CreateChatCompletionResponseUsage } from './CreateChatCompletionResponseUsage';
import {
    CreateChatCompletionResponseUsageFromJSON,
    CreateChatCompletionResponseUsageFromJSONTyped,
    CreateChatCompletionResponseUsageToJSON,
} from './CreateChatCompletionResponseUsage';

/**
 * 
 * @export
 * @interface CreateChatCompletionResponseStream
 */
export interface CreateChatCompletionResponseStream {
    /**
     * 
     * @type {string}
     * @memberof CreateChatCompletionResponseStream
     */
    id: string;
    /**
     * 
     * @type {number}
     * @memberof CreateChatCompletionResponseStream
     */
    created: number;
    /**
     * 
     * @type {string}
     * @memberof CreateChatCompletionResponseStream
     */
    object?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateChatCompletionResponseStream
     */
    model?: string;
    /**
     * 
     * @type {CreateChatCompletionResponseUsage}
     * @memberof CreateChatCompletionResponseStream
     */
    usage: CreateChatCompletionResponseUsage;
    /**
     * 
     * @type {Array<CreateChatCompletionResponseStreamChoice>}
     * @memberof CreateChatCompletionResponseStream
     */
    choices: Array<CreateChatCompletionResponseStreamChoice>;
}

/**
 * Check if a given object implements the CreateChatCompletionResponseStream interface.
 */
export function instanceOfCreateChatCompletionResponseStream(value: object): boolean {
    if (!('id' in value)) return false;
    if (!('created' in value)) return false;
    if (!('usage' in value)) return false;
    if (!('choices' in value)) return false;
    return true;
}

export function CreateChatCompletionResponseStreamFromJSON(json: any): CreateChatCompletionResponseStream {
    return CreateChatCompletionResponseStreamFromJSONTyped(json, false);
}

export function CreateChatCompletionResponseStreamFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateChatCompletionResponseStream {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'created': json['created'],
        'object': json['object'] == null ? undefined : json['object'],
        'model': json['model'] == null ? undefined : json['model'],
        'usage': CreateChatCompletionResponseUsageFromJSON(json['usage']),
        'choices': ((json['choices'] as Array<any>).map(CreateChatCompletionResponseStreamChoiceFromJSON)),
    };
}

export function CreateChatCompletionResponseStreamToJSON(value?: CreateChatCompletionResponseStream | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'created': value['created'],
        'object': value['object'],
        'model': value['model'],
        'usage': CreateChatCompletionResponseUsageToJSON(value['usage']),
        'choices': ((value['choices'] as Array<any>).map(CreateChatCompletionResponseStreamChoiceToJSON)),
    };
}

