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
/**
 * 
 * @export
 * @interface EmailParams
 */
export interface EmailParams {
    /**
     * The email to send the alert to when it triggers
     * @type {string}
     * @memberof EmailParams
     */
    to: string;
    /**
     * 
     * @type {string}
     * @memberof EmailParams
     */
    subject?: string;
}

/**
 * Check if a given object implements the EmailParams interface.
 */
export function instanceOfEmailParams(value: object): boolean {
    if (!('to' in value)) return false;
    return true;
}

export function EmailParamsFromJSON(json: any): EmailParams {
    return EmailParamsFromJSONTyped(json, false);
}

export function EmailParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailParams {
    if (json == null) {
        return json;
    }
    return {
        
        'to': json['to'],
        'subject': json['subject'] == null ? undefined : json['subject'],
    };
}

export function EmailParamsToJSON(value?: EmailParams | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'to': value['to'],
        'subject': value['subject'],
    };
}

