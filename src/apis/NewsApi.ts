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


import * as runtime from '../runtime';
import type {
  AbcAPIErrorModel1,
  AbcAPIErrorModel10,
  AbcAPIErrorModel11,
  AbcAPIErrorModel12,
  AbcAPIErrorModel13,
  AbcAPIErrorModel14,
  AbcAPIErrorModel15,
  AbcAPIErrorModel16,
  AbcAPIErrorModel2,
  AbcAPIErrorModel3,
  AbcAPIErrorModel4,
  AbcAPIErrorModel9,
  AsknewsApiErrorsAPIErrorModel,
  DomainUrl,
  Offset,
  ReportingVoice,
  SearchResponse,
  SearchResponseDictItem,
  SourceReportItem,
  ValidationErrorModel,
} from '../models/index';
import {
    AbcAPIErrorModel1FromJSON,
    AbcAPIErrorModel1ToJSON,
    AbcAPIErrorModel10FromJSON,
    AbcAPIErrorModel10ToJSON,
    AbcAPIErrorModel11FromJSON,
    AbcAPIErrorModel11ToJSON,
    AbcAPIErrorModel12FromJSON,
    AbcAPIErrorModel12ToJSON,
    AbcAPIErrorModel13FromJSON,
    AbcAPIErrorModel13ToJSON,
    AbcAPIErrorModel14FromJSON,
    AbcAPIErrorModel14ToJSON,
    AbcAPIErrorModel15FromJSON,
    AbcAPIErrorModel15ToJSON,
    AbcAPIErrorModel16FromJSON,
    AbcAPIErrorModel16ToJSON,
    AbcAPIErrorModel2FromJSON,
    AbcAPIErrorModel2ToJSON,
    AbcAPIErrorModel3FromJSON,
    AbcAPIErrorModel3ToJSON,
    AbcAPIErrorModel4FromJSON,
    AbcAPIErrorModel4ToJSON,
    AbcAPIErrorModel9FromJSON,
    AbcAPIErrorModel9ToJSON,
    AsknewsApiErrorsAPIErrorModelFromJSON,
    AsknewsApiErrorsAPIErrorModelToJSON,
    DomainUrlFromJSON,
    DomainUrlToJSON,
    OffsetFromJSON,
    OffsetToJSON,
    ReportingVoiceFromJSON,
    ReportingVoiceToJSON,
    SearchResponseFromJSON,
    SearchResponseToJSON,
    SearchResponseDictItemFromJSON,
    SearchResponseDictItemToJSON,
    SourceReportItemFromJSON,
    SourceReportItemToJSON,
    ValidationErrorModelFromJSON,
    ValidationErrorModelToJSON,
} from '../models/index';

export interface GetArticleRequest {
    articleId: string;
}

export interface GetSourcesReportRequest {
    nPoints?: number;
    startTimestamp?: number;
    endTimestamp?: number;
    metric?: GetSourcesReportMetricEnum;
    sampling?: GetSourcesReportSamplingEnum;
}

export interface SearchNewsRequest {
    query?: string;
    nArticles?: number;
    startTimestamp?: number;
    endTimestamp?: number;
    timeFilter?: SearchNewsTimeFilterEnum;
    returnType?: SearchNewsReturnTypeEnum;
    historical?: boolean;
    method?: SearchNewsMethodEnum;
    similarityScoreThreshold?: number;
    offset?: Offset;
    categories?: Array<SearchNewsCategoriesEnum>;
    docStartDelimiter?: string;
    docEndDelimiter?: string;
    provocative?: SearchNewsProvocativeEnum;
    reportingVoice?: ReportingVoice;
    domainUrl?: DomainUrl;
    pageRank?: number;
    diversifySources?: boolean;
    strategy?: SearchNewsStrategyEnum;
    hoursBack?: number;
    stringGuarantee?: Array<string>;
    stringGuaranteeOp?: SearchNewsStringGuaranteeOpEnum;
    reverseStringGuarantee?: Array<string>;
    entityGuarantee?: Array<string>;
    entityGuaranteeOp?: SearchNewsEntityGuaranteeOpEnum;
    returnGraphs?: boolean;
    returnGeo?: boolean;
    languages?: Array<SearchNewsLanguagesEnum>;
    countries?: Array<string>;
    continents?: Array<SearchNewsContinentsEnum>;
    sentiment?: SearchNewsSentimentEnum;
    premium?: boolean;
}

/**
 * 
 */
export class NewsApi extends runtime.BaseAPI {

