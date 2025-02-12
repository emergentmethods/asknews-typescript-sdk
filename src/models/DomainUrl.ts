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

import { mapValues } from '../runtime';
/**
 * filter by domain url of interest. This can be a single domain or a list of domains. For example, 'npr.org' or ['nature.com', 'npr.org']
 * @export
 * @interface DomainUrl
 */
export interface DomainUrl {
}

/**
 * Check if a given object implements the DomainUrl interface.
 */
export function instanceOfDomainUrl(value: object): boolean {
    return true;
}

export function DomainUrlFromJSON(json: any): DomainUrl {
    return DomainUrlFromJSONTyped(json, false);
}

export function DomainUrlFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainUrl {
    return json;
}

export function DomainUrlToJSON(value?: DomainUrl | null): any {
    return value;
}

