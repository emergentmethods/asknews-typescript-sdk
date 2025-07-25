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
import type { ReplyTo } from './ReplyTo';
import {
    ReplyToFromJSON,
    ReplyToFromJSONTyped,
    ReplyToToJSON,
    ReplyToToJSONTyped,
} from './ReplyTo';

/**
 * 
 * @export
 * @interface ResendBroadcastParams
 */
export interface ResendBroadcastParams {
    /**
     * The sender email address, use the format: Your Name <sender@domain.com>
     * @type {string}
     * @memberof ResendBroadcastParams
     */
    sender: string;
    /**
     * 
     * @type {ReplyTo}
     * @memberof ResendBroadcastParams
     */
    replyTo?: ReplyTo | null;
    /**
     * 
     * @type {string}
     * @memberof ResendBroadcastParams
     */
    subject?: string | null;
    /**
     * The audience id that the broadcast will be sent to
     * @type {string}
     * @memberof ResendBroadcastParams
     */
    audienceId: string;
    /**
     * Resend API key to use
     * @type {string}
     * @memberof ResendBroadcastParams
     */
    resendApiKey: string;
}

/**
 * Check if a given object implements the ResendBroadcastParams interface.
 */
export function instanceOfResendBroadcastParams(value: object): value is ResendBroadcastParams {
    if (!('sender' in value) || value['sender'] === undefined) return false;
    if (!('audienceId' in value) || value['audienceId'] === undefined) return false;
    if (!('resendApiKey' in value) || value['resendApiKey'] === undefined) return false;
    return true;
}

export function ResendBroadcastParamsFromJSON(json: any): ResendBroadcastParams {
    return ResendBroadcastParamsFromJSONTyped(json, false);
}

export function ResendBroadcastParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResendBroadcastParams {
    if (json == null) {
        return json;
    }
    return {
        
        'sender': json['sender'],
        'replyTo': json['reply_to'] == null ? undefined : ReplyToFromJSON(json['reply_to']),
        'subject': json['subject'] == null ? undefined : json['subject'],
        'audienceId': json['audience_id'],
        'resendApiKey': json['resend_api_key'],
    };
}

export function ResendBroadcastParamsToJSON(json: any): ResendBroadcastParams {
    return ResendBroadcastParamsToJSONTyped(json, false);
}

export function ResendBroadcastParamsToJSONTyped(value?: ResendBroadcastParams | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'sender': value['sender'],
        'reply_to': ReplyToToJSON(value['replyTo']),
        'subject': value['subject'],
        'audience_id': value['audienceId'],
        'resend_api_key': value['resendApiKey'],
    };
}

