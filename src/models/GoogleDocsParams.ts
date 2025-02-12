/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.17.5
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
 * @interface GoogleDocsParams
 */
export interface GoogleDocsParams {
    /**
     * The google service account json. This should be a dict. You can get this from the google cloud console. The document will be created in the service account's google drive and shared with the user.
     * @type {object}
     * @memberof GoogleDocsParams
     */
    clientJson: object;
    /**
     * 
     * @type {Array<string>}
     * @memberof GoogleDocsParams
     */
    emails?: Array<string>;
}

/**
 * Check if a given object implements the GoogleDocsParams interface.
 */
export function instanceOfGoogleDocsParams(value: object): boolean {
    if (!('clientJson' in value)) return false;
    return true;
}

export function GoogleDocsParamsFromJSON(json: any): GoogleDocsParams {
    return GoogleDocsParamsFromJSONTyped(json, false);
}

export function GoogleDocsParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GoogleDocsParams {
    if (json == null) {
        return json;
    }
    return {
        
        'clientJson': json['client_json'],
        'emails': json['emails'] == null ? undefined : json['emails'],
    };
}

export function GoogleDocsParamsToJSON(value?: GoogleDocsParams | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'client_json': value['clientJson'],
        'emails': value['emails'],
    };
}

