/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.15.9
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
 * @interface ClusterProbabilities
 */
export interface ClusterProbabilities {
}

/**
 * Check if a given object implements the ClusterProbabilities interface.
 */
export function instanceOfClusterProbabilities(value: object): boolean {
    return true;
}

export function ClusterProbabilitiesFromJSON(json: any): ClusterProbabilities {
    return ClusterProbabilitiesFromJSONTyped(json, false);
}

export function ClusterProbabilitiesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ClusterProbabilities {
    return json;
}

export function ClusterProbabilitiesToJSON(value?: ClusterProbabilities | null): any {
    return value;
}

