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
 * @interface NewsletterContactResponse
 */
export interface NewsletterContactResponse {
    /**
     * 
     * @type {string}
     * @memberof NewsletterContactResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof NewsletterContactResponse
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof NewsletterContactResponse
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof NewsletterContactResponse
     */
    lastName?: string;
    /**
     * 
     * @type {string}
     * @memberof NewsletterContactResponse
     */
    createdAt: string;
    /**
     * 
     * @type {boolean}
     * @memberof NewsletterContactResponse
     */
    unsubscribed: boolean;
}

/**
 * Check if a given object implements the NewsletterContactResponse interface.
 */
export function instanceOfNewsletterContactResponse(value: object): boolean {
    if (!('id' in value)) return false;
    if (!('email' in value)) return false;
    if (!('createdAt' in value)) return false;
    if (!('unsubscribed' in value)) return false;
    return true;
}

export function NewsletterContactResponseFromJSON(json: any): NewsletterContactResponse {
    return NewsletterContactResponseFromJSONTyped(json, false);
}

export function NewsletterContactResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): NewsletterContactResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'email': json['email'],
        'firstName': json['first_name'] == null ? undefined : json['first_name'],
        'lastName': json['last_name'] == null ? undefined : json['last_name'],
        'createdAt': json['created_at'],
        'unsubscribed': json['unsubscribed'],
    };
}

export function NewsletterContactResponseToJSON(value?: NewsletterContactResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'email': value['email'],
        'first_name': value['firstName'],
        'last_name': value['lastName'],
        'created_at': value['createdAt'],
        'unsubscribed': value['unsubscribed'],
    };
}

