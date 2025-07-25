/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.19.6
 * Contact: contact@emergentmethods.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { CreateDeepNewsResponseStreamChunkChoice } from './CreateDeepNewsResponseStreamChunkChoice';
import {
    CreateDeepNewsResponseStreamChunkChoiceFromJSON,
    CreateDeepNewsResponseStreamChunkChoiceFromJSONTyped,
    CreateDeepNewsResponseStreamChunkChoiceToJSON,
    CreateDeepNewsResponseStreamChunkChoiceToJSONTyped,
} from './CreateDeepNewsResponseStreamChunkChoice';
import type { CreateDeepNewsResponseUsage } from './CreateDeepNewsResponseUsage';
import {
    CreateDeepNewsResponseUsageFromJSON,
    CreateDeepNewsResponseUsageFromJSONTyped,
    CreateDeepNewsResponseUsageToJSON,
    CreateDeepNewsResponseUsageToJSONTyped,
} from './CreateDeepNewsResponseUsage';

/**
 * 
 * @export
 * @interface CreateDeepNewsResponseStreamChunk
 */
export interface CreateDeepNewsResponseStreamChunk {
    /**
     * 
     * @type {string}
     * @memberof CreateDeepNewsResponseStreamChunk
     */
    id: string;
    /**
     * 
     * @type {number}
     * @memberof CreateDeepNewsResponseStreamChunk
     */
    created: number;
    /**
     * 
     * @type {string}
     * @memberof CreateDeepNewsResponseStreamChunk
     */
    object?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateDeepNewsResponseStreamChunk
     */
    model?: string;
    /**
     * 
     * @type {CreateDeepNewsResponseUsage}
     * @memberof CreateDeepNewsResponseStreamChunk
     */
    usage: CreateDeepNewsResponseUsage;
    /**
     * 
     * @type {Array<CreateDeepNewsResponseStreamChunkChoice>}
     * @memberof CreateDeepNewsResponseStreamChunk
     */
    choices: Array<CreateDeepNewsResponseStreamChunkChoice>;
}

/**
 * Check if a given object implements the CreateDeepNewsResponseStreamChunk interface.
 */
export function instanceOfCreateDeepNewsResponseStreamChunk(value: object): value is CreateDeepNewsResponseStreamChunk {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('created' in value) || value['created'] === undefined) return false;
    if (!('usage' in value) || value['usage'] === undefined) return false;
    if (!('choices' in value) || value['choices'] === undefined) return false;
    return true;
}

export function CreateDeepNewsResponseStreamChunkFromJSON(json: any): CreateDeepNewsResponseStreamChunk {
    return CreateDeepNewsResponseStreamChunkFromJSONTyped(json, false);
}

export function CreateDeepNewsResponseStreamChunkFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateDeepNewsResponseStreamChunk {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'created': json['created'],
        'object': json['object'] == null ? undefined : json['object'],
        'model': json['model'] == null ? undefined : json['model'],
        'usage': CreateDeepNewsResponseUsageFromJSON(json['usage']),
        'choices': ((json['choices'] as Array<any>).map(CreateDeepNewsResponseStreamChunkChoiceFromJSON)),
    };
}

export function CreateDeepNewsResponseStreamChunkToJSON(json: any): CreateDeepNewsResponseStreamChunk {
    return CreateDeepNewsResponseStreamChunkToJSONTyped(json, false);
}

export function CreateDeepNewsResponseStreamChunkToJSONTyped(value?: CreateDeepNewsResponseStreamChunk | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'created': value['created'],
        'object': value['object'],
        'model': value['model'],
        'usage': CreateDeepNewsResponseUsageToJSON(value['usage']),
        'choices': ((value['choices'] as Array<any>).map(CreateDeepNewsResponseStreamChunkChoiceToJSON)),
    };
}

