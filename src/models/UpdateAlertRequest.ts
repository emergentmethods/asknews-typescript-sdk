/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.18.3
 * Contact: contact@emergentmethods.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { ReportRequest } from './ReportRequest';
import {
    ReportRequestFromJSON,
    ReportRequestFromJSONTyped,
    ReportRequestToJSON,
} from './ReportRequest';
import type { SourcesInner } from './SourcesInner';
import {
    SourcesInnerFromJSON,
    SourcesInnerFromJSONTyped,
    SourcesInnerToJSON,
} from './SourcesInner';
import type { TriggersInner } from './TriggersInner';
import {
    TriggersInnerFromJSON,
    TriggersInnerFromJSONTyped,
    TriggersInnerToJSON,
} from './TriggersInner';

/**
 * 
 * @export
 * @interface UpdateAlertRequest
 */
export interface UpdateAlertRequest {
    /**
     * 
     * @type {string}
     * @memberof UpdateAlertRequest
     */
    query?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateAlertRequest
     */
    cron?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateAlertRequest
     */
    model?: UpdateAlertRequestModelEnum;
    /**
     * 
     * @type {string}
     * @memberof UpdateAlertRequest
     */
    shareLink?: string;
    /**
     * 
     * @type {Array<SourcesInner>}
     * @memberof UpdateAlertRequest
     */
    sources?: Array<SourcesInner>;
    /**
     * 
     * @type {ReportRequest}
     * @memberof UpdateAlertRequest
     */
    report?: ReportRequest;
    /**
     * 
     * @type {Array<TriggersInner>}
     * @memberof UpdateAlertRequest
     */
    triggers?: Array<TriggersInner>;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateAlertRequest
     */
    alwaysTrigger?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateAlertRequest
     */
    repeat?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateAlertRequest
     */
    active?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof UpdateAlertRequest
     */
    expiresAt?: Date;
}


/**
 * @export
 */
export const UpdateAlertRequestModelEnum = {
    MetaLlamaMetaLlama318BInstruct: 'meta-llama/Meta-Llama-3.1-8B-Instruct',
    Gpt4oMini: 'gpt-4o-mini',
    Gpt4o: 'gpt-4o',
    O3Mini: 'o3-mini',
    MetaLlamaMetaLlama3370BInstruct: 'meta-llama/Meta-Llama-3.3-70B-Instruct'
} as const;
export type UpdateAlertRequestModelEnum = typeof UpdateAlertRequestModelEnum[keyof typeof UpdateAlertRequestModelEnum];


/**
 * Check if a given object implements the UpdateAlertRequest interface.
 */
export function instanceOfUpdateAlertRequest(value: object): boolean {
    return true;
}

export function UpdateAlertRequestFromJSON(json: any): UpdateAlertRequest {
    return UpdateAlertRequestFromJSONTyped(json, false);
}

export function UpdateAlertRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateAlertRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'query': json['query'] == null ? undefined : json['query'],
        'cron': json['cron'] == null ? undefined : json['cron'],
        'model': json['model'] == null ? undefined : json['model'],
        'shareLink': json['share_link'] == null ? undefined : json['share_link'],
        'sources': json['sources'] == null ? undefined : ((json['sources'] as Array<any>).map(SourcesInnerFromJSON)),
        'report': json['report'] == null ? undefined : ReportRequestFromJSON(json['report']),
        'triggers': json['triggers'] == null ? undefined : ((json['triggers'] as Array<any>).map(TriggersInnerFromJSON)),
        'alwaysTrigger': json['always_trigger'] == null ? undefined : json['always_trigger'],
        'repeat': json['repeat'] == null ? undefined : json['repeat'],
        'active': json['active'] == null ? undefined : json['active'],
        'expiresAt': json['expires_at'] == null ? undefined : (new Date(json['expires_at'])),
    };
}

export function UpdateAlertRequestToJSON(value?: UpdateAlertRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'query': value['query'],
        'cron': value['cron'],
        'model': value['model'],
        'share_link': value['shareLink'],
        'sources': value['sources'] == null ? undefined : ((value['sources'] as Array<any>).map(SourcesInnerToJSON)),
        'report': ReportRequestToJSON(value['report']),
        'triggers': value['triggers'] == null ? undefined : ((value['triggers'] as Array<any>).map(TriggersInnerToJSON)),
        'always_trigger': value['alwaysTrigger'],
        'repeat': value['repeat'],
        'active': value['active'],
        'expires_at': value['expiresAt'] == null ? undefined : ((value['expiresAt'] as any).toISOString()),
    };
}

