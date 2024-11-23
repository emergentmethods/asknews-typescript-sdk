/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.15.2
 * Contact: contact@emergentmethods.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { Article } from './Article';
import {
    ArticleFromJSON,
    ArticleFromJSONTyped,
    ArticleToJSON,
} from './Article';
import type { AsknewsApiSchemaV1StoriesGraphRelationships } from './AsknewsApiSchemaV1StoriesGraphRelationships';
import {
    AsknewsApiSchemaV1StoriesGraphRelationshipsFromJSON,
    AsknewsApiSchemaV1StoriesGraphRelationshipsFromJSONTyped,
    AsknewsApiSchemaV1StoriesGraphRelationshipsToJSON,
} from './AsknewsApiSchemaV1StoriesGraphRelationships';
import type { Entities } from './Entities';
import {
    EntitiesFromJSON,
    EntitiesFromJSONTyped,
    EntitiesToJSON,
} from './Entities';
import type { IntraClusterStatistics } from './IntraClusterStatistics';
import {
    IntraClusterStatisticsFromJSON,
    IntraClusterStatisticsFromJSONTyped,
    IntraClusterStatisticsToJSON,
} from './IntraClusterStatistics';
import type { RedditPerspective } from './RedditPerspective';
import {
    RedditPerspectiveFromJSON,
    RedditPerspectiveFromJSONTyped,
    RedditPerspectiveToJSON,
} from './RedditPerspective';
import type { RedditThread } from './RedditThread';
import {
    RedditThreadFromJSON,
    RedditThreadFromJSONTyped,
    RedditThreadToJSON,
} from './RedditThread';
import type { StoryUpdateDisplayImageUrlsInner } from './StoryUpdateDisplayImageUrlsInner';
import {
    StoryUpdateDisplayImageUrlsInnerFromJSON,
    StoryUpdateDisplayImageUrlsInnerFromJSONTyped,
    StoryUpdateDisplayImageUrlsInnerToJSON,
} from './StoryUpdateDisplayImageUrlsInner';

/**
 * 
 * @export
 * @interface StoryUpdate
 */
export interface StoryUpdate {
    /**
     * 
     * @type {string}
     * @memberof StoryUpdate
     */
    uuid: string;
    /**
     * 
     * @type {Array<Article>}
     * @memberof StoryUpdate
     */
    clusterArticles: Array<Article>;
    /**
     * 
     * @type {Array<Article>}
     * @memberof StoryUpdate
     */
    promptArticles: Array<Article>;
    /**
     * 
     * @type {number}
     * @memberof StoryUpdate
     */
    nArticles: number;
    /**
     * 
     * @type {Entities}
     * @memberof StoryUpdate
     */
    entities: Entities;
    /**
     * 
     * @type {string}
     * @memberof StoryUpdate
     */
    headline: string;
    /**
     * 
     * @type {string}
     * @memberof StoryUpdate
     */
    story: string;
    /**
     * 
     * @type {number}
     * @memberof StoryUpdate
     */
    storyUpdateTs: number;
    /**
     * 
     * @type {{ [key: string]: number; }}
     * @memberof StoryUpdate
     */
    sourcesUrls: { [key: string]: number; };
    /**
     * 
     * @type {{ [key: string]: number; }}
     * @memberof StoryUpdate
     */
    languagesPct: { [key: string]: number; };
    /**
     * 
     * @type {{ [key: string]: number; }}
     * @memberof StoryUpdate
     */
    countriesPct: { [key: string]: number; };
    /**
     * 
     * @type {Array<string>}
     * @memberof StoryUpdate
     */
    keyTakeaways: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof StoryUpdate
     */
    contradictions: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof StoryUpdate
     */
    continent: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof StoryUpdate
     */
    people: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof StoryUpdate
     */
    locations: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof StoryUpdate
     */
    newInformation: string;
    /**
     * 
     * @type {string}
     * @memberof StoryUpdate
     */
    imageUrl: string;
    /**
     * 
     * @type {string}
     * @memberof StoryUpdate
     */
    urlSafeTitle: string;
    /**
     * 
     * @type {string}
     * @memberof StoryUpdate
     */
    storyUuid: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof StoryUpdate
     */
    categories: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof StoryUpdate
     */
    imagePrompt: string;
    /**
     * 
     * @type {RedditPerspective}
     * @memberof StoryUpdate
     */
    redditPerspective: RedditPerspective;
    /**
     * 
     * @type {Array<RedditThread>}
     * @memberof StoryUpdate
     */
    redditThreads: Array<RedditThread>;
    /**
     * 
     * @type {{ [key: string]: number; }}
     * @memberof StoryUpdate
     */
    languages: { [key: string]: number; };
    /**
     * 
     * @type {Array<string>}
     * @memberof StoryUpdate
     */
    keywords: Array<string>;
    /**
     * 
     * @type {IntraClusterStatistics}
     * @memberof StoryUpdate
     */
    intraClusterStatistics: IntraClusterStatistics;
    /**
     * 
     * @type {object}
     * @memberof StoryUpdate
     */
    silhouetteScore: object;
    /**
     * 
     * @type {Array<string>}
     * @memberof StoryUpdate
     */
    articleIds: Array<string>;
    /**
     * 
     * @type {{ [key: string]: number; }}
     * @memberof StoryUpdate
     */
    countries: { [key: string]: number; };
    /**
     * 
     * @type {Array<string>}
     * @memberof StoryUpdate
     */
    markdownCitations: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof StoryUpdate
     */
    confidence?: number;
    /**
     * 
     * @type {string}
     * @memberof StoryUpdate
     */
    provocative?: StoryUpdateProvocativeEnum;
    /**
     * 
     * @type {string}
     * @memberof StoryUpdate
     */
    reportingVoice?: string;
    /**
     * 
     * @type {AsknewsApiSchemaV1StoriesGraphRelationships}
     * @memberof StoryUpdate
     */
    relationships: AsknewsApiSchemaV1StoriesGraphRelationships;
    /**
     * 
     * @type {string}
     * @memberof StoryUpdate
     */
    mermaid: string;
    /**
     * 
     * @type {string}
     * @memberof StoryUpdate
     */
    ccImageUrl: string;
    /**
     * 
     * @type {Array<StoryUpdateDisplayImageUrlsInner>}
     * @memberof StoryUpdate
     */
    displayImageUrls: Array<StoryUpdateDisplayImageUrlsInner>;
    /**
     * 
     * @type {number}
     * @memberof StoryUpdate
     */
    alignment?: number;
}


