/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.17.5
 * Contact: contact@emergentmethods.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  AbcAPIErrorModel33,
  AbcAPIErrorModel34,
  AbcAPIErrorModel35,
  AbcAPIErrorModel36,
  AsknewsApiErrorsAPIErrorModel,
  FinanceResponse,
  ValidationErrorModel,
} from '../models/index';
import {
    AbcAPIErrorModel33FromJSON,
    AbcAPIErrorModel33ToJSON,
    AbcAPIErrorModel34FromJSON,
    AbcAPIErrorModel34ToJSON,
    AbcAPIErrorModel35FromJSON,
    AbcAPIErrorModel35ToJSON,
    AbcAPIErrorModel36FromJSON,
    AbcAPIErrorModel36ToJSON,
    AsknewsApiErrorsAPIErrorModelFromJSON,
    AsknewsApiErrorsAPIErrorModelToJSON,
    FinanceResponseFromJSON,
    FinanceResponseToJSON,
    ValidationErrorModelFromJSON,
    ValidationErrorModelToJSON,
} from '../models/index';

export interface GetAssetSentimentRequest {
    asset: GetAssetSentimentAssetEnum;
    metric?: GetAssetSentimentMetricEnum;
    dateFrom?: Date;
    dateTo?: Date;
}

/**
 * 
 */
export class AnalyticsApi extends runtime.BaseAPI {

    /**
     * Get the news sentiment for a given asset during a provided period of time.  This endpoint is good for narrow AI, like using in combination with a regressor to forecast prices etc.
     * Get a timeseries of finance news sentiment for assets
     */
    async getAssetSentimentRaw(requestParameters: GetAssetSentimentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FinanceResponse> > {
        if (requestParameters['asset'] == null) {
            throw new runtime.RequiredError(
                'asset',
                'Required parameter "asset" was null or undefined when calling getAssetSentiment().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['asset'] != null) {
            queryParameters['asset'] = requestParameters['asset'];
        }

        if (requestParameters['metric'] != null) {
            queryParameters['metric'] = requestParameters['metric'];
        }

        if (requestParameters['dateFrom'] != null) {
            queryParameters['date_from'] = (requestParameters['dateFrom'] as any).toISOString();
        }

        if (requestParameters['dateTo'] != null) {
            queryParameters['date_to'] = (requestParameters['dateTo'] as any).toISOString();
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/analytics/finance/sentiment`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);


        return new runtime.JSONApiResponse(response, (jsonValue) => FinanceResponseFromJSON(jsonValue));
    }

    /**
     * Get the news sentiment for a given asset during a provided period of time.  This endpoint is good for narrow AI, like using in combination with a regressor to forecast prices etc.
     * Get a timeseries of finance news sentiment for assets
     */
    async getAssetSentiment(requestParameters: GetAssetSentimentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FinanceResponse> {
        const response = await this.getAssetSentimentRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const GetAssetSentimentAssetEnum = {
    Bitcoin: 'bitcoin',
    Ethereum: 'ethereum',
    Cardano: 'cardano',
    Uniswap: 'uniswap',
    Ripple: 'ripple',
    Solana: 'solana',
    Polkadot: 'polkadot',
    Polygon: 'polygon',
    Chainlink: 'chainlink',
    Tether: 'tether',
    Dogecoin: 'dogecoin',
    Monero: 'monero',
    Tron: 'tron',
    Binance: 'binance',
    Aave: 'aave',
    Tesla: 'tesla',
    Microsoft: 'microsoft',
    Amazon: 'amazon'
} as const;
export type GetAssetSentimentAssetEnum = typeof GetAssetSentimentAssetEnum[keyof typeof GetAssetSentimentAssetEnum];
/**
 * @export
 */
export const GetAssetSentimentMetricEnum = {
    Positive: 'news_positive',
    Negative: 'news_negative',
    Total: 'news_total',
    PositiveWeighted: 'news_positive_weighted',
    NegativeWeighted: 'news_negative_weighted',
    TotalWeighted: 'news_total_weighted'
} as const;
export type GetAssetSentimentMetricEnum = typeof GetAssetSentimentMetricEnum[keyof typeof GetAssetSentimentMetricEnum];
