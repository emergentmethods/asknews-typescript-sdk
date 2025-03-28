/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.18.6
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
 * @interface CreateAlertRequest
 */
export interface CreateAlertRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateAlertRequest
     */
    query?: string;
    /**
     * The cron schedule for the alert. For example hourly is '0 * * * *'. See https://crontab.run/ for more examples
     * @type {string}
     * @memberof CreateAlertRequest
     */
    cron: string;
    /**
     * 
     * @type {string}
     * @memberof CreateAlertRequest
     */
    model: CreateAlertRequestModelEnum | null;
    /**
     * 
     * @type {string}
     * @memberof CreateAlertRequest
     */
    shareLink?: string;
    /**
     * 
     * @type {Array<SourcesInner>}
     * @memberof CreateAlertRequest
     */
    sources: Array<SourcesInner>;
    /**
     * 
     * @type {ReportRequest}
     * @memberof CreateAlertRequest
     */
    report?: ReportRequest;
    /**
     * 
     * @type {Array<TriggersInner>}
     * @memberof CreateAlertRequest
     */
    triggers: Array<TriggersInner>;
    /**
     * Whether to always trigger the alert. Default is False. This skips the alert check and run triggers immediately
     * @type {boolean}
     * @memberof CreateAlertRequest
     */
    alwaysTrigger?: boolean;
    /**
     * Whether to repeat the alert. Default is True. If False, the alert will be disabled after it triggers once
     * @type {boolean}
     * @memberof CreateAlertRequest
     */
    repeat?: boolean;
    /**
     * Whether the alert is active or not. Default is True.
     * @type {boolean}
     * @memberof CreateAlertRequest
     */
    active?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof CreateAlertRequest
     */
    expiresAt?: Date;
}


/**
 * @export
 */
export const CreateAlertRequestModelEnum = {
    MetaLlamaMetaLlama318BInstruct: 'meta-llama/Meta-Llama-3.1-8B-Instruct',
    Gpt4oMini: 'gpt-4o-mini',
    Gpt4o: 'gpt-4o',
    O3Mini: 'o3-mini',
    MetaLlamaMetaLlama3370BInstruct: 'meta-llama/Meta-Llama-3.3-70B-Instruct'
} as const;
export type CreateAlertRequestModelEnum = typeof CreateAlertRequestModelEnum[keyof typeof CreateAlertRequestModelEnum];


/**
 * Check if a given object implements the CreateAlertRequest interface.
 */
export function instanceOfCreateAlertRequest(value: object): boolean {
    if (!('cron' in value)) return false;
    if (!('model' in value)) return false;
    if (!('sources' in value)) return false;
    if (!('triggers' in value)) return false;
    return true;
}

export function CreateAlertRequestFromJSON(json: any): CreateAlertRequest {
    return CreateAlertRequestFromJSONTyped(json, false);
}

export function CreateAlertRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateAlertRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'query': json['query'] == null ? undefined : json['query'],
        'cron': json['cron'],
        'model': json['model'],
        'shareLink': json['share_link'] == null ? undefined : json['share_link'],
        'sources': ((json['sources'] as Array<any>).map(SourcesInnerFromJSON)),
        'report': json['report'] == null ? undefined : ReportRequestFromJSON(json['report']),
        'triggers': ((json['triggers'] as Array<any>).map(TriggersInnerFromJSON)),
        'alwaysTrigger': json['always_trigger'] == null ? undefined : json['always_trigger'],
        'repeat': json['repeat'] == null ? undefined : json['repeat'],
        'active': json['active'] == null ? undefined : json['active'],
        'expiresAt': json['expires_at'] == null ? undefined : (new Date(json['expires_at'])),
    };
}

export function CreateAlertRequestToJSON(value?: CreateAlertRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'query': value['query'],
        'cron': value['cron'],
        'model': value['model'],
        'share_link': value['shareLink'],
        'sources': ((value['sources'] as Array<any>).map(SourcesInnerToJSON)),
        'report': ReportRequestToJSON(value['report']),
        'triggers': ((value['triggers'] as Array<any>).map(TriggersInnerToJSON)),
        'always_trigger': value['alwaysTrigger'],
        'repeat': value['repeat'],
        'active': value['active'],
        'expires_at': value['expiresAt'] == null ? undefined : ((value['expiresAt'] as any).toISOString()),
    };
}

