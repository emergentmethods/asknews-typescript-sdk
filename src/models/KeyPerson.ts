/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.9.3
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
 * @interface KeyPerson
 */
export interface KeyPerson {
    /**
     * 
     * @type {string}
     * @memberof KeyPerson
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof KeyPerson
     */
    role: string;
}

/**
 * Check if a given object implements the KeyPerson interface.
 */
export function instanceOfKeyPerson(value: object): boolean {
    if (!('name' in value)) return false;
    if (!('role' in value)) return false;
    return true;
}

export function KeyPersonFromJSON(json: any): KeyPerson {
    return KeyPersonFromJSONTyped(json, false);
}

export function KeyPersonFromJSONTyped(json: any, ignoreDiscriminator: boolean): KeyPerson {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'role': json['role'],
    };
}

export function KeyPersonToJSON(value?: KeyPerson | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'role': value['role'],
    };
}
