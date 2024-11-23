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
import type { CreateChatCompletionRequestMessage } from './CreateChatCompletionRequestMessage';
import {
    CreateChatCompletionRequestMessageFromJSON,
    CreateChatCompletionRequestMessageFromJSONTyped,
    CreateChatCompletionRequestMessageToJSON,
} from './CreateChatCompletionRequestMessage';
import type { FilterParams } from './FilterParams';
import {
    FilterParamsFromJSON,
    FilterParamsFromJSONTyped,
    FilterParamsToJSON,
} from './FilterParams';
import type { Stop } from './Stop';
import {
    StopFromJSON,
    StopFromJSONTyped,
    StopToJSON,
} from './Stop';
import type { ThreadId } from './ThreadId';
import {
    ThreadIdFromJSON,
    ThreadIdFromJSONTyped,
    ThreadIdToJSON,
} from './ThreadId';
import type { User } from './User';
import {
    UserFromJSON,
    UserFromJSONTyped,
    UserToJSON,
} from './User';

/**
 * 
 * @export
 * @interface CreateChatCompletionRequest
 */
export interface CreateChatCompletionRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateChatCompletionRequest
     */
    model?: string;
    /**
     * 
     * @type {Array<CreateChatCompletionRequestMessage>}
     * @memberof CreateChatCompletionRequest
     */
    messages: Array<CreateChatCompletionRequestMessage>;
    /**
     * 
     * @type {any}
     * @memberof CreateChatCompletionRequest
     */
    temperature?: any;
    /**
     * 
     * @type {any}
     * @memberof CreateChatCompletionRequest
     */
    topP?: any;
    /**
     * 
     * @type {any}
     * @memberof CreateChatCompletionRequest
     */
    n?: any;
    /**
     * 
     * @type {any}
     * @memberof CreateChatCompletionRequest
     */
    stream?: any;
    /**
     * 
     * @type {Stop}
     * @memberof CreateChatCompletionRequest
     */
    stop?: Stop;
    /**
     * 
     * @type {any}
     * @memberof CreateChatCompletionRequest
     */
    maxTokens?: any;
    /**
     * 
     * @type {any}
     * @memberof CreateChatCompletionRequest
     */
    presencePenalty?: any;
    /**
     * 
     * @type {any}
     * @memberof CreateChatCompletionRequest
     */
    frequencyPenalty?: any;
    /**
     * 
     * @type {ThreadId}
     * @memberof CreateChatCompletionRequest
     */
    threadId?: ThreadId;
    /**
     * 
     * @type {User}
     * @memberof CreateChatCompletionRequest
     */
    user?: User;
    /**
     * 
     * @type {any}
     * @memberof CreateChatCompletionRequest
     */
    inlineCitations?: CreateChatCompletionRequestInlineCitationsEnum;
    /**
     * 
     * @type {any}
     * @memberof CreateChatCompletionRequest
     */
    appendReferences?: any;
    /**
     * 
     * @type {any}
     * @memberof CreateChatCompletionRequest
     */
    journalistMode?: any;
    /**
     * 
     * @type {any}
     * @memberof CreateChatCompletionRequest
     */
    asknewsWatermark?: any;
    /**
     * 
     * @type {any}
     * @memberof CreateChatCompletionRequest
     */
    conversationalAwareness?: any;
    /**
     * 
     * @type {FilterParams}
     * @memberof CreateChatCompletionRequest
     */
    filterParams?: FilterParams;
}


/**
 * @export
 */
export const CreateChatCompletionRequestInlineCitationsEnum = {
    Numbered: 'numbered',
    MarkdownLink: 'markdown_link',
    None: 'none'
} as const;
export type CreateChatCompletionRequestInlineCitationsEnum = typeof CreateChatCompletionRequestInlineCitationsEnum[keyof typeof CreateChatCompletionRequestInlineCitationsEnum];


/**
 * Check if a given object implements the CreateChatCompletionRequest interface.
 */
export function instanceOfCreateChatCompletionRequest(value: object): boolean {
    if (!('messages' in value)) return false;
    return true;
}

export function CreateChatCompletionRequestFromJSON(json: any): CreateChatCompletionRequest {
    return CreateChatCompletionRequestFromJSONTyped(json, false);
}

export function CreateChatCompletionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateChatCompletionRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'model': json['model'] == null ? undefined : json['model'],
        'messages': ((json['messages'] as Array<any>).map(CreateChatCompletionRequestMessageFromJSON)),
        'temperature': json['temperature'] == null ? undefined : json['temperature'],
        'topP': json['top_p'] == null ? undefined : json['top_p'],
        'n': json['n'] == null ? undefined : json['n'],
        'stream': json['stream'] == null ? undefined : json['stream'],
        'stop': json['stop'] == null ? undefined : StopFromJSON(json['stop']),
        'maxTokens': json['max_tokens'] == null ? undefined : json['max_tokens'],
        'presencePenalty': json['presence_penalty'] == null ? undefined : json['presence_penalty'],
        'frequencyPenalty': json['frequency_penalty'] == null ? undefined : json['frequency_penalty'],
        'threadId': json['thread_id'] == null ? undefined : ThreadIdFromJSON(json['thread_id']),
        'user': json['user'] == null ? undefined : UserFromJSON(json['user']),
        'inlineCitations': json['inline_citations'] == null ? undefined : json['inline_citations'],
        'appendReferences': json['append_references'] == null ? undefined : json['append_references'],
        'journalistMode': json['journalist_mode'] == null ? undefined : json['journalist_mode'],
        'asknewsWatermark': json['asknews_watermark'] == null ? undefined : json['asknews_watermark'],
        'conversationalAwareness': json['conversational_awareness'] == null ? undefined : json['conversational_awareness'],
        'filterParams': json['filter_params'] == null ? undefined : FilterParamsFromJSON(json['filter_params']),
    };
}

export function CreateChatCompletionRequestToJSON(value?: CreateChatCompletionRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'model': value['model'],
        'messages': ((value['messages'] as Array<any>).map(CreateChatCompletionRequestMessageToJSON)),
        'temperature': value['temperature'],
        'top_p': value['topP'],
        'n': value['n'],
        'stream': value['stream'],
        'stop': StopToJSON(value['stop']),
        'max_tokens': value['maxTokens'],
        'presence_penalty': value['presencePenalty'],
        'frequency_penalty': value['frequencyPenalty'],
        'thread_id': ThreadIdToJSON(value['threadId']),
        'user': UserToJSON(value['user']),
        'inline_citations': value['inlineCitations'],
        'append_references': value['appendReferences'],
        'journalist_mode': value['journalistMode'],
        'asknews_watermark': value['asknewsWatermark'],
        'conversational_awareness': value['conversationalAwareness'],
        'filter_params': FilterParamsToJSON(value['filterParams']),
    };
}

