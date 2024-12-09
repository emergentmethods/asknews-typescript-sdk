/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.15.10
 * Contact: contact@emergentmethods.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  AbcAPIErrorModel37,
  AbcAPIErrorModel38,
  AbcAPIErrorModel39,
  AbcAPIErrorModel40,
  AsknewsApiErrorsAPIErrorModel,
  RedditResponse,
  ValidationErrorModel,
} from '../models/index';
import {
    AbcAPIErrorModel37FromJSON,
    AbcAPIErrorModel37ToJSON,
    AbcAPIErrorModel38FromJSON,
    AbcAPIErrorModel38ToJSON,
    AbcAPIErrorModel39FromJSON,
    AbcAPIErrorModel39ToJSON,
    AbcAPIErrorModel40FromJSON,
    AbcAPIErrorModel40ToJSON,
    AsknewsApiErrorsAPIErrorModelFromJSON,
    AsknewsApiErrorsAPIErrorModelToJSON,
    RedditResponseFromJSON,
    RedditResponseToJSON,
    ValidationErrorModelFromJSON,
    ValidationErrorModelToJSON,
} from '../models/index';

export interface SearchRedditRequest {
    keywords: Array<string>;
    nThreads?: number;
    method?: SearchRedditMethodEnum;
    deep?: boolean;
    returnType?: SearchRedditReturnTypeEnum;
    timeFilter?: SearchRedditTimeFilterEnum;
    sort?: SearchRedditSortEnum;
}

/**
 * 
 */
export class RedditApi extends runtime.BaseAPI {

    /**
     * Go to Reddit, search threads, summarize the threads, return analysis. `deep`=True is a live web scrape, AskNews searches Reddit, finds threads, summarizes them, analyzes them, and returns the results. `deep`=False is a search in AskNews\' existing database of Reddit threads.
     * Search Reddit, summarize threads, and return analysis.
     */
    async searchRedditRaw(requestParameters: SearchRedditRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RedditResponse> > {
        if (requestParameters['keywords'] == null) {
            throw new runtime.RequiredError(
                'keywords',
                'Required parameter "keywords" was null or undefined when calling searchReddit().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['keywords'] != null) {
            queryParameters['keywords'] = requestParameters['keywords'];
        }

        if (requestParameters['nThreads'] != null) {
            queryParameters['n_threads'] = requestParameters['nThreads'];
        }

        if (requestParameters['method'] != null) {
            queryParameters['method'] = requestParameters['method'];
        }

        if (requestParameters['deep'] != null) {
            queryParameters['deep'] = requestParameters['deep'];
        }

        if (requestParameters['returnType'] != null) {
            queryParameters['return_type'] = requestParameters['returnType'];
        }

        if (requestParameters['timeFilter'] != null) {
            queryParameters['time_filter'] = requestParameters['timeFilter'];
        }

        if (requestParameters['sort'] != null) {
            queryParameters['sort'] = requestParameters['sort'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/reddit/search`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);


        return new runtime.JSONApiResponse(response, (jsonValue) => RedditResponseFromJSON(jsonValue));
    }

    /**
     * Go to Reddit, search threads, summarize the threads, return analysis. `deep`=True is a live web scrape, AskNews searches Reddit, finds threads, summarizes them, analyzes them, and returns the results. `deep`=False is a search in AskNews\' existing database of Reddit threads.
     * Search Reddit, summarize threads, and return analysis.
     */
    async searchReddit(requestParameters: SearchRedditRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RedditResponse> {
        const response = await this.searchRedditRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const SearchRedditMethodEnum = {
    Nl: 'nl',
    Kw: 'kw'
} as const;
export type SearchRedditMethodEnum = typeof SearchRedditMethodEnum[keyof typeof SearchRedditMethodEnum];
/**
 * @export
 */
export const SearchRedditReturnTypeEnum = {
    Dicts: 'dicts',
    String: 'string',
    Both: 'both'
} as const;
export type SearchRedditReturnTypeEnum = typeof SearchRedditReturnTypeEnum[keyof typeof SearchRedditReturnTypeEnum];
/**
 * @export
 */
export const SearchRedditTimeFilterEnum = {
    Hour: 'hour',
    Day: 'day',
    Week: 'week',
    Month: 'month',
    Year: 'year',
    All: 'all'
} as const;
export type SearchRedditTimeFilterEnum = typeof SearchRedditTimeFilterEnum[keyof typeof SearchRedditTimeFilterEnum];
/**
 * @export
 */
export const SearchRedditSortEnum = {
    Relevance: 'relevance',
    Hot: 'hot',
    Top: 'top',
    New: 'new',
    Comments: 'comments'
} as const;
export type SearchRedditSortEnum = typeof SearchRedditSortEnum[keyof typeof SearchRedditSortEnum];
