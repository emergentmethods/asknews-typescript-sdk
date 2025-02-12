/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.17.4
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
 * @interface AlertLog
 */
export interface AlertLog {
    /**
     * 
     * @type {string}
     * @memberof AlertLog
     */
    id: string;
    /**
     * 
     * @type {Date}
     * @memberof AlertLog
     */
    createdAt: Date;
    /**
     * 
     * @type {string}
     * @memberof AlertLog
     */
    alertId: string;
    /**
     * 
     * @type {string}
     * @memberof AlertLog
     */
    userId: string;
    /**
     * 
     * @type {boolean}
     * @memberof AlertLog
     */
    alert: boolean;
    /**
     * 
     * @type {string}
     * @memberof AlertLog
     */
    reasoning: string;
    /**
     * 
     * @type {string}
     * @memberof AlertLog
     */
    report?: string;
    /**
     * 
     * @type {string}
     * @memberof AlertLog
     */
    reportUrl?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof AlertLog
     */
    articleIds: Array<string>;
    /**
     * 
     * @type {object}
     * @memberof AlertLog
     */
    webhook?: object;
}

/**
 * Check if a given object implements the AlertLog interface.
 */
export function instanceOfAlertLog(value: object): boolean {
    if (!('id' in value)) return false;
    if (!('createdAt' in value)) return false;
    if (!('alertId' in value)) return false;
    if (!('userId' in value)) return false;
    if (!('alert' in value)) return false;
    if (!('reasoning' in value)) return false;
    if (!('articleIds' in value)) return false;
    return true;
}

export function AlertLogFromJSON(json: any): AlertLog {
    return AlertLogFromJSONTyped(json, false);
}

export function AlertLogFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlertLog {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'createdAt': (new Date(json['created_at'])),
        'alertId': json['alert_id'],
        'userId': json['user_id'],
        'alert': json['alert'],
        'reasoning': json['reasoning'],
        'report': json['report'] == null ? undefined : json['report'],
        'reportUrl': json['report_url'] == null ? undefined : json['report_url'],
        'articleIds': json['article_ids'],
        'webhook': json['webhook'] == null ? undefined : json['webhook'],
    };
}

export function AlertLogToJSON(value?: AlertLog | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'created_at': ((value['createdAt']).toISOString()),
        'alert_id': value['alertId'],
        'user_id': value['userId'],
        'alert': value['alert'],
        'reasoning': value['reasoning'],
        'report': value['report'],
        'report_url': value['reportUrl'],
        'article_ids': value['articleIds'],
        'webhook': value['webhook'],
    };
}

