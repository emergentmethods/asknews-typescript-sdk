/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.16.2
 * Contact: contact@emergentmethods.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { ResendBroadcastParams } from './ResendBroadcastParams';
import {
    ResendBroadcastParamsFromJSON,
    ResendBroadcastParamsFromJSONTyped,
    ResendBroadcastParamsToJSON,
} from './ResendBroadcastParams';

/**
 * 
 * @export
 * @interface ResendBroadcastAction
 */
export interface ResendBroadcastAction {
    /**
     * 
     * @type {string}
     * @memberof ResendBroadcastAction
     */
    action?: ResendBroadcastActionActionEnum;
    /**
     * 
     * @type {ResendBroadcastParams}
     * @memberof ResendBroadcastAction
     */
    params: ResendBroadcastParams;
}


/**
 * @export
 */
export const ResendBroadcastActionActionEnum = {
    ResendBroadcast: 'resend_broadcast'
} as const;
export type ResendBroadcastActionActionEnum = typeof ResendBroadcastActionActionEnum[keyof typeof ResendBroadcastActionActionEnum];


/**
 * Check if a given object implements the ResendBroadcastAction interface.
 */
export function instanceOfResendBroadcastAction(value: object): boolean {
    if (!('params' in value)) return false;
    return true;
}

export function ResendBroadcastActionFromJSON(json: any): ResendBroadcastAction {
    return ResendBroadcastActionFromJSONTyped(json, false);
}

export function ResendBroadcastActionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResendBroadcastAction {
    if (json == null) {
        return json;
    }
    return {
        
        'action': json['action'] == null ? undefined : json['action'],
        'params': ResendBroadcastParamsFromJSON(json['params']),
    };
}

export function ResendBroadcastActionToJSON(value?: ResendBroadcastAction | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'action': value['action'],
        'params': ResendBroadcastParamsToJSON(value['params']),
    };
}