    /**
     * Get a single article given a UUID.
     * Get an article by its UUID
     */
    async getArticleRaw(requestParameters: GetArticleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SearchResponseDictItem> > {
        if (requestParameters['articleId'] == null) {
            throw new runtime.RequiredError(
                'articleId',
                'Required parameter "articleId" was null or undefined when calling getArticle().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/news/{article_id}`.replace(`{${"article_id"}}`, encodeURIComponent(String(requestParameters['articleId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);


        return new runtime.JSONApiResponse(response, (jsonValue) => SearchResponseDictItemFromJSON(jsonValue));
    }

    /**
     * Get a single article given a UUID.
     * Get an article by its UUID
     */
    async getArticle(requestParameters: GetArticleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SearchResponseDictItem> {
        const response = await this.getArticleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint is primarly used for transparency and monitoring the diversity of the data.  Visualized at `https://asknews.app/transparency`.  Get the distribution of sources/languages/countries underlying AskNews content.
     * Get the sources underlying AskNews
     */
    async getSourcesReportRaw(requestParameters: GetSourcesReportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<SourceReportItem>> > {
        const queryParameters: any = {};

        if (requestParameters['nPoints'] != null) {
            queryParameters['n_points'] = requestParameters['nPoints'];
        }

        if (requestParameters['startTimestamp'] != null) {
            queryParameters['start_timestamp'] = requestParameters['startTimestamp'];
        }

        if (requestParameters['endTimestamp'] != null) {
            queryParameters['end_timestamp'] = requestParameters['endTimestamp'];
        }

        if (requestParameters['metric'] != null) {
            queryParameters['metric'] = requestParameters['metric'];
        }

        if (requestParameters['sampling'] != null) {
            queryParameters['sampling'] = requestParameters['sampling'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/sources`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);


        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(SourceReportItemFromJSON));
    }

    /**
     * This endpoint is primarly used for transparency and monitoring the diversity of the data.  Visualized at `https://asknews.app/transparency`.  Get the distribution of sources/languages/countries underlying AskNews content.
     * Get the sources underlying AskNews
     */
    async getSourcesReport(requestParameters: GetSourcesReportRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<SourceReportItem>> {
        const response = await this.getSourcesReportRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search for any news, up to the last 5 minutes or in our extensive historical archive filled with 100s of millions of articles.  Geared toward low-latency applications, where time is of the essence. For example, this endpoint is commonly used for quickly getting news context for an LLM.  This endpoint is also commonly used for synthetic data curation. For example, say you are fine-tuning a model for sports. You could filter  with `classification=\"Sports\"` and build a dataset of sports articles.  News articles come with an abundance of valuable metadata, including full summaries, sentiment, entities, reporting voice, page rank, language, and much much more.  An example of this data in action can be found and interacted with at `https://asknews.app/chat`
     * Search for enriched real-time news context
     */
    async searchNewsRaw(requestParameters: SearchNewsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SearchResponse> > {
        const queryParameters: any = {};

        if (requestParameters['query'] != null) {
            queryParameters['query'] = requestParameters['query'];
        }

        if (requestParameters['nArticles'] != null) {
            queryParameters['n_articles'] = requestParameters['nArticles'];
        }

        if (requestParameters['startTimestamp'] != null) {
            queryParameters['start_timestamp'] = requestParameters['startTimestamp'];
        }

        if (requestParameters['endTimestamp'] != null) {
            queryParameters['end_timestamp'] = requestParameters['endTimestamp'];
        }

        if (requestParameters['timeFilter'] != null) {
            queryParameters['time_filter'] = requestParameters['timeFilter'];
        }

        if (requestParameters['returnType'] != null) {
            queryParameters['return_type'] = requestParameters['returnType'];
        }

        if (requestParameters['historical'] != null) {
            queryParameters['historical'] = requestParameters['historical'];
        }

        if (requestParameters['method'] != null) {
            queryParameters['method'] = requestParameters['method'];
        }

        if (requestParameters['similarityScoreThreshold'] != null) {
            queryParameters['similarity_score_threshold'] = requestParameters['similarityScoreThreshold'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['offset'] = requestParameters['offset'];
        }

        if (requestParameters['categories'] != null) {
            queryParameters['categories'] = requestParameters['categories'];
        }

        if (requestParameters['docStartDelimiter'] != null) {
            queryParameters['doc_start_delimiter'] = requestParameters['docStartDelimiter'];
        }

        if (requestParameters['docEndDelimiter'] != null) {
            queryParameters['doc_end_delimiter'] = requestParameters['docEndDelimiter'];
        }

        if (requestParameters['provocative'] != null) {
            queryParameters['provocative'] = requestParameters['provocative'];
        }

        if (requestParameters['reportingVoice'] != null) {
            queryParameters['reporting_voice'] = requestParameters['reportingVoice'];
        }

        if (requestParameters['domainUrl'] != null) {
            queryParameters['domain_url'] = requestParameters['domainUrl'];
        }

        if (requestParameters['pageRank'] != null) {
            queryParameters['page_rank'] = requestParameters['pageRank'];
        }

        if (requestParameters['diversifySources'] != null) {
            queryParameters['diversify_sources'] = requestParameters['diversifySources'];
        }

        if (requestParameters['strategy'] != null) {
            queryParameters['strategy'] = requestParameters['strategy'];
        }

        if (requestParameters['hoursBack'] != null) {
            queryParameters['hours_back'] = requestParameters['hoursBack'];
        }

        if (requestParameters['stringGuarantee'] != null) {
            queryParameters['string_guarantee'] = requestParameters['stringGuarantee']!.join(runtime.COLLECTION_FORMATS[""]);
        }

        if (requestParameters['stringGuaranteeOp'] != null) {
            queryParameters['string_guarantee_op'] = requestParameters['stringGuaranteeOp'];
        }

        if (requestParameters['reverseStringGuarantee'] != null) {
            queryParameters['reverse_string_guarantee'] = requestParameters['reverseStringGuarantee']!.join(runtime.COLLECTION_FORMATS[""]);
        }

        if (requestParameters['entityGuarantee'] != null) {
            queryParameters['entity_guarantee'] = requestParameters['entityGuarantee']!.join(runtime.COLLECTION_FORMATS[""]);
        }

        if (requestParameters['entityGuaranteeOp'] != null) {
            queryParameters['entity_guarantee_op'] = requestParameters['entityGuaranteeOp'];
        }

        if (requestParameters['returnGraphs'] != null) {
            queryParameters['return_graphs'] = requestParameters['returnGraphs'];
        }

        if (requestParameters['returnGeo'] != null) {
            queryParameters['return_geo'] = requestParameters['returnGeo'];
        }

        if (requestParameters['languages'] != null) {
            queryParameters['languages'] = requestParameters['languages']!.join(runtime.COLLECTION_FORMATS[""]);
        }

        if (requestParameters['countries'] != null) {
            queryParameters['countries'] = requestParameters['countries']!.join(runtime.COLLECTION_FORMATS[""]);
        }

        if (requestParameters['continents'] != null) {
            queryParameters['continents'] = requestParameters['continents']!.join(runtime.COLLECTION_FORMATS[""]);
        }

        if (requestParameters['sentiment'] != null) {
            queryParameters['sentiment'] = requestParameters['sentiment'];
        }

        if (requestParameters['premium'] != null) {
            queryParameters['premium'] = requestParameters['premium'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/news/search`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);


        return new runtime.JSONApiResponse(response, (jsonValue) => SearchResponseFromJSON(jsonValue));
    }

    /**
     * Search for any news, up to the last 5 minutes or in our extensive historical archive filled with 100s of millions of articles.  Geared toward low-latency applications, where time is of the essence. For example, this endpoint is commonly used for quickly getting news context for an LLM.  This endpoint is also commonly used for synthetic data curation. For example, say you are fine-tuning a model for sports. You could filter  with `classification=\"Sports\"` and build a dataset of sports articles.  News articles come with an abundance of valuable metadata, including full summaries, sentiment, entities, reporting voice, page rank, language, and much much more.  An example of this data in action can be found and interacted with at `https://asknews.app/chat`
     * Search for enriched real-time news context
     */
    async searchNews(requestParameters: SearchNewsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SearchResponse> {
        const response = await this.searchNewsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const GetSourcesReportMetricEnum = {
    Duplication: 'duplication',
    CountriesDiversity: 'countries_diversity',
    LanguagesDiversity: 'languages_diversity',
    SourcesDiversity: 'sources_diversity',
    BucketLoss: 'bucket_loss'
} as const;
export type GetSourcesReportMetricEnum = typeof GetSourcesReportMetricEnum[keyof typeof GetSourcesReportMetricEnum];
/**
 * @export
 */
export const GetSourcesReportSamplingEnum = {
    _5m: '5m',
    _1h: '1h',
    _4h: '4h',
    _1d: '1d'
} as const;
export type GetSourcesReportSamplingEnum = typeof GetSourcesReportSamplingEnum[keyof typeof GetSourcesReportSamplingEnum];
/**
 * @export
 */
export const SearchNewsTimeFilterEnum = {
    CrawlDate: 'crawl_date',
    PubDate: 'pub_date'
} as const;
export type SearchNewsTimeFilterEnum = typeof SearchNewsTimeFilterEnum[keyof typeof SearchNewsTimeFilterEnum];
/**
 * @export
 */
export const SearchNewsReturnTypeEnum = {
    String: 'string',
    Dicts: 'dicts',
    Both: 'both'
} as const;
export type SearchNewsReturnTypeEnum = typeof SearchNewsReturnTypeEnum[keyof typeof SearchNewsReturnTypeEnum];
/**
 * @export
 */
export const SearchNewsMethodEnum = {
    Nl: 'nl',
    Kw: 'kw',
    Both: 'both'
} as const;
export type SearchNewsMethodEnum = typeof SearchNewsMethodEnum[keyof typeof SearchNewsMethodEnum];
/**
 * @export
 */
export const SearchNewsCategoriesEnum = {
    All: 'All',
    Business: 'Business',
    Crime: 'Crime',
    Politics: 'Politics',
    Science: 'Science',
    Sports: 'Sports',
    Technology: 'Technology',
    Military: 'Military',
    Health: 'Health',
    Entertainment: 'Entertainment',
    Finance: 'Finance',
    Culture: 'Culture',
    Climate: 'Climate',
    Environment: 'Environment',
    World: 'World'
} as const;
export type SearchNewsCategoriesEnum = typeof SearchNewsCategoriesEnum[keyof typeof SearchNewsCategoriesEnum];
/**
 * @export
 */
export const SearchNewsProvocativeEnum = {
    Unknown: 'unknown',
    Low: 'low',
    Medium: 'medium',
    High: 'high',
    All: 'all'
} as const;
export type SearchNewsProvocativeEnum = typeof SearchNewsProvocativeEnum[keyof typeof SearchNewsProvocativeEnum];
/**
 * @export
 */
export const SearchNewsStrategyEnum = {
    LatestNews: 'latest news',
    NewsKnowledge: 'news knowledge',
    Default: 'default'
} as const;
export type SearchNewsStrategyEnum = typeof SearchNewsStrategyEnum[keyof typeof SearchNewsStrategyEnum];
/**
 * @export
 */
export const SearchNewsStringGuaranteeOpEnum = {
    And: 'AND',
    Or: 'OR'
} as const;
export type SearchNewsStringGuaranteeOpEnum = typeof SearchNewsStringGuaranteeOpEnum[keyof typeof SearchNewsStringGuaranteeOpEnum];
/**
 * @export
 */
export const SearchNewsEntityGuaranteeOpEnum = {
    And: 'AND',
    Or: 'OR'
} as const;
export type SearchNewsEntityGuaranteeOpEnum = typeof SearchNewsEntityGuaranteeOpEnum[keyof typeof SearchNewsEntityGuaranteeOpEnum];
/**
 * @export
 */
export const SearchNewsLanguagesEnum = {
    En: 'en',
    De: 'de',
    Es: 'es',
    Fr: 'fr',
    It: 'it',
    Pt: 'pt',
    Ru: 'ru',
    Ar: 'ar',
    Tr: 'tr',
    Zh: 'zh',
    Jp: 'jp',
    Kr: 'kr',
    Sv: 'sv',
    Nl: 'nl',
    No: 'no',
    Da: 'da',
    Uk: 'uk',
    Pl: 'pl',
    Hi: 'hi'
} as const;
export type SearchNewsLanguagesEnum = typeof SearchNewsLanguagesEnum[keyof typeof SearchNewsLanguagesEnum];
/**
 * @export
 */
export const SearchNewsContinentsEnum = {
    Africa: 'Africa',
    Asia: 'Asia',
    Oceania: 'Oceania',
    Europe: 'Europe',
    MiddleEast: 'Middle East',
    NorthAmerica: 'North America',
    SouthAmerica: 'South America'
} as const;
export type SearchNewsContinentsEnum = typeof SearchNewsContinentsEnum[keyof typeof SearchNewsContinentsEnum];
/**
 * @export
 */
export const SearchNewsSentimentEnum = {
    Negative: 'negative',
    Neutral: 'neutral',
    Positive: 'positive'
} as const;
export type SearchNewsSentimentEnum = typeof SearchNewsSentimentEnum[keyof typeof SearchNewsSentimentEnum];
