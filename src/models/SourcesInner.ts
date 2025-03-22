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

import type { AskNewsSource } from './AskNewsSource';
import {
    instanceOfAskNewsSource,
    AskNewsSourceFromJSON,
    AskNewsSourceFromJSONTyped,
    AskNewsSourceToJSON,
} from './AskNewsSource';
import type { BlueskySource } from './BlueskySource';
import {
    instanceOfBlueskySource,
    BlueskySourceFromJSON,
    BlueskySourceFromJSONTyped,
    BlueskySourceToJSON,
} from './BlueskySource';
import type { TelegramSource } from './TelegramSource';
import {
    instanceOfTelegramSource,
    TelegramSourceFromJSON,
    TelegramSourceFromJSONTyped,
    TelegramSourceToJSON,
} from './TelegramSource';

/**
 * @type SourcesInner
 * 
 * @export
 */
export type SourcesInner = { identifier: 'asknews' } & AskNewsSource | { identifier: 'bluesky' } & BlueskySource | { identifier: 'telegram' } & TelegramSource;

export function SourcesInnerFromJSON(json: any): SourcesInner {
    return SourcesInnerFromJSONTyped(json, false);
}

export function SourcesInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): SourcesInner {
    if (json == null) {
        return json;
    }
    switch (json['identifier']) {
        case 'asknews':
            return Object.assign({}, AskNewsSourceFromJSONTyped(json, true), { identifier: 'asknews' });
        case 'bluesky':
            return Object.assign({}, BlueskySourceFromJSONTyped(json, true), { identifier: 'bluesky' });
        case 'telegram':
            return Object.assign({}, TelegramSourceFromJSONTyped(json, true), { identifier: 'telegram' });
        default:
            throw new Error(`No variant of SourcesInner exists with 'identifier=${json['identifier']}'`);
    }
}

export function SourcesInnerToJSON(value?: SourcesInner | null): any {
    if (value == null) {
        return value;
    }
    switch (value['identifier']) {
        case 'asknews':
            return AskNewsSourceToJSON(value);
        case 'bluesky':
            return BlueskySourceToJSON(value);
        case 'telegram':
            return TelegramSourceToJSON(value);
        default:
            throw new Error(`No variant of SourcesInner exists with 'identifier=${value['identifier']}'`);
    }

}

