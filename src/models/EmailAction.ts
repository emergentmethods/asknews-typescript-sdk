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
import type { EmailParams } from './EmailParams';
import {
    EmailParamsFromJSON,
    EmailParamsFromJSONTyped,
    EmailParamsToJSON,
} from './EmailParams';

/**
 * 
 * @export
 * @interface EmailAction
 */
export interface EmailAction {
    /**
     * 
     * @type {string}
     * @memberof EmailAction
     */
    action?: EmailActionActionEnum;
    /**
     * 
     * @type {EmailParams}
     * @memberof EmailAction
     */
    params: EmailParams;
}


/**
 * @export
 */
export const EmailActionActionEnum = {
    Email: 'email'
} as const;
export type EmailActionActionEnum = typeof EmailActionActionEnum[keyof typeof EmailActionActionEnum];


/**
 * Check if a given object implements the EmailAction interface.
 */
export function instanceOfEmailAction(value: object): boolean {
    if (!('params' in value)) return false;
    return true;
}

export function EmailActionFromJSON(json: any): EmailAction {
    return EmailActionFromJSONTyped(json, false);
}

export function EmailActionFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailAction {
    if (json == null) {
        return json;
    }
    return {
        
        'action': json['action'] == null ? undefined : json['action'],
        'params': EmailParamsFromJSON(json['params']),
    };
}

export function EmailActionToJSON(value?: EmailAction | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'action': value['action'],
        'params': EmailParamsToJSON(value['params']),
    };
}

