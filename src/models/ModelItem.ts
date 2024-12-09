/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.15.10
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
 * @interface ModelItem
 */
export interface ModelItem {
    /**
     * 
     * @type {string}
     * @memberof ModelItem
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ModelItem
     */
    object?: string;
    /**
     * 
     * @type {number}
     * @memberof ModelItem
     */
    created?: number;
    /**
     * 
     * @type {string}
     * @memberof ModelItem
     */
    ownedBy?: string;
}

/**
 * Check if a given object implements the ModelItem interface.
 */
export function instanceOfModelItem(value: object): boolean {
    if (!('id' in value)) return false;
    return true;
}

export function ModelItemFromJSON(json: any): ModelItem {
    return ModelItemFromJSONTyped(json, false);
}

export function ModelItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelItem {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'object': json['object'] == null ? undefined : json['object'],
        'created': json['created'] == null ? undefined : json['created'],
        'ownedBy': json['owned_by'] == null ? undefined : json['owned_by'],
    };
}

export function ModelItemToJSON(value?: ModelItem | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'object': value['object'],
        'created': value['created'],
        'owned_by': value['ownedBy'],
    };
}