/**
 * @export
 */
export const StoryUpdateProvocativeEnum = {
    Unknown: 'unknown',
    Low: 'low',
    Medium: 'medium',
    High: 'high'
} as const;
export type StoryUpdateProvocativeEnum = typeof StoryUpdateProvocativeEnum[keyof typeof StoryUpdateProvocativeEnum];


/**
 * Check if a given object implements the StoryUpdate interface.
 */
export function instanceOfStoryUpdate(value: object): boolean {
    if (!('uuid' in value)) return false;
    if (!('clusterArticles' in value)) return false;
    if (!('promptArticles' in value)) return false;
    if (!('nArticles' in value)) return false;
    if (!('entities' in value)) return false;
    if (!('headline' in value)) return false;
    if (!('story' in value)) return false;
    if (!('storyUpdateTs' in value)) return false;
    if (!('sourcesUrls' in value)) return false;
    if (!('languagesPct' in value)) return false;
    if (!('countriesPct' in value)) return false;
    if (!('keyTakeaways' in value)) return false;
    if (!('contradictions' in value)) return false;
    if (!('continent' in value)) return false;
    if (!('people' in value)) return false;
    if (!('locations' in value)) return false;
    if (!('newInformation' in value)) return false;
    if (!('imageUrl' in value)) return false;
    if (!('urlSafeTitle' in value)) return false;
    if (!('storyUuid' in value)) return false;
    if (!('categories' in value)) return false;
    if (!('imagePrompt' in value)) return false;
    if (!('redditPerspective' in value)) return false;
    if (!('redditThreads' in value)) return false;
    if (!('languages' in value)) return false;
    if (!('keywords' in value)) return false;
    if (!('intraClusterStatistics' in value)) return false;
    if (!('silhouetteScore' in value)) return false;
    if (!('articleIds' in value)) return false;
    if (!('countries' in value)) return false;
    if (!('markdownCitations' in value)) return false;
    if (!('relationships' in value)) return false;
    if (!('mermaid' in value)) return false;
    if (!('ccImageUrl' in value)) return false;
    if (!('displayImageUrls' in value)) return false;
    return true;
}

export function StoryUpdateFromJSON(json: any): StoryUpdate {
    return StoryUpdateFromJSONTyped(json, false);
}

