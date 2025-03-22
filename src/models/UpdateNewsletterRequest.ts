/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.18.3
 * Contact: contact@emergentmethods.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface UpdateNewsletterRequest
 */
export interface UpdateNewsletterRequest {
    /**
     * 
     * @type {string}
     * @memberof UpdateNewsletterRequest
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateNewsletterRequest
     */
    query?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateNewsletterRequest
     */
    cron?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateNewsletterRequest
     */
    model?: UpdateNewsletterRequestModelEnum;
    /**
     * 
     * @type {string}
     * @memberof UpdateNewsletterRequest
     */
    subject?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateNewsletterRequest
     */
    sender?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateNewsletterRequest
     */
    logoUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateNewsletterRequest
     */
    replyTo?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateNewsletterRequest
     */
    audienceId?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateNewsletterRequest
     */
    resendApiKey?: string;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateNewsletterRequest
     */
    _public?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateNewsletterRequest
     */
    active?: boolean;
}


/**
 * @export
 */
export const UpdateNewsletterRequestModelEnum = {
    Gpt4o: 'gpt-4o',
    Gpt4oMini: 'gpt-4o-mini',
    Claude35SonnetLatest: 'claude-3-5-sonnet-latest',
    MetaLlamaMetaLlama31405BInstruct: 'meta-llama/Meta-Llama-3.1-405B-Instruct',
    MetaLlamaMetaLlama3370BInstruct: 'meta-llama/Meta-Llama-3.3-70B-Instruct'
} as const;
export type UpdateNewsletterRequestModelEnum = typeof UpdateNewsletterRequestModelEnum[keyof typeof UpdateNewsletterRequestModelEnum];


/**
 * Check if a given object implements the UpdateNewsletterRequest interface.
 */
export function instanceOfUpdateNewsletterRequest(value: object): boolean {
    return true;
}

export function UpdateNewsletterRequestFromJSON(json: any): UpdateNewsletterRequest {
    return UpdateNewsletterRequestFromJSONTyped(json, false);
}

export function UpdateNewsletterRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateNewsletterRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'query': json['query'] == null ? undefined : json['query'],
        'cron': json['cron'] == null ? undefined : json['cron'],
        'model': json['model'] == null ? undefined : json['model'],
        'subject': json['subject'] == null ? undefined : json['subject'],
        'sender': json['sender'] == null ? undefined : json['sender'],
        'logoUrl': json['logo_url'] == null ? undefined : json['logo_url'],
        'replyTo': json['reply_to'] == null ? undefined : json['reply_to'],
        'audienceId': json['audience_id'] == null ? undefined : json['audience_id'],
        'resendApiKey': json['resend_api_key'] == null ? undefined : json['resend_api_key'],
        '_public': json['public'] == null ? undefined : json['public'],
        'active': json['active'] == null ? undefined : json['active'],
    };
}

export function UpdateNewsletterRequestToJSON(value?: UpdateNewsletterRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'query': value['query'],
        'cron': value['cron'],
        'model': value['model'],
        'subject': value['subject'],
        'sender': value['sender'],
        'logo_url': value['logoUrl'],
        'reply_to': value['replyTo'],
        'audience_id': value['audienceId'],
        'resend_api_key': value['resendApiKey'],
        'public': value['_public'],
        'active': value['active'],
    };
}

