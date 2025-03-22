/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.18.3
 * Contact: contact@emergentmethods.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { AsknewsApiSchemaV1CommonGraphRelationships } from './AsknewsApiSchemaV1CommonGraphRelationships';
import {
    AsknewsApiSchemaV1CommonGraphRelationshipsFromJSON,
    AsknewsApiSchemaV1CommonGraphRelationshipsFromJSONTyped,
    AsknewsApiSchemaV1CommonGraphRelationshipsToJSON,
} from './AsknewsApiSchemaV1CommonGraphRelationships';
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
import type { GeoCoordinate } from './GeoCoordinate';
import {
    GeoCoordinateFromJSON,
    GeoCoordinateFromJSONTyped,
    GeoCoordinateToJSON,
} from './GeoCoordinate';
import type { ReportingVoice1 } from './ReportingVoice1';
import {
    ReportingVoice1FromJSON,
    ReportingVoice1FromJSONTyped,
    ReportingVoice1ToJSON,
} from './ReportingVoice1';

/**
 * 
 * @export
 * @interface SearchResponseDictItem
 */
export interface SearchResponseDictItem {
    /**
     * 
     * @type {string}
     * @memberof SearchResponseDictItem
     */
    articleUrl: string;
    /**
     * 
     * @type {string}
     * @memberof SearchResponseDictItem
     */
    articleId: string;
    /**
     * 
     * @type {Classification}
     * @memberof SearchResponseDictItem
     */
    classification: Classification;
    /**
     * 
     * @type {string}
     * @memberof SearchResponseDictItem
     */
    country: string;
    /**
     * 
     * @type {string}
     * @memberof SearchResponseDictItem
     */
    sourceId: string;
    /**
     * 
     * @type {number}
     * @memberof SearchResponseDictItem
     */
    pageRank: number;
    /**
     * 
     * @type {string}
     * @memberof SearchResponseDictItem
     */
    domainUrl: string;
    /**
     * 
     * @type {string}
     * @memberof SearchResponseDictItem
     */
    engTitle: string;
    /**
     * 
     * @type {Entities}
     * @memberof SearchResponseDictItem
     */
    entities: Entities;
    /**
     * 
     * @type {string}
     * @memberof SearchResponseDictItem
     */
    imageUrl?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof SearchResponseDictItem
     */
    keywords: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof SearchResponseDictItem
     */
    language: string;
    /**
     * 
     * @type {Date}
     * @memberof SearchResponseDictItem
     */
    pubDate: Date;
    /**
     * 
     * @type {string}
     * @memberof SearchResponseDictItem
     */
    summary: string;
    /**
     * 
     * @type {string}
     * @memberof SearchResponseDictItem
     */
    title: string;
    /**
     * 
     * @type {number}
     * @memberof SearchResponseDictItem
     */
    sentiment: number;
    /**
     * 
     * @type {number}
     * @memberof SearchResponseDictItem
     */
    centroidDistance: number;
    /**
     * 
     * @type {number}
     * @memberof SearchResponseDictItem
     */
    clusterProbability: number;
    /**
     * 
     * @type {string}
     * @memberof SearchResponseDictItem
     */
    markdownCitation?: string;
    /**
     * 
     * @type {string}
     * @memberof SearchResponseDictItem
     */
    provocative?: SearchResponseDictItemProvocativeEnum;
    /**
     * 
     * @type {ReportingVoice1}
     * @memberof SearchResponseDictItem
     */
    reportingVoice?: ReportingVoice1;
    /**
     * 
     * @type {AsknewsApiSchemaV1CommonGraphRelationships}
     * @memberof SearchResponseDictItem
     */
    entityRelationGraph?: AsknewsApiSchemaV1CommonGraphRelationships;
    /**
     * 
     * @type {{ [key: string]: GeoCoordinate; }}
     * @memberof SearchResponseDictItem
     */
    geoCoordinates?: { [key: string]: GeoCoordinate; };
    /**
     * 
     * @type {string}
     * @memberof SearchResponseDictItem
     */
    continent?: SearchResponseDictItemContinentEnum;
    /**
     * 
     * @type {string}
     * @memberof SearchResponseDictItem
     */
    asStringKey: string;
}


/**
 * @export
 */
export const SearchResponseDictItemProvocativeEnum = {
    Unknown: 'unknown',
    Low: 'low',
    Medium: 'medium',
    High: 'high'
} as const;
export type SearchResponseDictItemProvocativeEnum = typeof SearchResponseDictItemProvocativeEnum[keyof typeof SearchResponseDictItemProvocativeEnum];

/**
 * @export
 */
export const SearchResponseDictItemContinentEnum = {
    Africa: 'Africa',
    Asia: 'Asia',
    Europe: 'Europe',
    MiddleEast: 'Middle East',
    NorthAmerica: 'North America',
    SouthAmerica: 'South America',
    Oceania: 'Oceania'
} as const;
export type SearchResponseDictItemContinentEnum = typeof SearchResponseDictItemContinentEnum[keyof typeof SearchResponseDictItemContinentEnum];


/**
 * Check if a given object implements the SearchResponseDictItem interface.
 */
export function instanceOfSearchResponseDictItem(value: object): boolean {
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

export function SearchResponseDictItemFromJSON(json: any): SearchResponseDictItem {
    return SearchResponseDictItemFromJSONTyped(json, false);
}

export function SearchResponseDictItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchResponseDictItem {
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
        'reportingVoice': json['reporting_voice'] == null ? undefined : ReportingVoice1FromJSON(json['reporting_voice']),
        'entityRelationGraph': json['entity_relation_graph'] == null ? undefined : AsknewsApiSchemaV1CommonGraphRelationshipsFromJSON(json['entity_relation_graph']),
        'geoCoordinates': json['geo_coordinates'] == null ? undefined : json['geo_coordinates'],
        'continent': json['continent'] == null ? undefined : json['continent'],
        'asStringKey': json['as_string_key'],
    };
}

export function SearchResponseDictItemToJSON(value?: SearchResponseDictItem | null): any {
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
        'reporting_voice': ReportingVoice1ToJSON(value['reportingVoice']),
        'entity_relation_graph': AsknewsApiSchemaV1CommonGraphRelationshipsToJSON(value['entityRelationGraph']),
        'geo_coordinates': value['geoCoordinates'],
        'continent': value['continent'],
        'as_string_key': value['asStringKey'],
    };
}

