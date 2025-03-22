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
    name?: string;
    /**
     * 
     * @type {object}
     * @memberof CreateDeepNewsRequestMessage
     */
    functionCall?: object;
}

/**
 * Check if a given object implements the CreateDeepNewsRequestMessage interface.
 */
export function instanceOfCreateDeepNewsRequestMessage(value: object): boolean {
    if (!('role' in value)) return false;
    if (!('content' in value)) return false;
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

export function CreateDeepNewsRequestMessageToJSON(value?: CreateDeepNewsRequestMessage | null): any {
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

