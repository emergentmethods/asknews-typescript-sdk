/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.8.2
 * Contact: contact@emergentmethods.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { ClusterProbabilities } from './ClusterProbabilities';
import {
    ClusterProbabilitiesFromJSON,
    ClusterProbabilitiesFromJSONTyped,
    ClusterProbabilitiesToJSON,
} from './ClusterProbabilities';
import type { StoryUpdate } from './StoryUpdate';
import {
    StoryUpdateFromJSON,
    StoryUpdateFromJSONTyped,
    StoryUpdateToJSON,
} from './StoryUpdate';

/**
 * 
 * @export
 * @interface StoryResponse
 */
export interface StoryResponse {
    /**
     * 
     * @type {string}
     * @memberof StoryResponse
     */
    uuid: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof StoryResponse
     */
    categories: Array<string>;
    /**
     * 
     * @type {{ [key: string]: number; }}
     * @memberof StoryResponse
     */
    countries: { [key: string]: number; };
    /**
     * 
     * @type {{ [key: string]: number; }}
     * @memberof StoryResponse
     */
    countriesPct: { [key: string]: number; };
    /**
     * 
     * @type {string}
     * @memberof StoryResponse
     */
    currentUpdateUuid: string;
    /**
     * 
     * @type {string}
     * @memberof StoryResponse
     */
    requestedUpdateUuid: string;
    /**
     * 
     * @type {boolean}
     * @memberof StoryResponse
     */
    generateImage: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof StoryResponse
     */
    keywords: Array<string>;
    /**
     * 
     * @type {{ [key: string]: number; }}
     * @memberof StoryResponse
     */
    languages: { [key: string]: number; };
    /**
     * 
     * @type {{ [key: string]: number; }}
     * @memberof StoryResponse
     */
    languagesPct: { [key: string]: number; };
    /**
     * 
     * @type {Array<string>}
     * @memberof StoryResponse
     */
    locations: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof StoryResponse
     */
    metaType: string;
    /**
     * 
     * @type {Array<number>}
     * @memberof StoryResponse
     */
    nArticles: Array<number>;
    /**
     * 
     * @type {number}
     * @memberof StoryResponse
     */
    nUpdates: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof StoryResponse
     */
    people: Array<string>;
    /**
     * 
     * @type {Array<ClusterProbabilities>}
     * @memberof StoryResponse
     */
    redditSentiment: Array<ClusterProbabilities>;
    /**
     * 
     * @type {Array<number>}
     * @memberof StoryResponse
     */
    redditSentimentTimestamps: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof StoryResponse
     */
    rollingSentiment: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof StoryResponse
     */
    sentiment: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof StoryResponse
     */
    sentimentTimestamps: Array<number>;
    /**
     * 
     * @type {{ [key: string]: number; }}
     * @memberof StoryResponse
     */
    sources: { [key: string]: number; };
    /**
     * 
     * @type {{ [key: string]: number; }}
     * @memberof StoryResponse
     */
    sourcesUrls: { [key: string]: number; };
    /**
     * 
     * @type {string}
     * @memberof StoryResponse
     */
    topic: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof StoryResponse
     */
    topics: Array<string>;
    /**
     * 
     * @type {Array<StoryUpdate>}
     * @memberof StoryResponse
     */
    updates: Array<StoryUpdate>;
    /**
     * 
     * @type {number}
     * @memberof StoryResponse
     */
    updatedTs: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof StoryResponse
     */
    updateUuids: Array<string>;
}

/**
 * Check if a given object implements the StoryResponse interface.
 */
export function instanceOfStoryResponse(value: object): boolean {
    if (!('uuid' in value)) return false;
    if (!('categories' in value)) return false;
    if (!('countries' in value)) return false;
    if (!('countriesPct' in value)) return false;
    if (!('currentUpdateUuid' in value)) return false;
    if (!('requestedUpdateUuid' in value)) return false;
    if (!('generateImage' in value)) return false;
    if (!('keywords' in value)) return false;
    if (!('languages' in value)) return false;
    if (!('languagesPct' in value)) return false;
    if (!('locations' in value)) return false;
    if (!('metaType' in value)) return false;
    if (!('nArticles' in value)) return false;
    if (!('nUpdates' in value)) return false;
    if (!('people' in value)) return false;
    if (!('redditSentiment' in value)) return false;
    if (!('redditSentimentTimestamps' in value)) return false;
    if (!('rollingSentiment' in value)) return false;
    if (!('sentiment' in value)) return false;
    if (!('sentimentTimestamps' in value)) return false;
    if (!('sources' in value)) return false;
    if (!('sourcesUrls' in value)) return false;
    if (!('topic' in value)) return false;
    if (!('topics' in value)) return false;
    if (!('updates' in value)) return false;
    if (!('updatedTs' in value)) return false;
    if (!('updateUuids' in value)) return false;
    return true;
}

export function StoryResponseFromJSON(json: any): StoryResponse {
    return StoryResponseFromJSONTyped(json, false);
}

export function StoryResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): StoryResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'uuid': json['uuid'],
        'categories': json['categories'],
        'countries': json['countries'],
        'countriesPct': json['countries_pct'],
        'currentUpdateUuid': json['current_update_uuid'],
        'requestedUpdateUuid': json['requested_update_uuid'],
        'generateImage': json['generate_image'],
        'keywords': json['keywords'],
        'languages': json['languages'],
        'languagesPct': json['languages_pct'],
        'locations': json['locations'],
        'metaType': json['meta_type'],
        'nArticles': json['n_articles'],
        'nUpdates': json['n_updates'],
        'people': json['people'],
        'redditSentiment': ((json['reddit_sentiment'] as Array<any>).map(ClusterProbabilitiesFromJSON)),
        'redditSentimentTimestamps': json['reddit_sentiment_timestamps'],
        'rollingSentiment': json['rolling_sentiment'],
        'sentiment': json['sentiment'],
        'sentimentTimestamps': json['sentiment_timestamps'],
        'sources': json['sources'],
        'sourcesUrls': json['sources_urls'],
        'topic': json['topic'],
        'topics': json['topics'],
        'updates': ((json['updates'] as Array<any>).map(StoryUpdateFromJSON)),
        'updatedTs': json['updated_ts'],
        'updateUuids': json['update_uuids'],
    };
}

export function StoryResponseToJSON(value?: StoryResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'uuid': value['uuid'],
        'categories': value['categories'],
        'countries': value['countries'],
        'countries_pct': value['countriesPct'],
        'current_update_uuid': value['currentUpdateUuid'],
        'requested_update_uuid': value['requestedUpdateUuid'],
        'generate_image': value['generateImage'],
        'keywords': value['keywords'],
        'languages': value['languages'],
        'languages_pct': value['languagesPct'],
        'locations': value['locations'],
        'meta_type': value['metaType'],
        'n_articles': value['nArticles'],
        'n_updates': value['nUpdates'],
        'people': value['people'],
        'reddit_sentiment': ((value['redditSentiment'] as Array<any>).map(ClusterProbabilitiesToJSON)),
        'reddit_sentiment_timestamps': value['redditSentimentTimestamps'],
        'rolling_sentiment': value['rollingSentiment'],
        'sentiment': value['sentiment'],
        'sentiment_timestamps': value['sentimentTimestamps'],
        'sources': value['sources'],
        'sources_urls': value['sourcesUrls'],
        'topic': value['topic'],
        'topics': value['topics'],
        'updates': ((value['updates'] as Array<any>).map(StoryUpdateToJSON)),
        'updated_ts': value['updatedTs'],
        'update_uuids': value['updateUuids'],
    };
}

