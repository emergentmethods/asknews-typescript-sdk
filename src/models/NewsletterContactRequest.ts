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
 * @interface NewsletterContactRequest
 */
export interface NewsletterContactRequest {
    /**
     * 
     * @type {string}
     * @memberof NewsletterContactRequest
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof NewsletterContactRequest
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof NewsletterContactRequest
     */
    lastName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof NewsletterContactRequest
     */
    unsubscribed?: boolean;
}

/**
 * Check if a given object implements the NewsletterContactRequest interface.
 */
export function instanceOfNewsletterContactRequest(value: object): boolean {
    if (!('email' in value)) return false;
    return true;
}

export function NewsletterContactRequestFromJSON(json: any): NewsletterContactRequest {
    return NewsletterContactRequestFromJSONTyped(json, false);
}

export function NewsletterContactRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): NewsletterContactRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'email': json['email'],
        'firstName': json['first_name'] == null ? undefined : json['first_name'],
        'lastName': json['last_name'] == null ? undefined : json['last_name'],
        'unsubscribed': json['unsubscribed'] == null ? undefined : json['unsubscribed'],
    };
}

export function NewsletterContactRequestToJSON(value?: NewsletterContactRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'email': value['email'],
        'first_name': value['firstName'],
        'last_name': value['lastName'],
        'unsubscribed': value['unsubscribed'],
    };
}

