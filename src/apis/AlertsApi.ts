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
  AlertResponse,
  CreateAlertRequest,
  HTTPValidationError,
  PaginatedResponseAlertLog,
  PaginatedResponseAlertResponse,
  UpdateAlertRequest,
} from '../models/index';
import {
    AlertResponseFromJSON,
    AlertResponseToJSON,
    CreateAlertRequestFromJSON,
    CreateAlertRequestToJSON,
    HTTPValidationErrorFromJSON,
    HTTPValidationErrorToJSON,
    PaginatedResponseAlertLogFromJSON,
    PaginatedResponseAlertLogToJSON,
    PaginatedResponseAlertResponseFromJSON,
    PaginatedResponseAlertResponseToJSON,
    UpdateAlertRequestFromJSON,
    UpdateAlertRequestToJSON,
} from '../models/index';

export interface CreateAlertOperationRequest {
    createAlertRequest: CreateAlertRequest;
}

export interface DeleteAlertRequest {
    alertId: string;
}

export interface GetAlertRequest {
    alertId: string;
}

export interface GetAlertLogsRequest {
    alertId: string;
    userId?: string;
    page?: number;
    perPage?: number;
    all?: boolean;
    startTimestamp?: number;
    endTimestamp?: number;
}

export interface GetAlertsRequest {
    page?: number;
    perPage?: number;
    all?: boolean;
}

export interface GetAllAlertLogsRequest {
    alertId?: string;
    userId?: string;
    page?: number;
    perPage?: number;
    all?: boolean;
    startTimestamp?: number;
    endTimestamp?: number;
}

export interface PutAlertRequest {
    alertId: string;
    updateAlertRequest: UpdateAlertRequest;
}

/**
 * 
 */
export class AlertsApi extends runtime.BaseAPI {

