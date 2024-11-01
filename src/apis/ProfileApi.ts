/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.14.6
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
  ProfileResponse,
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
    ProfileResponseFromJSON,
    ProfileResponseToJSON,
    ValidationErrorModelFromJSON,
    ValidationErrorModelToJSON,
} from '../models/index';

/**
 * 
 */
export class ProfileApi extends runtime.BaseAPI {

    /**
     * Get the current profile
     * Get the current user\'s profile
     */
    async getUserProfileRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProfileResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/profiles/me`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProfileResponseFromJSON(jsonValue));
    }

    /**
     * Get the current profile
     * Get the current user\'s profile
     */
    async getUserProfile(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProfileResponse> {
        const response = await this.getUserProfileRaw(initOverrides);
        return await response.value();
    }

}
