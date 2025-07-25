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
import type { CreateDeepNewsRequestMessage } from './CreateDeepNewsRequestMessage';
import {
    CreateDeepNewsRequestMessageFromJSON,
    CreateDeepNewsRequestMessageFromJSONTyped,
    CreateDeepNewsRequestMessageToJSON,
    CreateDeepNewsRequestMessageToJSONTyped,
} from './CreateDeepNewsRequestMessage';

/**
 * 
 * @export
 * @interface CreateDeepNewsResponseStreamChunkChoice
 */
export interface CreateDeepNewsResponseStreamChunkChoice {
    /**
     * 
     * @type {number}
     * @memberof CreateDeepNewsResponseStreamChunkChoice
     */
    index: number;
    /**
     * 
     * @type {CreateDeepNewsRequestMessage}
     * @memberof CreateDeepNewsResponseStreamChunkChoice
     */
    delta: CreateDeepNewsRequestMessage;
    /**
     * 
     * @type {string}
     * @memberof CreateDeepNewsResponseStreamChunkChoice
     */
    finishReason?: string | null;
}

/**
 * Check if a given object implements the CreateDeepNewsResponseStreamChunkChoice interface.
 */
export function instanceOfCreateDeepNewsResponseStreamChunkChoice(value: object): value is CreateDeepNewsResponseStreamChunkChoice {
    if (!('index' in value) || value['index'] === undefined) return false;
    if (!('delta' in value) || value['delta'] === undefined) return false;
    return true;
}

export function CreateDeepNewsResponseStreamChunkChoiceFromJSON(json: any): CreateDeepNewsResponseStreamChunkChoice {
    return CreateDeepNewsResponseStreamChunkChoiceFromJSONTyped(json, false);
}

export function CreateDeepNewsResponseStreamChunkChoiceFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateDeepNewsResponseStreamChunkChoice {
    if (json == null) {
        return json;
    }
    return {
        
        'index': json['index'],
        'delta': CreateDeepNewsRequestMessageFromJSON(json['delta']),
        'finishReason': json['finish_reason'] == null ? undefined : json['finish_reason'],
    };
}

export function CreateDeepNewsResponseStreamChunkChoiceToJSON(json: any): CreateDeepNewsResponseStreamChunkChoice {
    return CreateDeepNewsResponseStreamChunkChoiceToJSONTyped(json, false);
}

export function CreateDeepNewsResponseStreamChunkChoiceToJSONTyped(value?: CreateDeepNewsResponseStreamChunkChoice | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'index': value['index'],
        'delta': CreateDeepNewsRequestMessageToJSON(value['delta']),
        'finish_reason': value['finishReason'],
    };
}

