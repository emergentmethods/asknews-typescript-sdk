/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.17.3
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
 * @interface WebhookParams
 */
export interface WebhookParams {
    /**
     * The URL to send the webhook when the alert triggers
     * @type {string}
     * @memberof WebhookParams
     */
    url: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof WebhookParams
     */
    headers?: { [key: string]: string; };
    /**
     * 
     * @type {object}
     * @memberof WebhookParams
     */
    payload?: object;
}

/**
 * Check if a given object implements the WebhookParams interface.
 */
export function instanceOfWebhookParams(value: object): boolean {
    if (!('url' in value)) return false;
    return true;
}

export function WebhookParamsFromJSON(json: any): WebhookParams {
    return WebhookParamsFromJSONTyped(json, false);
}

export function WebhookParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookParams {
    if (json == null) {
        return json;
    }
    return {
        
        'url': json['url'],
        'headers': json['headers'] == null ? undefined : json['headers'],
        'payload': json['payload'] == null ? undefined : json['payload'],
    };
}

export function WebhookParamsToJSON(value?: WebhookParams | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'url': value['url'],
        'headers': value['headers'],
        'payload': value['payload'],
    };
}

