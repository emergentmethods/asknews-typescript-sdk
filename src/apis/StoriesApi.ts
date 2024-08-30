/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.10.0
 * Contact: contact@emergentmethods.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  AbcAPIErrorModel21,
  AbcAPIErrorModel22,
  AbcAPIErrorModel23,
  AbcAPIErrorModel24,
  AbcAPIErrorModel25,
  AbcAPIErrorModel26,
  AbcAPIErrorModel27,
  AbcAPIErrorModel28,
  AsknewsApiErrorsAPIErrorModel,
  Continent,
  StoriesResponse,
  StoryResponse,
  ValidationErrorModel,
} from '../models/index';
import {
    AbcAPIErrorModel21FromJSON,
    AbcAPIErrorModel21ToJSON,
    AbcAPIErrorModel22FromJSON,
    AbcAPIErrorModel22ToJSON,
    AbcAPIErrorModel23FromJSON,
    AbcAPIErrorModel23ToJSON,
    AbcAPIErrorModel24FromJSON,
    AbcAPIErrorModel24ToJSON,
    AbcAPIErrorModel25FromJSON,
    AbcAPIErrorModel25ToJSON,
    AbcAPIErrorModel26FromJSON,
    AbcAPIErrorModel26ToJSON,
    AbcAPIErrorModel27FromJSON,
    AbcAPIErrorModel27ToJSON,
    AbcAPIErrorModel28FromJSON,
    AbcAPIErrorModel28ToJSON,
    AsknewsApiErrorsAPIErrorModelFromJSON,
    AsknewsApiErrorsAPIErrorModelToJSON,
    ContinentFromJSON,
    ContinentToJSON,
    StoriesResponseFromJSON,
    StoriesResponseToJSON,
    StoryResponseFromJSON,
    StoryResponseToJSON,
    ValidationErrorModelFromJSON,
    ValidationErrorModelToJSON,
} from '../models/index';

export interface GetStoriesRequest {
    query?: string;
    categories?: Array<GetStoriesCategoriesEnum>;
    uuids?: Array<string>;
    startTimestamp?: number;
    endTimestamp?: number;
    sortBy?: GetStoriesSortByEnum;
    sortType?: GetStoriesSortTypeEnum;
    continent?: Continent;
    offset?: number;
    limit?: number;
    expandUpdates?: boolean;
    maxUpdates?: number;
    maxArticles?: number;
    method?: GetStoriesMethodEnum;
    objType?: Array<GetStoriesObjTypeEnum>;
    reddit?: number;
    citationMethod?: GetStoriesCitationMethodEnum;
    similarityScoreThreshold?: number;
    provocative?: GetStoriesProvocativeEnum;
    strategy?: GetStoriesStrategyEnum;
}

export interface GetStoryRequest {
    storyId: string;
    expandUpdates?: boolean;
    maxUpdates?: number;
    maxArticles?: number;
    reddit?: number;
    citationMethod?: GetStoryCitationMethodEnum;
    condenseAuxillaryUpdates?: boolean;
}

/**
 * 
 */
export class StoriesApi extends runtime.BaseAPI {

