/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.15.9
 * Contact: contact@emergentmethods.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { Sentiment } from './Sentiment';
import {
    SentimentFromJSON,
    SentimentFromJSONTyped,
    SentimentToJSON,
} from './Sentiment';

/**
 * 
 * @export
 * @interface RedditPerspective
 */
export interface RedditPerspective {
    /**
     * 
     * @type {Sentiment}
     * @memberof RedditPerspective
     */
    sentiment: Sentiment;
    /**
     * 
     * @type {boolean}
     * @memberof RedditPerspective
     */
    relevant: boolean;
    /**
     * 
     * @type {string}
     * @memberof RedditPerspective
     */
    summary: string;
}

/**
 * Check if a given object implements the RedditPerspective interface.
 */
export function instanceOfRedditPerspective(value: object): boolean {
    if (!('sentiment' in value)) return false;
    if (!('relevant' in value)) return false;
    if (!('summary' in value)) return false;
    return true;
}

export function RedditPerspectiveFromJSON(json: any): RedditPerspective {
    return RedditPerspectiveFromJSONTyped(json, false);
}

export function RedditPerspectiveFromJSONTyped(json: any, ignoreDiscriminator: boolean): RedditPerspective {
    if (json == null) {
        return json;
    }
    return {
        
        'sentiment': SentimentFromJSON(json['sentiment']),
        'relevant': json['relevant'],
        'summary': json['summary'],
    };
}

export function RedditPerspectiveToJSON(value?: RedditPerspective | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'sentiment': SentimentToJSON(value['sentiment']),
        'relevant': value['relevant'],
        'summary': value['summary'],
    };
}

