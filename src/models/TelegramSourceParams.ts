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
 * @interface TelegramSourceParams
 */
export interface TelegramSourceParams {
    /**
     * The channel name to use as a source
     * @type {string}
     * @memberof TelegramSourceParams
     */
    channelName: string;
}

/**
 * Check if a given object implements the TelegramSourceParams interface.
 */
export function instanceOfTelegramSourceParams(value: object): boolean {
    if (!('channelName' in value)) return false;
    return true;
}

export function TelegramSourceParamsFromJSON(json: any): TelegramSourceParams {
    return TelegramSourceParamsFromJSONTyped(json, false);
}

export function TelegramSourceParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TelegramSourceParams {
    if (json == null) {
        return json;
    }
    return {
        
        'channelName': json['channel_name'],
    };
}

export function TelegramSourceParamsToJSON(value?: TelegramSourceParams | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'channel_name': value['channelName'],
    };
}

