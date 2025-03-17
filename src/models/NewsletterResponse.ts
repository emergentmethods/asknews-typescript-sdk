/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.18.2
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
 * @interface NewsletterResponse
 */
export interface NewsletterResponse {
    /**
     * 
     * @type {string}
     * @memberof NewsletterResponse
     */
    id: string;
    /**
     * 
     * @type {Date}
     * @memberof NewsletterResponse
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof NewsletterResponse
     */
    updatedAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof NewsletterResponse
     */
    userId: string;
    /**
     * 
     * @type {string}
     * @memberof NewsletterResponse
     */
    alertId?: string;
    /**
     * 
     * @type {string}
     * @memberof NewsletterResponse
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof NewsletterResponse
     */
    query: string;
    /**
     * 
     * @type {string}
     * @memberof NewsletterResponse
     */
    cron: string;
    /**
     * 
     * @type {string}
     * @memberof NewsletterResponse
     */
    model: string | null;
    /**
     * 
     * @type {string}
     * @memberof NewsletterResponse
     */
    subject: string | null;
    /**
     * 
     * @type {string}
     * @memberof NewsletterResponse
     */
    sender: string;
    /**
     * 
     * @type {string}
     * @memberof NewsletterResponse
     */
    logoUrl: string | null;
    /**
     * 
     * @type {string}
     * @memberof NewsletterResponse
     */
    replyTo: string | null;
    /**
     * 
     * @type {string}
     * @memberof NewsletterResponse
     */
    audienceId: string | null;
    /**
     * 
     * @type {string}
     * @memberof NewsletterResponse
     */
    resendApiKey: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof NewsletterResponse
     */
    _public?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof NewsletterResponse
     */
    active?: boolean;
}

/**
 * Check if a given object implements the NewsletterResponse interface.
 */
export function instanceOfNewsletterResponse(value: object): boolean {
    if (!('id' in value)) return false;
    if (!('userId' in value)) return false;
    if (!('name' in value)) return false;
    if (!('query' in value)) return false;
    if (!('cron' in value)) return false;
    if (!('model' in value)) return false;
    if (!('subject' in value)) return false;
    if (!('sender' in value)) return false;
    if (!('logoUrl' in value)) return false;
    if (!('replyTo' in value)) return false;
    if (!('audienceId' in value)) return false;
    if (!('resendApiKey' in value)) return false;
    return true;
}

export function NewsletterResponseFromJSON(json: any): NewsletterResponse {
    return NewsletterResponseFromJSONTyped(json, false);
}

export function NewsletterResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): NewsletterResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'createdAt': json['created_at'] == null ? undefined : (new Date(json['created_at'])),
        'updatedAt': json['updated_at'] == null ? undefined : (new Date(json['updated_at'])),
        'userId': json['user_id'],
        'alertId': json['alert_id'] == null ? undefined : json['alert_id'],
        'name': json['name'],
        'query': json['query'],
        'cron': json['cron'],
        'model': json['model'],
        'subject': json['subject'],
        'sender': json['sender'],
        'logoUrl': json['logo_url'],
        'replyTo': json['reply_to'],
        'audienceId': json['audience_id'],
        'resendApiKey': json['resend_api_key'],
        '_public': json['public'] == null ? undefined : json['public'],
        'active': json['active'] == null ? undefined : json['active'],
    };
}

export function NewsletterResponseToJSON(value?: NewsletterResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'created_at': value['createdAt'] == null ? undefined : ((value['createdAt'] as any).toISOString()),
        'updated_at': value['updatedAt'] == null ? undefined : ((value['updatedAt'] as any).toISOString()),
        'user_id': value['userId'],
        'alert_id': value['alertId'],
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

