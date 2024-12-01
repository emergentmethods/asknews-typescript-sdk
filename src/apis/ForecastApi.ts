/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.15.5
 * Contact: contact@emergentmethods.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  ForecastResponse,
  HTTPValidationError,
} from '../models/index';
import {
    ForecastResponseFromJSON,
    ForecastResponseToJSON,
    HTTPValidationErrorFromJSON,
    HTTPValidationErrorToJSON,
} from '../models/index';

export interface GetForecastRequest {
    query: string;
    lookback?: number;
    articlesToUse?: number;
    method?: GetForecastMethodEnum;
    model?: GetForecastModelEnum;
    cutoffDate?: string;
    useReddit?: boolean;
    additionalContext?: string;
    webSearch?: boolean;
    expert?: GetForecastExpertEnum;
}

/**
 * 
 */
export class ForecastApi extends runtime.BaseAPI {

    /**
     * Make an expert forecast for a news event.  This endpoint reaches into the news archive, looking back `lookback` days to extract the most relevant news articles, building a timeline of events, and then making an expert forecast.  This endpoint is more expensive than the search endpoint, it is calling gpt-4o or claude 3-5 on approx 15k tokens to build the forecast. This endpoint counts toward \"deep\" calls in the billing system.  It returns the forecast, the reasoning, and the sources.
     * Make an expert forecast for a news event.
     */
    async getForecastRaw(requestParameters: GetForecastRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ForecastResponse> > {
        if (requestParameters['query'] == null) {
            throw new runtime.RequiredError(
                'query',
                'Required parameter "query" was null or undefined when calling getForecast().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['query'] != null) {
            queryParameters['query'] = requestParameters['query'];
        }

        if (requestParameters['lookback'] != null) {
            queryParameters['lookback'] = requestParameters['lookback'];
        }

        if (requestParameters['articlesToUse'] != null) {
            queryParameters['articles_to_use'] = requestParameters['articlesToUse'];
        }

        if (requestParameters['method'] != null) {
            queryParameters['method'] = requestParameters['method'];
        }

        if (requestParameters['model'] != null) {
            queryParameters['model'] = requestParameters['model'];
        }

        if (requestParameters['cutoffDate'] != null) {
            queryParameters['cutoff_date'] = requestParameters['cutoffDate'];
        }

        if (requestParameters['useReddit'] != null) {
            queryParameters['use_reddit'] = requestParameters['useReddit'];
        }

        if (requestParameters['additionalContext'] != null) {
            queryParameters['additional_context'] = requestParameters['additionalContext'];
        }

        if (requestParameters['webSearch'] != null) {
            queryParameters['web_search'] = requestParameters['webSearch'];
        }

        if (requestParameters['expert'] != null) {
            queryParameters['expert'] = requestParameters['expert'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/chat/forecast`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);


        return new runtime.JSONApiResponse(response, (jsonValue) => ForecastResponseFromJSON(jsonValue));
    }

    /**
     * Make an expert forecast for a news event.  This endpoint reaches into the news archive, looking back `lookback` days to extract the most relevant news articles, building a timeline of events, and then making an expert forecast.  This endpoint is more expensive than the search endpoint, it is calling gpt-4o or claude 3-5 on approx 15k tokens to build the forecast. This endpoint counts toward \"deep\" calls in the billing system.  It returns the forecast, the reasoning, and the sources.
     * Make an expert forecast for a news event.
     */
    async getForecast(requestParameters: GetForecastRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ForecastResponse> {
        const response = await this.getForecastRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const GetForecastMethodEnum = {
    Kw: 'kw'
} as const;
export type GetForecastMethodEnum = typeof GetForecastMethodEnum[keyof typeof GetForecastMethodEnum];
/**
 * @export
 */
export const GetForecastModelEnum = {
    Gpt4o: 'gpt-4o',
    Gpt4oMini: 'gpt-4o-mini',
    Claude35Sonnet20240620: 'claude-3-5-sonnet-20240620',
    CommandNightly: 'command-nightly',
    MetaLlamaMetaLlama31405BInstruct: 'meta-llama/Meta-Llama-3.1-405B-Instruct',
    O1Preview: 'o1-preview',
    O1Mini: 'o1-mini'
} as const;
export type GetForecastModelEnum = typeof GetForecastModelEnum[keyof typeof GetForecastModelEnum];
/**
 * @export
 */
export const GetForecastExpertEnum = {
    General: 'general',
    Sports: 'sports'
} as const;
export type GetForecastExpertEnum = typeof GetForecastExpertEnum[keyof typeof GetForecastExpertEnum];
