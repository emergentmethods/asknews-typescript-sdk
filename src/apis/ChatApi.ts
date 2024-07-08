/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.8.6
 * Contact: contact@emergentmethods.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  AbcAPIErrorModel13,
  AbcAPIErrorModel14,
  AbcAPIErrorModel15,
  AbcAPIErrorModel16,
  AsknewsApiErrorsAPIErrorModel,
  CreateChatCompletionRequest,
  CreateChatCompletionResponse1,
  CreateChatCompletionResponseStream1,
  HTTPValidationError,
  ListModelResponse,
  ValidationErrorModel,
} from '../models/index';
import {
    AbcAPIErrorModel13FromJSON,
    AbcAPIErrorModel13ToJSON,
    AbcAPIErrorModel14FromJSON,
    AbcAPIErrorModel14ToJSON,
    AbcAPIErrorModel15FromJSON,
    AbcAPIErrorModel15ToJSON,
    AbcAPIErrorModel16FromJSON,
    AbcAPIErrorModel16ToJSON,
    AsknewsApiErrorsAPIErrorModelFromJSON,
    AsknewsApiErrorsAPIErrorModelToJSON,
    CreateChatCompletionRequestFromJSON,
    CreateChatCompletionRequestToJSON,
    CreateChatCompletionResponse1FromJSON,
    CreateChatCompletionResponse1ToJSON,
    CreateChatCompletionResponseStream1FromJSON,
    CreateChatCompletionResponseStream1ToJSON,
    HTTPValidationErrorFromJSON,
    HTTPValidationErrorToJSON,
    ListModelResponseFromJSON,
    ListModelResponseToJSON,
    ValidationErrorModelFromJSON,
    ValidationErrorModelToJSON,
} from '../models/index';

export interface GetChatCompletionsRequest {
    createChatCompletionRequest: CreateChatCompletionRequest;
}

export interface GetHeadlineQuestionsRequest {
    queries?: Array<string>;
}

/**
 * 
 */
export class ChatApi extends runtime.BaseAPI {

    /**
     * Get the chat completions for a given user message. This endpoint follows the OpenAI API spec. It includes a couple extra params, which include:  - **journalist_mode**: Whether to activate an auto prompt that is more keen on AP styling, citations, and fair reporting. Setting to false, you get a vanilla LLM with the news pre added to the system prompt. No other prompting. - **inline_citations**: Decides how you want the bot to cite sources. It can use brackets, or it can also include the markdown with URL automatically. - **asknews_watermark**: Whether to include the AskNews watermark in the response.
     * Get chat completions from a news-infused AI assistant
     */
    async getChatCompletionsRaw(requestParameters: GetChatCompletionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreateChatCompletionResponse1>> {
        if (requestParameters['createChatCompletionRequest'] == null) {
            throw new runtime.RequiredError(
                'createChatCompletionRequest',
                'Required parameter "createChatCompletionRequest" was null or undefined when calling getChatCompletions().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v1/openai/chat/completions`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateChatCompletionRequestToJSON(requestParameters['createChatCompletionRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateChatCompletionResponse1FromJSON(jsonValue));
    }

    /**
     * Get the chat completions for a given user message. This endpoint follows the OpenAI API spec. It includes a couple extra params, which include:  - **journalist_mode**: Whether to activate an auto prompt that is more keen on AP styling, citations, and fair reporting. Setting to false, you get a vanilla LLM with the news pre added to the system prompt. No other prompting. - **inline_citations**: Decides how you want the bot to cite sources. It can use brackets, or it can also include the markdown with URL automatically. - **asknews_watermark**: Whether to include the AskNews watermark in the response.
     * Get chat completions from a news-infused AI assistant
     */
    async getChatCompletions(requestParameters: GetChatCompletionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateChatCompletionResponse1> {
        const response = await this.getChatCompletionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get the headline example questions related to the given queries.
     * Get example headline questions
     */
    async getHeadlineQuestionsRaw(requestParameters: GetHeadlineQuestionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<{ [key: string]: any; }>> {
        const queryParameters: any = {};

        if (requestParameters['queries'] != null) {
            queryParameters['queries'] = requestParameters['queries'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/chat/questions`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Get the headline example questions related to the given queries.
     * Get example headline questions
     */
    async getHeadlineQuestions(requestParameters: GetHeadlineQuestionsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: any; }> {
        const response = await this.getHeadlineQuestionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List the available chat models.
     * List available chat models
     */
    async listChatModelsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListModelResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/openai/models`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ListModelResponseFromJSON(jsonValue));
    }

    /**
     * List the available chat models.
     * List available chat models
     */
    async listChatModels(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListModelResponse> {
        const response = await this.listChatModelsRaw(initOverrides);
        return await response.value();
    }

}
