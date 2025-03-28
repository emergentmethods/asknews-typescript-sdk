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
 * @interface PingModel
 */
export interface PingModel {
    /**
     * 
     * @type {string}
     * @memberof PingModel
     */
    app: string;
    /**
     * 
     * @type {string}
     * @memberof PingModel
     */
    version: string;
}

/**
 * Check if a given object implements the PingModel interface.
 */
export function instanceOfPingModel(value: object): boolean {
    if (!('app' in value)) return false;
    if (!('version' in value)) return false;
    return true;
}

export function PingModelFromJSON(json: any): PingModel {
    return PingModelFromJSONTyped(json, false);
}

export function PingModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): PingModel {
    if (json == null) {
        return json;
    }
    return {
        
        'app': json['app'],
        'version': json['version'],
    };
}

export function PingModelToJSON(value?: PingModel | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'app': value['app'],
        'version': value['version'],
    };
}

