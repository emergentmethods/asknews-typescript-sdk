/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.14.8
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
 * @interface RedditEntities
 */
export interface RedditEntities {
    /**
     * 
     * @type {Array<string>}
     * @memberof RedditEntities
     */
    dATE?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof RedditEntities
     */
    eVENT?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof RedditEntities
     */
    gPE?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof RedditEntities
     */
    oRG?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof RedditEntities
     */
    pERSON?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof RedditEntities
     */
    nORP?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof RedditEntities
     */
    cARDINAL?: Array<string>;
}

/**
 * Check if a given object implements the RedditEntities interface.
 */
export function instanceOfRedditEntities(value: object): boolean {
    return true;
}

export function RedditEntitiesFromJSON(json: any): RedditEntities {
    return RedditEntitiesFromJSONTyped(json, false);
}

export function RedditEntitiesFromJSONTyped(json: any, ignoreDiscriminator: boolean): RedditEntities {
    if (json == null) {
        return json;
    }
    return {
        
        'dATE': json['DATE'] == null ? undefined : json['DATE'],
        'eVENT': json['EVENT'] == null ? undefined : json['EVENT'],
        'gPE': json['GPE'] == null ? undefined : json['GPE'],
        'oRG': json['ORG'] == null ? undefined : json['ORG'],
        'pERSON': json['PERSON'] == null ? undefined : json['PERSON'],
        'nORP': json['NORP'] == null ? undefined : json['NORP'],
        'cARDINAL': json['CARDINAL'] == null ? undefined : json['CARDINAL'],
    };
}

export function RedditEntitiesToJSON(value?: RedditEntities | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'DATE': value['dATE'],
        'EVENT': value['eVENT'],
        'GPE': value['gPE'],
        'ORG': value['oRG'],
        'PERSON': value['pERSON'],
        'NORP': value['nORP'],
        'CARDINAL': value['cARDINAL'],
    };
}

