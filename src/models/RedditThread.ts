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
import type { Classification } from './Classification';
import {
    ClassificationFromJSON,
    ClassificationFromJSONTyped,
    ClassificationToJSON,
} from './Classification';
import type { RedditComment } from './RedditComment';
import {
    RedditCommentFromJSON,
    RedditCommentFromJSONTyped,
    RedditCommentToJSON,
} from './RedditComment';
import type { RedditEntities } from './RedditEntities';
import {
    RedditEntitiesFromJSON,
    RedditEntitiesFromJSONTyped,
    RedditEntitiesToJSON,
} from './RedditEntities';
import type { Sentiment } from './Sentiment';
import {
    SentimentFromJSON,
    SentimentFromJSONTyped,
    SentimentToJSON,
} from './Sentiment';

/**
 * 
 * @export
 * @interface RedditThread
 */
export interface RedditThread {
    /**
     * 
     * @type {string}
     * @memberof RedditThread
     */
    author: string;
    /**
     * 
     * @type {number}
     * @memberof RedditThread
     */
    authorCommentKarma: number;
    /**
     * 
     * @type {number}
     * @memberof RedditThread
     */
    authorLinkKarma: number;
    /**
     * 
     * @type {string}
     * @memberof RedditThread
     */
    body: string;
    /**
     * 
     * @type {Classification}
     * @memberof RedditThread
     */
    classification: Classification;
    /**
     * 
     * @type {Array<RedditComment>}
     * @memberof RedditThread
     */
    comments: Array<RedditComment>;
    /**
     * 
     * @type {number}
     * @memberof RedditThread
     */
    commentsCount: number;
    /**
     * 
     * @type {Date}
     * @memberof RedditThread
     */
    date: Date;
    /**
     * 
     * @type {RedditEntities}
     * @memberof RedditThread
     */
    entities: RedditEntities;
    /**
     * 
     * @type {string}
     * @memberof RedditThread
     */
    id: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof RedditThread
     */
    keyTakeaways?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof RedditThread
     */
    keywords: Array<string>;
    /**
     * 
     * @type {Sentiment}
     * @memberof RedditThread
     */
    sentiment: Sentiment;
    /**
     * 
     * @type {string}
     * @memberof RedditThread
     */
    subredditName: string;
    /**
     * 
     * @type {string}
     * @memberof RedditThread
     */
    subredditUrl: string;
    /**
     * 
     * @type {string}
     * @memberof RedditThread
     */
    summary: string;
    /**
     * 
     * @type {string}
     * @memberof RedditThread
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof RedditThread
     */
    topic: string;
    /**
     * 
     * @type {number}
     * @memberof RedditThread
     */
    upvotes: number;
    /**
     * 
     * @type {string}
     * @memberof RedditThread
     */
    url: string;
    /**
     * 
     * @type {string}
     * @memberof RedditThread
     */
    mainSpeculation?: string;
}

/**
 * Check if a given object implements the RedditThread interface.
 */
export function instanceOfRedditThread(value: object): boolean {
    if (!('author' in value)) return false;
    if (!('authorCommentKarma' in value)) return false;
    if (!('authorLinkKarma' in value)) return false;
    if (!('body' in value)) return false;
    if (!('classification' in value)) return false;
    if (!('comments' in value)) return false;
    if (!('commentsCount' in value)) return false;
    if (!('date' in value)) return false;
    if (!('entities' in value)) return false;
    if (!('id' in value)) return false;
    if (!('keywords' in value)) return false;
    if (!('sentiment' in value)) return false;
    if (!('subredditName' in value)) return false;
    if (!('subredditUrl' in value)) return false;
    if (!('summary' in value)) return false;
    if (!('title' in value)) return false;
    if (!('topic' in value)) return false;
    if (!('upvotes' in value)) return false;
    if (!('url' in value)) return false;
    return true;
}

export function RedditThreadFromJSON(json: any): RedditThread {
    return RedditThreadFromJSONTyped(json, false);
}

export function RedditThreadFromJSONTyped(json: any, ignoreDiscriminator: boolean): RedditThread {
    if (json == null) {
        return json;
    }
    return {
        
        'author': json['author'],
        'authorCommentKarma': json['author_comment_karma'],
        'authorLinkKarma': json['author_link_karma'],
        'body': json['body'],
        'classification': ClassificationFromJSON(json['classification']),
        'comments': ((json['comments'] as Array<any>).map(RedditCommentFromJSON)),
        'commentsCount': json['comments_count'],
        'date': (new Date(json['date'])),
        'entities': RedditEntitiesFromJSON(json['entities']),
        'id': json['id'],
        'keyTakeaways': json['key_takeaways'] == null ? undefined : json['key_takeaways'],
        'keywords': json['keywords'],
        'sentiment': SentimentFromJSON(json['sentiment']),
        'subredditName': json['subreddit_name'],
        'subredditUrl': json['subreddit_url'],
        'summary': json['summary'],
        'title': json['title'],
        'topic': json['topic'],
        'upvotes': json['upvotes'],
        'url': json['url'],
        'mainSpeculation': json['main_speculation'] == null ? undefined : json['main_speculation'],
    };
}

export function RedditThreadToJSON(value?: RedditThread | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'author': value['author'],
        'author_comment_karma': value['authorCommentKarma'],
        'author_link_karma': value['authorLinkKarma'],
        'body': value['body'],
        'classification': ClassificationToJSON(value['classification']),
        'comments': ((value['comments'] as Array<any>).map(RedditCommentToJSON)),
        'comments_count': value['commentsCount'],
        'date': ((value['date']).toISOString()),
        'entities': RedditEntitiesToJSON(value['entities']),
        'id': value['id'],
        'key_takeaways': value['keyTakeaways'],
        'keywords': value['keywords'],
        'sentiment': SentimentToJSON(value['sentiment']),
        'subreddit_name': value['subredditName'],
        'subreddit_url': value['subredditUrl'],
        'summary': value['summary'],
        'title': value['title'],
        'topic': value['topic'],
        'upvotes': value['upvotes'],
        'url': value['url'],
        'main_speculation': value['mainSpeculation'],
    };
}