    /**
     * Filter on our custom, in-house written, stories/events/narratives.  These stories are based on clusters of articles (which come through this endpoint as well, so you can consider this a clustering endpoint). We write stories and track them through time.  The enrichments include a full Reddit overview (including all the thread metadata), as well as descriptions of the reporting voice, the key takeaways, contradictions, all the entities, and much, much more.  You can see this data in action, and filter it similarly at `https://asknews.app/stories`
     * Filter and search for top news narratives
     */
    async getStoriesRaw(requestParameters: GetStoriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<StoriesResponse>> {
        const queryParameters: any = {};

        if (requestParameters['query'] != null) {
            queryParameters['query'] = requestParameters['query'];
        }

        if (requestParameters['categories'] != null) {
            queryParameters['categories'] = requestParameters['categories'];
        }

        if (requestParameters['uuids'] != null) {
            queryParameters['uuids'] = requestParameters['uuids'];
        }

        if (requestParameters['startTimestamp'] != null) {
            queryParameters['start_timestamp'] = requestParameters['startTimestamp'];
        }

        if (requestParameters['endTimestamp'] != null) {
            queryParameters['end_timestamp'] = requestParameters['endTimestamp'];
        }

        if (requestParameters['sortBy'] != null) {
            queryParameters['sort_by'] = requestParameters['sortBy'];
        }

        if (requestParameters['sortType'] != null) {
            queryParameters['sort_type'] = requestParameters['sortType'];
        }

        if (requestParameters['continent'] != null) {
            queryParameters['continent'] = requestParameters['continent'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['offset'] = requestParameters['offset'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['expandUpdates'] != null) {
            queryParameters['expand_updates'] = requestParameters['expandUpdates'];
        }

        if (requestParameters['maxUpdates'] != null) {
            queryParameters['max_updates'] = requestParameters['maxUpdates'];
        }

        if (requestParameters['maxArticles'] != null) {
            queryParameters['max_articles'] = requestParameters['maxArticles'];
        }

        if (requestParameters['method'] != null) {
            queryParameters['method'] = requestParameters['method'];
        }

        if (requestParameters['objType'] != null) {
            queryParameters['obj_type'] = requestParameters['objType'];
        }

        if (requestParameters['reddit'] != null) {
            queryParameters['reddit'] = requestParameters['reddit'];
        }

        if (requestParameters['citationMethod'] != null) {
            queryParameters['citation_method'] = requestParameters['citationMethod'];
        }

        if (requestParameters['similarityScoreThreshold'] != null) {
            queryParameters['similarity_score_threshold'] = requestParameters['similarityScoreThreshold'];
        }

        if (requestParameters['provocative'] != null) {
            queryParameters['provocative'] = requestParameters['provocative'];
        }

        if (requestParameters['strategy'] != null) {
            queryParameters['strategy'] = requestParameters['strategy'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/stories`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StoriesResponseFromJSON(jsonValue));
    }

    /**
     * Filter on our custom, in-house written, stories/events/narratives.  These stories are based on clusters of articles (which come through this endpoint as well, so you can consider this a clustering endpoint). We write stories and track them through time.  The enrichments include a full Reddit overview (including all the thread metadata), as well as descriptions of the reporting voice, the key takeaways, contradictions, all the entities, and much, much more.  You can see this data in action, and filter it similarly at `https://asknews.app/stories`
     * Filter and search for top news narratives
     */
    async getStories(requestParameters: GetStoriesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<StoriesResponse> {
        const response = await this.getStoriesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a single news story given its UUID.
     * Get a story containing updates
     */
    async getStoryRaw(requestParameters: GetStoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<StoryResponse>> {
        if (requestParameters['storyId'] == null) {
            throw new runtime.RequiredError(
                'storyId',
                'Required parameter "storyId" was null or undefined when calling getStory().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['expandUpdates'] != null) {
            queryParameters['expand_updates'] = requestParameters['expandUpdates'];
        }

        if (requestParameters['maxUpdates'] != null) {
            queryParameters['max_updates'] = requestParameters['maxUpdates'];
        }

        if (requestParameters['maxArticles'] != null) {
            queryParameters['max_articles'] = requestParameters['maxArticles'];
        }

        if (requestParameters['reddit'] != null) {
            queryParameters['reddit'] = requestParameters['reddit'];
        }

        if (requestParameters['citationMethod'] != null) {
            queryParameters['citation_method'] = requestParameters['citationMethod'];
        }

        if (requestParameters['condenseAuxillaryUpdates'] != null) {
            queryParameters['condense_auxillary_updates'] = requestParameters['condenseAuxillaryUpdates'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/stories/{story_id}`.replace(`{${"story_id"}}`, encodeURIComponent(String(requestParameters['storyId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StoryResponseFromJSON(jsonValue));
    }

    /**
     * Get a single news story given its UUID.
     * Get a story containing updates
     */
    async getStory(requestParameters: GetStoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<StoryResponse> {
        const response = await this.getStoryRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const GetStoriesCategoriesEnum = {
    Politics: 'Politics',
    Economy: 'Economy',
    Finance: 'Finance',
    Science: 'Science',
    Technology: 'Technology',
    Sports: 'Sports',
    Climate: 'Climate',
    Environment: 'Environment',
    Culture: 'Culture',
    Entertainment: 'Entertainment',
    Business: 'Business',
    Health: 'Health',
    International: 'International'
} as const;
export type GetStoriesCategoriesEnum = typeof GetStoriesCategoriesEnum[keyof typeof GetStoriesCategoriesEnum];
/**
 * @export
 */
export const GetStoriesSortByEnum = {
    Published: 'published',
    Coverage: 'coverage',
    Sentiment: 'sentiment',
    Relevance: 'relevance',
    Confidence: 'confidence'
} as const;
export type GetStoriesSortByEnum = typeof GetStoriesSortByEnum[keyof typeof GetStoriesSortByEnum];
/**
 * @export
 */
export const GetStoriesSortTypeEnum = {
    Asc: 'asc',
    Desc: 'desc'
} as const;
export type GetStoriesSortTypeEnum = typeof GetStoriesSortTypeEnum[keyof typeof GetStoriesSortTypeEnum];
/**
 * @export
 */
export const GetStoriesMethodEnum = {
    Nl: 'nl',
    Kw: 'kw',
    Both: 'both'
} as const;
export type GetStoriesMethodEnum = typeof GetStoriesMethodEnum[keyof typeof GetStoriesMethodEnum];
/**
 * @export
 */
export const GetStoriesObjTypeEnum = {
    Story: 'story',
    StoryUpdate: 'story_update'
} as const;
export type GetStoriesObjTypeEnum = typeof GetStoriesObjTypeEnum[keyof typeof GetStoriesObjTypeEnum];
/**
 * @export
 */
export const GetStoriesCitationMethodEnum = {
    Brackets: 'brackets',
    Urls: 'urls',
    None: 'none'
} as const;
export type GetStoriesCitationMethodEnum = typeof GetStoriesCitationMethodEnum[keyof typeof GetStoriesCitationMethodEnum];
/**
 * @export
 */
export const GetStoriesProvocativeEnum = {
    Unknown: 'unknown',
    Low: 'low',
    Medium: 'medium',
    High: 'high',
    All: 'all'
} as const;
export type GetStoriesProvocativeEnum = typeof GetStoriesProvocativeEnum[keyof typeof GetStoriesProvocativeEnum];
/**
 * @export
 */
export const GetStoriesStrategyEnum = {
    Default: 'default',
    Topstories: 'topstories',
    TopstoriesCategories: 'topstories_categories',
    TopstoriesContinents: 'topstories_continents'
} as const;
export type GetStoriesStrategyEnum = typeof GetStoriesStrategyEnum[keyof typeof GetStoriesStrategyEnum];
/**
 * @export
 */
export const GetStoryCitationMethodEnum = {
    Brackets: 'brackets',
    Urls: 'urls',
    None: 'none'
} as const;
export type GetStoryCitationMethodEnum = typeof GetStoryCitationMethodEnum[keyof typeof GetStoryCitationMethodEnum];
