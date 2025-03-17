/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.18.2
 * Contact: contact@emergentmethods.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  AbcAPIErrorModel5,
  AbcAPIErrorModel6,
  AbcAPIErrorModel7,
  AbcAPIErrorModel8,
  AsknewsApiErrorsAPIErrorModel,
  BodyBuildGraph,
  GraphResponse,
  ValidationErrorModel,
} from '../models/index';
import {
    AbcAPIErrorModel5FromJSON,
    AbcAPIErrorModel5ToJSON,
    AbcAPIErrorModel6FromJSON,
    AbcAPIErrorModel6ToJSON,
    AbcAPIErrorModel7FromJSON,
    AbcAPIErrorModel7ToJSON,
    AbcAPIErrorModel8FromJSON,
    AbcAPIErrorModel8ToJSON,
    AsknewsApiErrorsAPIErrorModelFromJSON,
    AsknewsApiErrorsAPIErrorModelToJSON,
    BodyBuildGraphFromJSON,
    BodyBuildGraphToJSON,
    GraphResponseFromJSON,
    GraphResponseToJSON,
    ValidationErrorModelFromJSON,
    ValidationErrorModelToJSON,
} from '../models/index';

export interface BuildGraphRequest {
    bodyBuildGraph?: BodyBuildGraph;
}

/**
 * 
 */
export class GraphApi extends runtime.BaseAPI {

    /**
     * Explore our mega-news-knowledge-graph at which ever level of resolution you need.  Fully disambiguated and ready to be used in any downstream application.  Pass a natural language query to get a graph of the latest news. Add parameters to build a graph from our archive, filter your graph by language, country, reporting voice, sentiment, provocative levels, and much more.
     * Build a custom mega-news-knowledge graph
     */
    async buildGraphRaw(requestParameters: BuildGraphRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GraphResponse>  | runtime.StreamApiResponse> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v1/news/graph`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BodyBuildGraphToJSON(requestParameters['bodyBuildGraph']),
        }, initOverrides);

        if ('createChatCompletionRequest' in requestParameters && requestParameters['bodyBuildGraph'] != null && 'stream' in requestParameters['bodyBuildGraph'] && requestParameters['bodyBuildGraph']['stream'] === true) {
            return new runtime.StreamApiResponse(response);
        }

        return new runtime.JSONApiResponse(response, (jsonValue) => GraphResponseFromJSON(jsonValue));
    }

    /**
     * Explore our mega-news-knowledge-graph at which ever level of resolution you need.  Fully disambiguated and ready to be used in any downstream application.  Pass a natural language query to get a graph of the latest news. Add parameters to build a graph from our archive, filter your graph by language, country, reporting voice, sentiment, provocative levels, and much more.
     * Build a custom mega-news-knowledge graph
     */
    async buildGraph(requestParameters: BuildGraphRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GraphResponse | ReadableStream<any>> {
        const response = await this.buildGraphRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
