/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.13.0
 * Contact: contact@emergentmethods.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  PingModel,
} from '../models/index';
import {
    PingModelFromJSON,
    PingModelToJSON,
} from '../models/index';

/**
 * 
 */
export class PingApi extends runtime.BaseAPI {

    /**
     * Ping
     */
    async pingRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PingModel>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PingModelFromJSON(jsonValue));
    }

    /**
     * Ping
     */
    async ping(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PingModel> {
        const response = await this.pingRaw(initOverrides);
        return await response.value();
    }

}
