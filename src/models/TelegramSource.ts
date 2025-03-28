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
import type { TelegramSourceParams } from './TelegramSourceParams';
import {
    TelegramSourceParamsFromJSON,
    TelegramSourceParamsFromJSONTyped,
    TelegramSourceParamsToJSON,
} from './TelegramSourceParams';

/**
 * 
 * @export
 * @interface TelegramSource
 */
export interface TelegramSource {
    /**
     * 
     * @type {string}
     * @memberof TelegramSource
     */
    identifier: TelegramSourceIdentifierEnum;
    /**
     * 
     * @type {TelegramSourceParams}
     * @memberof TelegramSource
     */
    params: TelegramSourceParams;
}


/**
 * @export
 */
export const TelegramSourceIdentifierEnum = {
    Telegram: 'telegram'
} as const;
export type TelegramSourceIdentifierEnum = typeof TelegramSourceIdentifierEnum[keyof typeof TelegramSourceIdentifierEnum];


/**
 * Check if a given object implements the TelegramSource interface.
 */
export function instanceOfTelegramSource(value: object): boolean {
    if (!('identifier' in value)) return false;
    if (!('params' in value)) return false;
    return true;
}

export function TelegramSourceFromJSON(json: any): TelegramSource {
    return TelegramSourceFromJSONTyped(json, false);
}

export function TelegramSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): TelegramSource {
    if (json == null) {
        return json;
    }
    return {
        
        'identifier': json['identifier'],
        'params': TelegramSourceParamsFromJSON(json['params']),
    };
}

export function TelegramSourceToJSON(value?: TelegramSource | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'identifier': value['identifier'],
        'params': TelegramSourceParamsToJSON(value['params']),
    };
}

