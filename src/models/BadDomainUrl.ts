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
 * blacklist of domains that must be excluded from resultsThis can be a single domain url or a list of domain urls.
 * @export
 * @interface BadDomainUrl
 */
export interface BadDomainUrl {
}

/**
 * Check if a given object implements the BadDomainUrl interface.
 */
export function instanceOfBadDomainUrl(value: object): boolean {
    return true;
}

export function BadDomainUrlFromJSON(json: any): BadDomainUrl {
    return BadDomainUrlFromJSONTyped(json, false);
}

export function BadDomainUrlFromJSONTyped(json: any, ignoreDiscriminator: boolean): BadDomainUrl {
    return json;
}

export function BadDomainUrlToJSON(value?: BadDomainUrl | null): any {
    return value;
}