    /**
     * Create an alert.
     * Create an alert
     */
    async createAlertRaw(requestParameters: CreateAlertOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AlertResponse>  | runtime.StreamApiResponse> {
        if (requestParameters['createAlertRequest'] == null) {
            throw new runtime.RequiredError(
                'createAlertRequest',
                'Required parameter "createAlertRequest" was null or undefined when calling createAlert().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v1/chat/alerts`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateAlertRequestToJSON(requestParameters['createAlertRequest']),
        }, initOverrides);

        if ('createAlertRequest' in requestParameters && requestParameters['createAlertRequest'] != null && 'stream' in requestParameters['createAlertRequest'] && requestParameters['createAlertRequest']['stream'] === true) {
            return new runtime.StreamApiResponse(response);
        }

        return new runtime.JSONApiResponse(response, (jsonValue) => AlertResponseFromJSON(jsonValue));
    }

    /**
     * Create an alert.
     * Create an alert
     */
    async createAlert(requestParameters: CreateAlertOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AlertResponse | ReadableStream<any>> {
        const response = await this.createAlertRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete an alert.
     * Delete an alert
     */
    async deleteAlertRaw(requestParameters: DeleteAlertRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void> > {
        if (requestParameters['alertId'] == null) {
            throw new runtime.RequiredError(
                'alertId',
                'Required parameter "alertId" was null or undefined when calling deleteAlert().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/chat/alerts/{alert_id}`.replace(`{${"alert_id"}}`, encodeURIComponent(String(requestParameters['alertId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);


        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete an alert.
     * Delete an alert
     */
    async deleteAlert(requestParameters: DeleteAlertRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteAlertRaw(requestParameters, initOverrides);
    }

    /**
     * Get an alert.
     * Get an alert
     */
    async getAlertRaw(requestParameters: GetAlertRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AlertResponse> > {
        if (requestParameters['alertId'] == null) {
            throw new runtime.RequiredError(
                'alertId',
                'Required parameter "alertId" was null or undefined when calling getAlert().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/chat/alerts/{alert_id}`.replace(`{${"alert_id"}}`, encodeURIComponent(String(requestParameters['alertId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);


        return new runtime.JSONApiResponse(response, (jsonValue) => AlertResponseFromJSON(jsonValue));
    }

    /**
     * Get an alert.
     * Get an alert
     */
    async getAlert(requestParameters: GetAlertRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AlertResponse> {
        const response = await this.getAlertRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get alert logs.
     * Get alert logs
     */
    async getAlertLogsRaw(requestParameters: GetAlertLogsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaginatedResponseAlertLog> > {
        if (requestParameters['alertId'] == null) {
            throw new runtime.RequiredError(
                'alertId',
                'Required parameter "alertId" was null or undefined when calling getAlertLogs().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['userId'] != null) {
            queryParameters['user_id'] = requestParameters['userId'];
        }

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }

        if (requestParameters['perPage'] != null) {
            queryParameters['per_page'] = requestParameters['perPage'];
        }

        if (requestParameters['all'] != null) {
            queryParameters['all'] = requestParameters['all'];
        }

        if (requestParameters['startTimestamp'] != null) {
            queryParameters['start_timestamp'] = requestParameters['startTimestamp'];
        }

        if (requestParameters['endTimestamp'] != null) {
            queryParameters['end_timestamp'] = requestParameters['endTimestamp'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/chat/alerts/{alert_id}/logs`.replace(`{${"alert_id"}}`, encodeURIComponent(String(requestParameters['alertId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);


        return new runtime.JSONApiResponse(response, (jsonValue) => PaginatedResponseAlertLogFromJSON(jsonValue));
    }

    /**
     * Get alert logs.
     * Get alert logs
     */
    async getAlertLogs(requestParameters: GetAlertLogsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaginatedResponseAlertLog> {
        const response = await this.getAlertLogsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get all created alerts.
     * Get all created alerts
     */
    async getAlertsRaw(requestParameters: GetAlertsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaginatedResponseAlertResponse> > {
        const queryParameters: any = {};

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }

        if (requestParameters['perPage'] != null) {
            queryParameters['per_page'] = requestParameters['perPage'];
        }

        if (requestParameters['all'] != null) {
            queryParameters['all'] = requestParameters['all'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/chat/alerts`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);


        return new runtime.JSONApiResponse(response, (jsonValue) => PaginatedResponseAlertResponseFromJSON(jsonValue));
    }

    /**
     * Get all created alerts.
     * Get all created alerts
     */
    async getAlerts(requestParameters: GetAlertsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaginatedResponseAlertResponse> {
        const response = await this.getAlertsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get all alert logs.
     * Get all alert logs
     */
    async getAllAlertLogsRaw(requestParameters: GetAllAlertLogsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaginatedResponseAlertLog> > {
        const queryParameters: any = {};

        if (requestParameters['alertId'] != null) {
            queryParameters['alert_id'] = requestParameters['alertId'];
        }

        if (requestParameters['userId'] != null) {
            queryParameters['user_id'] = requestParameters['userId'];
        }

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }

        if (requestParameters['perPage'] != null) {
            queryParameters['per_page'] = requestParameters['perPage'];
        }

        if (requestParameters['all'] != null) {
            queryParameters['all'] = requestParameters['all'];
        }

        if (requestParameters['startTimestamp'] != null) {
            queryParameters['start_timestamp'] = requestParameters['startTimestamp'];
        }

        if (requestParameters['endTimestamp'] != null) {
            queryParameters['end_timestamp'] = requestParameters['endTimestamp'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/chat/alerts/logs`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);


        return new runtime.JSONApiResponse(response, (jsonValue) => PaginatedResponseAlertLogFromJSON(jsonValue));
    }

    /**
     * Get all alert logs.
     * Get all alert logs
     */
    async getAllAlertLogs(requestParameters: GetAllAlertLogsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaginatedResponseAlertLog> {
        const response = await this.getAllAlertLogsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update an alert.
     * Update an alert
     */
    async putAlertRaw(requestParameters: PutAlertRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AlertResponse>  | runtime.StreamApiResponse> {
        if (requestParameters['alertId'] == null) {
            throw new runtime.RequiredError(
                'alertId',
                'Required parameter "alertId" was null or undefined when calling putAlert().'
            );
        }

        if (requestParameters['updateAlertRequest'] == null) {
            throw new runtime.RequiredError(
                'updateAlertRequest',
                'Required parameter "updateAlertRequest" was null or undefined when calling putAlert().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v1/chat/alerts/{alert_id}`.replace(`{${"alert_id"}}`, encodeURIComponent(String(requestParameters['alertId']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateAlertRequestToJSON(requestParameters['updateAlertRequest']),
        }, initOverrides);

        if ('updateAlertRequest' in requestParameters && requestParameters['updateAlertRequest'] != null && 'stream' in requestParameters['updateAlertRequest'] && requestParameters['updateAlertRequest']['stream'] === true) {
            return new runtime.StreamApiResponse(response);
        }

        return new runtime.JSONApiResponse(response, (jsonValue) => AlertResponseFromJSON(jsonValue));
    }

    /**
     * Update an alert.
     * Update an alert
     */
    async putAlert(requestParameters: PutAlertRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AlertResponse | ReadableStream<any>> {
        const response = await this.putAlertRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
