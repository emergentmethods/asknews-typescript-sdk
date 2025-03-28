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
 * @interface RedditComment
 */
export interface RedditComment {
    /**
     * 
     * @type {string}
     * @memberof RedditComment
     */
    author: string;
    /**
     * 
     * @type {string}
     * @memberof RedditComment
     */
    body: string;
    /**
     * 
     * @type {Date}
     * @memberof RedditComment
     */
    date: Date;
    /**
     * 
     * @type {number}
     * @memberof RedditComment
     */
    upvotes: number;
}

/**
 * Check if a given object implements the RedditComment interface.
 */
export function instanceOfRedditComment(value: object): boolean {
    if (!('author' in value)) return false;
    if (!('body' in value)) return false;
    if (!('date' in value)) return false;
    if (!('upvotes' in value)) return false;
    return true;
}

export function RedditCommentFromJSON(json: any): RedditComment {
    return RedditCommentFromJSONTyped(json, false);
}

export function RedditCommentFromJSONTyped(json: any, ignoreDiscriminator: boolean): RedditComment {
    if (json == null) {
        return json;
    }
    return {
        
        'author': json['author'],
        'body': json['body'],
        'date': (new Date(json['date'])),
        'upvotes': json['upvotes'],
    };
}

export function RedditCommentToJSON(value?: RedditComment | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'author': value['author'],
        'body': value['body'],
        'date': ((value['date']).toISOString()),
        'upvotes': value['upvotes'],
    };
}

