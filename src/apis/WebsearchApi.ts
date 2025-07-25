/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.19.6
 * Contact: contact@emergentmethods.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  HTTPValidationError,
  WebSearchResponse,
} from '../models/index';
import {
    HTTPValidationErrorFromJSON,
    HTTPValidationErrorToJSON,
    WebSearchResponseFromJSON,
    WebSearchResponseToJSON,
} from '../models/index';

export interface LiveWebSearchRequest {
    queries: Array<string>;
    lookback?: number;
}

/**
 * 
 */
export class WebsearchApi extends runtime.BaseAPI {

    /**
     * Run a live websearch on a set of queries, get back a fully structured and LLM-distilled response (in addition to the raw text if you need that as well).  Your response includes as_string and as_dicts, where as_string is a prompt-optimized distillation of the information, done by an LLM. as_dicts contains all the details necessary to feed into other parts of your application.
     * Run a live websearch.
     */
    async liveWebSearchRaw(requestParameters: LiveWebSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WebSearchResponse> > {
        if (requestParameters['queries'] == null) {
            throw new runtime.RequiredError(
                'queries',
                'Required parameter "queries" was null or undefined when calling liveWebSearch().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['queries'] != null) {
            queryParameters['queries'] = requestParameters['queries'];
        }

        if (requestParameters['lookback'] != null) {
            queryParameters['lookback'] = requestParameters['lookback'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/chat/websearch`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);


        return new runtime.JSONApiResponse(response, (jsonValue) => WebSearchResponseFromJSON(jsonValue));
    }

    /**
     * Run a live websearch on a set of queries, get back a fully structured and LLM-distilled response (in addition to the raw text if you need that as well).  Your response includes as_string and as_dicts, where as_string is a prompt-optimized distillation of the information, done by an LLM. as_dicts contains all the details necessary to feed into other parts of your application.
     * Run a live websearch.
     */
    async liveWebSearch(requestParameters: LiveWebSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WebSearchResponse> {
        const response = await this.liveWebSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