export function StoryUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): StoryUpdate {
    if (json == null) {
        return json;
    }
    return {
        
        'uuid': json['uuid'],
        'clusterArticles': ((json['cluster_articles'] as Array<any>).map(ArticleFromJSON)),
        'promptArticles': ((json['prompt_articles'] as Array<any>).map(ArticleFromJSON)),
        'nArticles': json['n_articles'],
        'entities': EntitiesFromJSON(json['entities']),
        'headline': json['headline'],
        'story': json['story'],
        'storyUpdateTs': json['story_update_ts'],
        'sourcesUrls': json['sources_urls'],
        'languagesPct': json['languages_pct'],
        'countriesPct': json['countries_pct'],
        'keyTakeaways': json['key_takeaways'],
        'contradictions': json['contradictions'],
        'continent': json['continent'],
        'people': json['people'],
        'locations': json['locations'],
        'newInformation': json['new_information'],
        'imageUrl': json['image_url'],
        'urlSafeTitle': json['url_safe_title'],
        'storyUuid': json['story_uuid'],
        'categories': json['categories'],
        'imagePrompt': json['image_prompt'],
        'redditPerspective': RedditPerspectiveFromJSON(json['reddit_perspective']),
        'redditThreads': ((json['reddit_threads'] as Array<any>).map(RedditThreadFromJSON)),
        'languages': json['languages'],
        'keywords': json['keywords'],
        'intraClusterStatistics': IntraClusterStatisticsFromJSON(json['intra_cluster_statistics']),
        'silhouetteScore': json['silhouette_score'],
        'articleIds': json['article_ids'],
        'countries': json['countries'],
        'markdownCitations': json['markdown_citations'],
        'confidence': json['confidence'] == null ? undefined : json['confidence'],
        'provocative': json['provocative'] == null ? undefined : json['provocative'],
        'reportingVoice': json['reporting_voice'] == null ? undefined : json['reporting_voice'],
        'relationships': AsknewsApiSchemaV1StoriesGraphRelationshipsFromJSON(json['relationships']),
        'mermaid': json['mermaid'],
        'ccImageUrl': json['cc_image_url'],
        'displayImageUrls': ((json['display_image_urls'] as Array<any>).map(StoryUpdateDisplayImageUrlsInnerFromJSON)),
        'alignment': json['alignment'] == null ? undefined : json['alignment'],
    };
}

export function StoryUpdateToJSON(value?: StoryUpdate | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'uuid': value['uuid'],
        'cluster_articles': ((value['clusterArticles'] as Array<any>).map(ArticleToJSON)),
        'prompt_articles': ((value['promptArticles'] as Array<any>).map(ArticleToJSON)),
        'n_articles': value['nArticles'],
        'entities': EntitiesToJSON(value['entities']),
        'headline': value['headline'],
        'story': value['story'],
        'story_update_ts': value['storyUpdateTs'],
        'sources_urls': value['sourcesUrls'],
        'languages_pct': value['languagesPct'],
        'countries_pct': value['countriesPct'],
        'key_takeaways': value['keyTakeaways'],
        'contradictions': value['contradictions'],
        'continent': value['continent'],
        'people': value['people'],
        'locations': value['locations'],
        'new_information': value['newInformation'],
        'image_url': value['imageUrl'],
        'url_safe_title': value['urlSafeTitle'],
        'story_uuid': value['storyUuid'],
        'categories': value['categories'],
        'image_prompt': value['imagePrompt'],
        'reddit_perspective': RedditPerspectiveToJSON(value['redditPerspective']),
        'reddit_threads': ((value['redditThreads'] as Array<any>).map(RedditThreadToJSON)),
        'languages': value['languages'],
        'keywords': value['keywords'],
        'intra_cluster_statistics': IntraClusterStatisticsToJSON(value['intraClusterStatistics']),
        'silhouette_score': value['silhouetteScore'],
        'article_ids': value['articleIds'],
        'countries': value['countries'],
        'markdown_citations': value['markdownCitations'],
        'confidence': value['confidence'],
        'provocative': value['provocative'],
        'reporting_voice': value['reportingVoice'],
        'relationships': AsknewsApiSchemaV1StoriesGraphRelationshipsToJSON(value['relationships']),
        'mermaid': value['mermaid'],
        'cc_image_url': value['ccImageUrl'],
        'display_image_urls': ((value['displayImageUrls'] as Array<any>).map(StoryUpdateDisplayImageUrlsInnerToJSON)),
        'alignment': value['alignment'],
    };
}

