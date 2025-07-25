/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.19.6
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
 * @interface CreateDeepNewsRequestMessage
 */
export interface CreateDeepNewsRequestMessage {
    /**
     * 
     * @type {string}
     * @memberof CreateDeepNewsRequestMessage
     */
    role: string;
    /**
     * 
     * @type {string}
     * @memberof CreateDeepNewsRequestMessage
     */
    content: string;
    /**
     * 
     * @type {string}
     * @memberof CreateDeepNewsRequestMessage
     */
    name?: string | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof CreateDeepNewsRequestMessage
     */
    functionCall?: { [key: string]: any; } | null;
}

/**
 * Check if a given object implements the CreateDeepNewsRequestMessage interface.
 */
export function instanceOfCreateDeepNewsRequestMessage(value: object): value is CreateDeepNewsRequestMessage {
    if (!('role' in value) || value['role'] === undefined) return false;
    if (!('content' in value) || value['content'] === undefined) return false;
    return true;
}

export function CreateDeepNewsRequestMessageFromJSON(json: any): CreateDeepNewsRequestMessage {
    return CreateDeepNewsRequestMessageFromJSONTyped(json, false);
}

export function CreateDeepNewsRequestMessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateDeepNewsRequestMessage {
    if (json == null) {
        return json;
    }
    return {
        
        'role': json['role'],
        'content': json['content'],
        'name': json['name'] == null ? undefined : json['name'],
        'functionCall': json['function_call'] == null ? undefined : json['function_call'],
    };
}

export function CreateDeepNewsRequestMessageToJSON(json: any): CreateDeepNewsRequestMessage {
    return CreateDeepNewsRequestMessageToJSONTyped(json, false);
}

export function CreateDeepNewsRequestMessageToJSONTyped(value?: CreateDeepNewsRequestMessage | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'role': value['role'],
        'content': value['content'],
        'name': value['name'],
        'function_call': value['functionCall'],
    };
}

