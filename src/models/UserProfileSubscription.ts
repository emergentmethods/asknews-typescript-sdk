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
 * @interface UserProfileSubscription
 */
export interface UserProfileSubscription {
    /**
     * 
     * @type {string}
     * @memberof UserProfileSubscription
     */
    status: string;
    /**
     * 
     * @type {string}
     * @memberof UserProfileSubscription
     */
    plan: string;
    /**
     * 
     * @type {Date}
     * @memberof UserProfileSubscription
     */
    periodStart?: Date;
    /**
     * 
     * @type {Date}
     * @memberof UserProfileSubscription
     */
    periodEnd?: Date;
}

/**
 * Check if a given object implements the UserProfileSubscription interface.
 */
export function instanceOfUserProfileSubscription(value: object): boolean {
    if (!('status' in value)) return false;
    if (!('plan' in value)) return false;
    return true;
}

export function UserProfileSubscriptionFromJSON(json: any): UserProfileSubscription {
    return UserProfileSubscriptionFromJSONTyped(json, false);
}

export function UserProfileSubscriptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserProfileSubscription {
    if (json == null) {
        return json;
    }
    return {
        
        'status': json['status'],
        'plan': json['plan'],
        'periodStart': json['period_start'] == null ? undefined : (new Date(json['period_start'])),
        'periodEnd': json['period_end'] == null ? undefined : (new Date(json['period_end'])),
    };
}

export function UserProfileSubscriptionToJSON(value?: UserProfileSubscription | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'status': value['status'],
        'plan': value['plan'],
        'period_start': value['periodStart'] == null ? undefined : ((value['periodStart'] as any).toISOString()),
        'period_end': value['periodEnd'] == null ? undefined : ((value['periodEnd'] as any).toISOString()),
    };
}

