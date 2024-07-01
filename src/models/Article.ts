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
import type { Classification } from './Classification';
import {
    ClassificationFromJSON,
    ClassificationFromJSONTyped,
    ClassificationToJSON,
} from './Classification';
import type { Entities } from './Entities';
import {
    EntitiesFromJSON,
    EntitiesFromJSONTyped,
    EntitiesToJSON,
} from './Entities';
import type { ReportingVoice } from './ReportingVoice';
import {
    ReportingVoiceFromJSON,
    ReportingVoiceFromJSONTyped,
    ReportingVoiceToJSON,
} from './ReportingVoice';

/**
 * 
 * @export
 * @interface Article
 */
export interface Article {
    /**
     * 
     * @type {string}
     * @memberof Article
     */
    articleUrl: string;
    /**
     * 
     * @type {string}
     * @memberof Article
     */
    articleId: string;
    /**
     * 
     * @type {Classification}
     * @memberof Article
     */
    classification: Classification;
    /**
     * 
     * @type {string}
     * @memberof Article
     */
    country: string;
    /**
     * 
     * @type {string}
     * @memberof Article
     */
    sourceId: string;
    /**
     * 
     * @type {number}
     * @memberof Article
     */
    pageRank: number;
    /**
     * 
     * @type {string}
     * @memberof Article
     */
    domainUrl: string;
    /**
     * 
     * @type {string}
     * @memberof Article
     */
    engTitle: string;
    /**
     * 
     * @type {Entities}
     * @memberof Article
     */
    entities: Entities;
    /**
     * 
     * @type {string}
     * @memberof Article
     */
    imageUrl?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof Article
     */
    keywords: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof Article
     */
    language: string;
    /**
     * 
     * @type {Date}
     * @memberof Article
     */
    pubDate: Date;
    /**
     * 
     * @type {string}
     * @memberof Article
     */
    summary: string;
    /**
     * 
     * @type {string}
     * @memberof Article
     */
    title: string;
    /**
     * 
     * @type {number}
     * @memberof Article
     */
    sentiment: number;
    /**
     * 
     * @type {number}
     * @memberof Article
     */
    centroidDistance: number;
    /**
     * 
     * @type {number}
     * @memberof Article
     */
    clusterProbability: number;
    /**
     * 
     * @type {string}
     * @memberof Article
     */
    markdownCitation?: string;
    /**
     * 
     * @type {string}
     * @memberof Article
     */
    provocative?: ArticleProvocativeEnum;
    /**
     * 
     * @type {ReportingVoice}
     * @memberof Article
     */
    reportingVoice?: ReportingVoice;
}


/**
 * @export
 */
export const ArticleProvocativeEnum = {
    Unknown: 'unknown',
    Low: 'low',
    Medium: 'medium',
    High: 'high'
} as const;
export type ArticleProvocativeEnum = typeof ArticleProvocativeEnum[keyof typeof ArticleProvocativeEnum];


/**
 * Check if a given object implements the Article interface.
 */
export function instanceOfArticle(value: object): boolean {
    if (!('articleUrl' in value)) return false;
    if (!('articleId' in value)) return false;
    if (!('classification' in value)) return false;
    if (!('country' in value)) return false;
    if (!('sourceId' in value)) return false;
    if (!('pageRank' in value)) return false;
    if (!('domainUrl' in value)) return false;
    if (!('engTitle' in value)) return false;
    if (!('entities' in value)) return false;
    if (!('keywords' in value)) return false;
    if (!('language' in value)) return false;
    if (!('pubDate' in value)) return false;
    if (!('summary' in value)) return false;
    if (!('title' in value)) return false;
    if (!('sentiment' in value)) return false;
    if (!('centroidDistance' in value)) return false;
    if (!('clusterProbability' in value)) return false;
    return true;
}

export function ArticleFromJSON(json: any): Article {
    return ArticleFromJSONTyped(json, false);
}

export function ArticleFromJSONTyped(json: any, ignoreDiscriminator: boolean): Article {
    if (json == null) {
        return json;
    }
    return {
        
        'articleUrl': json['article_url'],
        'articleId': json['article_id'],
        'classification': ClassificationFromJSON(json['classification']),
        'country': json['country'],
        'sourceId': json['source_id'],
        'pageRank': json['page_rank'],
        'domainUrl': json['domain_url'],
        'engTitle': json['eng_title'],
        'entities': EntitiesFromJSON(json['entities']),
        'imageUrl': json['image_url'] == null ? undefined : json['image_url'],
        'keywords': json['keywords'],
        'language': json['language'],
        'pubDate': (new Date(json['pub_date'])),
        'summary': json['summary'],
        'title': json['title'],
        'sentiment': json['sentiment'],
        'centroidDistance': json['centroid_distance'],
        'clusterProbability': json['cluster_probability'],
        'markdownCitation': json['markdown_citation'] == null ? undefined : json['markdown_citation'],
        'provocative': json['provocative'] == null ? undefined : json['provocative'],
        'reportingVoice': json['reporting_voice'] == null ? undefined : ReportingVoiceFromJSON(json['reporting_voice']),
    };
}

export function ArticleToJSON(value?: Article | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'article_url': value['articleUrl'],
        'article_id': value['articleId'],
        'classification': ClassificationToJSON(value['classification']),
        'country': value['country'],
        'source_id': value['sourceId'],
        'page_rank': value['pageRank'],
        'domain_url': value['domainUrl'],
        'eng_title': value['engTitle'],
        'entities': EntitiesToJSON(value['entities']),
        'image_url': value['imageUrl'],
        'keywords': value['keywords'],
        'language': value['language'],
        'pub_date': ((value['pubDate']).toISOString()),
        'summary': value['summary'],
        'title': value['title'],
        'sentiment': value['sentiment'],
        'centroid_distance': value['centroidDistance'],
        'cluster_probability': value['clusterProbability'],
        'markdown_citation': value['markdownCitation'],
        'provocative': value['provocative'],
        'reporting_voice': ReportingVoiceToJSON(value['reportingVoice']),
    };
}

