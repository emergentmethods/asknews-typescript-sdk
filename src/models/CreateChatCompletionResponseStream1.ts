/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.10.8
 * Contact: contact@emergentmethods.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { CreateChatCompletionResponseStreamChoice1 } from './CreateChatCompletionResponseStreamChoice1';
import {
    CreateChatCompletionResponseStreamChoice1FromJSON,
    CreateChatCompletionResponseStreamChoice1FromJSONTyped,
    CreateChatCompletionResponseStreamChoice1ToJSON,
} from './CreateChatCompletionResponseStreamChoice1';
import type { CreateChatCompletionResponseUsage1 } from './CreateChatCompletionResponseUsage1';
import {
    CreateChatCompletionResponseUsage1FromJSON,
    CreateChatCompletionResponseUsage1FromJSONTyped,
    CreateChatCompletionResponseUsage1ToJSON,
} from './CreateChatCompletionResponseUsage1';

/**
 * 
 * @export
 * @interface CreateChatCompletionResponseStream1
 */
export interface CreateChatCompletionResponseStream1 {
    /**
     * 
     * @type {string}
     * @memberof CreateChatCompletionResponseStream1
     */
    id: string;
    /**
     * 
     * @type {number}
     * @memberof CreateChatCompletionResponseStream1
     */
    created: number;
    /**
     * 
     * @type {string}
     * @memberof CreateChatCompletionResponseStream1
     */
    object?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateChatCompletionResponseStream1
     */
    model?: string;
    /**
     * 
     * @type {CreateChatCompletionResponseUsage1}
     * @memberof CreateChatCompletionResponseStream1
     */
    usage: CreateChatCompletionResponseUsage1;
    /**
     * 
     * @type {Array<CreateChatCompletionResponseStreamChoice1>}
     * @memberof CreateChatCompletionResponseStream1
     */
    choices: Array<CreateChatCompletionResponseStreamChoice1>;
}

/**
 * Check if a given object implements the CreateChatCompletionResponseStream1 interface.
 */
export function instanceOfCreateChatCompletionResponseStream1(value: object): boolean {
    if (!('id' in value)) return false;
    if (!('created' in value)) return false;
    if (!('usage' in value)) return false;
    if (!('choices' in value)) return false;
    return true;
}

export function CreateChatCompletionResponseStream1FromJSON(json: any): CreateChatCompletionResponseStream1 {
    return CreateChatCompletionResponseStream1FromJSONTyped(json, false);
}

export function CreateChatCompletionResponseStream1FromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateChatCompletionResponseStream1 {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'created': json['created'],
        'object': json['object'] == null ? undefined : json['object'],
        'model': json['model'] == null ? undefined : json['model'],
        'usage': CreateChatCompletionResponseUsage1FromJSON(json['usage']),
        'choices': ((json['choices'] as Array<any>).map(CreateChatCompletionResponseStreamChoice1FromJSON)),
    };
}

export function CreateChatCompletionResponseStream1ToJSON(value?: CreateChatCompletionResponseStream1 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'created': value['created'],
        'object': value['object'],
        'model': value['model'],
        'usage': CreateChatCompletionResponseUsage1ToJSON(value['usage']),
        'choices': ((value['choices'] as Array<any>).map(CreateChatCompletionResponseStreamChoice1ToJSON)),
    };
}

