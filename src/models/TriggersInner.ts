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

import type { EmailAction } from './EmailAction';
import {
    instanceOfEmailAction,
    EmailActionFromJSON,
    EmailActionFromJSONTyped,
    EmailActionToJSON,
} from './EmailAction';
import type { GoogleDocsAction } from './GoogleDocsAction';
import {
    instanceOfGoogleDocsAction,
    GoogleDocsActionFromJSON,
    GoogleDocsActionFromJSONTyped,
    GoogleDocsActionToJSON,
} from './GoogleDocsAction';
import type { WebhookAction } from './WebhookAction';
import {
    instanceOfWebhookAction,
    WebhookActionFromJSON,
    WebhookActionFromJSONTyped,
    WebhookActionToJSON,
} from './WebhookAction';

/**
 * @type TriggersInner
 * 
 * @export
 */
export type TriggersInner = { action: 'email' } & EmailAction | { action: 'google_docs' } & GoogleDocsAction | { action: 'webhook' } & WebhookAction;

export function TriggersInnerFromJSON(json: any): TriggersInner {
    return TriggersInnerFromJSONTyped(json, false);
}

export function TriggersInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): TriggersInner {
    if (json == null) {
        return json;
    }
    switch (json['action']) {
        case 'email':
            return Object.assign({}, EmailActionFromJSONTyped(json, true), { action: 'email' });
        case 'google_docs':
            return Object.assign({}, GoogleDocsActionFromJSONTyped(json, true), { action: 'google_docs' });
        case 'webhook':
            return Object.assign({}, WebhookActionFromJSONTyped(json, true), { action: 'webhook' });
        default:
            throw new Error(`No variant of TriggersInner exists with 'action=${json['action']}'`);
    }
}

export function TriggersInnerToJSON(value?: TriggersInner | null): any {
    if (value == null) {
        return value;
    }
    switch (value['action']) {
        case 'email':
            return EmailActionToJSON(value);
        case 'google_docs':
            return GoogleDocsActionToJSON(value);
        case 'webhook':
            return WebhookActionToJSON(value);
        default:
            throw new Error(`No variant of TriggersInner exists with 'action=${value['action']}'`);
    }

}

