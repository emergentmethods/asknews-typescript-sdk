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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface AlertResponse
 */
export interface AlertResponse {
    /**
     * 
     * @type {string}
     * @memberof AlertResponse
     */
    id: string;
    /**
     * 
     * @type {Date}
     * @memberof AlertResponse
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof AlertResponse
     */
    updatedAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof AlertResponse
     */
    expiresAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof AlertResponse
     */
    userId: string;
    /**
     * 
     * @type {string}
     * @memberof AlertResponse
     */
    query?: string;
    /**
     * 
     * @type {string}
     * @memberof AlertResponse
     */
    cron: string;
    /**
     * 
     * @type {string}
     * @memberof AlertResponse
     */
    model: string | null;
    /**
     * 
     * @type {string}
     * @memberof AlertResponse
     */
    shareLink?: string;
    /**
     * 
     * @type {Array<object>}
     * @memberof AlertResponse
     */
    sources: Array<object>;
    /**
     * 
     * @type {object}
     * @memberof AlertResponse
     */
    report?: object;
    /**
     * 
     * @type {Array<object>}
     * @memberof AlertResponse
     */
    triggers: Array<object>;
    /**
     * 
     * @type {boolean}
     * @memberof AlertResponse
     */
    alwaysTrigger?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AlertResponse
     */
    repeat?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AlertResponse
     */
    active?: boolean;
}

/**
 * Check if a given object implements the AlertResponse interface.
 */
export function instanceOfAlertResponse(value: object): boolean {
    if (!('id' in value)) return false;
    if (!('userId' in value)) return false;
    if (!('cron' in value)) return false;
    if (!('model' in value)) return false;
    if (!('sources' in value)) return false;
    if (!('triggers' in value)) return false;
    return true;
}

export function AlertResponseFromJSON(json: any): AlertResponse {
    return AlertResponseFromJSONTyped(json, false);
}

export function AlertResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlertResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'createdAt': json['created_at'] == null ? undefined : (new Date(json['created_at'])),
        'updatedAt': json['updated_at'] == null ? undefined : (new Date(json['updated_at'])),
        'expiresAt': json['expires_at'] == null ? undefined : (new Date(json['expires_at'])),
        'userId': json['user_id'],
        'query': json['query'] == null ? undefined : json['query'],
        'cron': json['cron'],
        'model': json['model'],
        'shareLink': json['share_link'] == null ? undefined : json['share_link'],
        'sources': json['sources'],
        'report': json['report'] == null ? undefined : json['report'],
        'triggers': json['triggers'],
        'alwaysTrigger': json['always_trigger'] == null ? undefined : json['always_trigger'],
        'repeat': json['repeat'] == null ? undefined : json['repeat'],
        'active': json['active'] == null ? undefined : json['active'],
    };
}

export function AlertResponseToJSON(value?: AlertResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'created_at': value['createdAt'] == null ? undefined : ((value['createdAt'] as any).toISOString()),
        'updated_at': value['updatedAt'] == null ? undefined : ((value['updatedAt'] as any).toISOString()),
        'expires_at': value['expiresAt'] == null ? undefined : ((value['expiresAt'] as any).toISOString()),
        'user_id': value['userId'],
        'query': value['query'],
        'cron': value['cron'],
        'model': value['model'],
        'share_link': value['shareLink'],
        'sources': value['sources'],
        'report': value['report'],
        'triggers': value['triggers'],
        'always_trigger': value['alwaysTrigger'],
        'repeat': value['repeat'],
        'active': value['active'],
    };
}

