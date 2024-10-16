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
import type { CreateChatCompletionResponse } from './CreateChatCompletionResponse';
import {
    CreateChatCompletionResponseFromJSON,
    CreateChatCompletionResponseFromJSONTyped,
    CreateChatCompletionResponseToJSON,
} from './CreateChatCompletionResponse';
import type { CreateChatCompletionResponseChoice } from './CreateChatCompletionResponseChoice';
import {
    CreateChatCompletionResponseChoiceFromJSON,
    CreateChatCompletionResponseChoiceFromJSONTyped,
    CreateChatCompletionResponseChoiceToJSON,
} from './CreateChatCompletionResponseChoice';
import type { CreateChatCompletionResponseChoice1 } from './CreateChatCompletionResponseChoice1';
import {
    CreateChatCompletionResponseChoice1FromJSON,
    CreateChatCompletionResponseChoice1FromJSONTyped,
    CreateChatCompletionResponseChoice1ToJSON,
} from './CreateChatCompletionResponseChoice1';
import type { CreateChatCompletionResponseStream } from './CreateChatCompletionResponseStream';
import {
    CreateChatCompletionResponseStreamFromJSON,
    CreateChatCompletionResponseStreamFromJSONTyped,
    CreateChatCompletionResponseStreamToJSON,
} from './CreateChatCompletionResponseStream';
import type { CreateChatCompletionResponseUsage } from './CreateChatCompletionResponseUsage';
import {
    CreateChatCompletionResponseUsageFromJSON,
    CreateChatCompletionResponseUsageFromJSONTyped,
    CreateChatCompletionResponseUsageToJSON,
} from './CreateChatCompletionResponseUsage';
import type { CreateChatCompletionResponseUsage1 } from './CreateChatCompletionResponseUsage1';
import {
    CreateChatCompletionResponseUsage1FromJSON,
    CreateChatCompletionResponseUsage1FromJSONTyped,
    CreateChatCompletionResponseUsage1ToJSON,
} from './CreateChatCompletionResponseUsage1';

/**
 * 
 * @export
 * @interface CreateChatCompletionResponse1
 */
export interface CreateChatCompletionResponse1 {
    /**
     * 
     * @type {string}
     * @memberof CreateChatCompletionResponse1
     */
    id: string;
    /**
     * 
     * @type {number}
     * @memberof CreateChatCompletionResponse1
     */
    created: number;
    /**
     * 
     * @type {string}
     * @memberof CreateChatCompletionResponse1
     */
    object?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateChatCompletionResponse1
     */
    model?: string;
    /**
     * 
     * @type {CreateChatCompletionResponseUsage1}
     * @memberof CreateChatCompletionResponse1
     */
    usage: CreateChatCompletionResponseUsage1;
    /**
     * 
     * @type {Array<CreateChatCompletionResponseChoice1>}
     * @memberof CreateChatCompletionResponse1
     */
    choices: Array<CreateChatCompletionResponseChoice1>;
}

/**
 * Check if a given object implements the CreateChatCompletionResponse1 interface.
 */
export function instanceOfCreateChatCompletionResponse1(value: object): boolean {
    if (!('id' in value)) return false;
    if (!('created' in value)) return false;
    if (!('usage' in value)) return false;
    if (!('choices' in value)) return false;
    return true;
}

export function CreateChatCompletionResponse1FromJSON(json: any): CreateChatCompletionResponse1 {
    return CreateChatCompletionResponse1FromJSONTyped(json, false);
}

export function CreateChatCompletionResponse1FromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateChatCompletionResponse1 {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'created': json['created'],
        'object': json['object'] == null ? undefined : json['object'],
        'model': json['model'] == null ? undefined : json['model'],
        'usage': CreateChatCompletionResponseUsage1FromJSON(json['usage']),
        'choices': ((json['choices'] as Array<any>).map(CreateChatCompletionResponseChoice1FromJSON)),
    };
}

export function CreateChatCompletionResponse1ToJSON(value?: CreateChatCompletionResponse1 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'created': value['created'],
        'object': value['object'],
        'model': value['model'],
        'usage': CreateChatCompletionResponseUsage1ToJSON(value['usage']),
        'choices': ((value['choices'] as Array<any>).map(CreateChatCompletionResponseChoice1ToJSON)),
    };
}

