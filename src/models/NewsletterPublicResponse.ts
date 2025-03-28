/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.18.6
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
 * @interface NewsletterPublicResponse
 */
export interface NewsletterPublicResponse {
    /**
     * 
     * @type {string}
     * @memberof NewsletterPublicResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof NewsletterPublicResponse
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof NewsletterPublicResponse
     */
    query: string;
}

/**
 * Check if a given object implements the NewsletterPublicResponse interface.
 */
export function instanceOfNewsletterPublicResponse(value: object): boolean {
    if (!('id' in value)) return false;
    if (!('name' in value)) return false;
    if (!('query' in value)) return false;
    return true;
}

export function NewsletterPublicResponseFromJSON(json: any): NewsletterPublicResponse {
    return NewsletterPublicResponseFromJSONTyped(json, false);
}

export function NewsletterPublicResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): NewsletterPublicResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'query': json['query'],
    };
}

export function NewsletterPublicResponseToJSON(value?: NewsletterPublicResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'name': value['name'],
        'query': value['query'],
    };
}

