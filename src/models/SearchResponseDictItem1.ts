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
import type { Entities1 } from './Entities1';
import {
    Entities1FromJSON,
    Entities1FromJSONTyped,
    Entities1ToJSON,
} from './Entities1';
import type { GraphRelationships } from './GraphRelationships';
import {
    GraphRelationshipsFromJSON,
    GraphRelationshipsFromJSONTyped,
    GraphRelationshipsToJSON,
} from './GraphRelationships';
import type { ReportingVoice1 } from './ReportingVoice1';
import {
    ReportingVoice1FromJSON,
    ReportingVoice1FromJSONTyped,
    ReportingVoice1ToJSON,
} from './ReportingVoice1';
import type { SearchResponseDictItem1GeoCoordinatesValue } from './SearchResponseDictItem1GeoCoordinatesValue';
import {
    SearchResponseDictItem1GeoCoordinatesValueFromJSON,
    SearchResponseDictItem1GeoCoordinatesValueFromJSONTyped,
    SearchResponseDictItem1GeoCoordinatesValueToJSON,
} from './SearchResponseDictItem1GeoCoordinatesValue';

/**
 * 
 * @export
 * @interface SearchResponseDictItem1
 */
export interface SearchResponseDictItem1 {
    /**
     * 
     * @type {string}
     * @memberof SearchResponseDictItem1
     */
    articleUrl: string;
    /**
     * 
     * @type {string}
     * @memberof SearchResponseDictItem1
     */
    articleId: string;
    /**
     * 
     * @type {Classification}
     * @memberof SearchResponseDictItem1
     */
    classification: Classification;
    /**
     * 
     * @type {string}
     * @memberof SearchResponseDictItem1
     */
    country: string;
    /**
     * 
     * @type {string}
     * @memberof SearchResponseDictItem1
     */
    sourceId: string;
    /**
     * 
     * @type {number}
     * @memberof SearchResponseDictItem1
     */
    pageRank: number;
    /**
     * 
     * @type {string}
     * @memberof SearchResponseDictItem1
     */
    domainUrl: string;
    /**
     * 
     * @type {string}
     * @memberof SearchResponseDictItem1
     */
    engTitle: string;
    /**
     * 
     * @type {Entities1}
     * @memberof SearchResponseDictItem1
     */
    entities: Entities1;
    /**
     * 
     * @type {string}
     * @memberof SearchResponseDictItem1
     */
    imageUrl?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof SearchResponseDictItem1
     */
    keywords: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof SearchResponseDictItem1
     */
    language: string;
    /**
     * 
     * @type {Date}
     * @memberof SearchResponseDictItem1
     */
    pubDate: Date;
    /**
     * 
     * @type {string}
     * @memberof SearchResponseDictItem1
     */
    summary: string;
    /**
     * 
     * @type {string}
     * @memberof SearchResponseDictItem1
     */
    title: string;
    /**
     * 
     * @type {number}
     * @memberof SearchResponseDictItem1
     */
    sentiment: number;
    /**
     * 
     * @type {number}
     * @memberof SearchResponseDictItem1
     */
    centroidDistance: number;
    /**
     * 
     * @type {number}
     * @memberof SearchResponseDictItem1
     */
    clusterProbability: number;
    /**
     * 
     * @type {string}
     * @memberof SearchResponseDictItem1
     */
    markdownCitation?: string;
    /**
     * 
     * @type {string}
     * @memberof SearchResponseDictItem1
     */
    provocative?: SearchResponseDictItem1ProvocativeEnum;
    /**
     * 
     * @type {ReportingVoice1}
     * @memberof SearchResponseDictItem1
     */
    reportingVoice?: ReportingVoice1;
    /**
     * 
     * @type {GraphRelationships}
     * @memberof SearchResponseDictItem1
     */
    entityRelationGraph?: GraphRelationships;
    /**
     * 
     * @type {object}
     * @memberof SearchResponseDictItem1
     */
    geoCoordinates?: object;
    /**
     * 
     * @type {string}
     * @memberof SearchResponseDictItem1
     */
    continent?: SearchResponseDictItem1ContinentEnum;
    /**
     * 
     * @type {string}
     * @memberof SearchResponseDictItem1
     */
    asStringKey: string;
}


/**
 * @export
 */
export const SearchResponseDictItem1ProvocativeEnum = {
    Unknown: 'unknown',
    Low: 'low',
    Medium: 'medium',
    High: 'high'
} as const;
export type SearchResponseDictItem1ProvocativeEnum = typeof SearchResponseDictItem1ProvocativeEnum[keyof typeof SearchResponseDictItem1ProvocativeEnum];

/**
 * @export
 */
export const SearchResponseDictItem1ContinentEnum = {
    Africa: 'Africa',
    Asia: 'Asia',
    Europe: 'Europe',
    MiddleEast: 'Middle East',
    NorthAmerica: 'North America',
    SouthAmerica: 'South America',
    Oceania: 'Oceania'
} as const;
export type SearchResponseDictItem1ContinentEnum = typeof SearchResponseDictItem1ContinentEnum[keyof typeof SearchResponseDictItem1ContinentEnum];


/**
 * Check if a given object implements the SearchResponseDictItem1 interface.
 */
export function instanceOfSearchResponseDictItem1(value: object): boolean {
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
    if (!('asStringKey' in value)) return false;
    return true;
}

export function SearchResponseDictItem1FromJSON(json: any): SearchResponseDictItem1 {
    return SearchResponseDictItem1FromJSONTyped(json, false);
}

export function SearchResponseDictItem1FromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchResponseDictItem1 {
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
        'entities': Entities1FromJSON(json['entities']),
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
        'reportingVoice': json['reporting_voice'] == null ? undefined : ReportingVoice1FromJSON(json['reporting_voice']),
        'entityRelationGraph': json['entity_relation_graph'] == null ? undefined : GraphRelationshipsFromJSON(json['entity_relation_graph']),
        'geoCoordinates': json['geo_coordinates'] == null ? undefined : json['geo_coordinates'],
        'continent': json['continent'] == null ? undefined : json['continent'],
        'asStringKey': json['as_string_key'],
    };
}

export function SearchResponseDictItem1ToJSON(value?: SearchResponseDictItem1 | null): any {
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
        'entities': Entities1ToJSON(value['entities']),
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
        'reporting_voice': ReportingVoice1ToJSON(value['reportingVoice']),
        'entity_relation_graph': GraphRelationshipsToJSON(value['entityRelationGraph']),
        'geo_coordinates': value['geoCoordinates'],
        'continent': value['continent'],
        'as_string_key': value['asStringKey'],
    };
}

