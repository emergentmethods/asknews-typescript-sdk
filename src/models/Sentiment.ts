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
 * @interface Sentiment
 */
export interface Sentiment {
}

/**
 * Check if a given object implements the Sentiment interface.
 */
export function instanceOfSentiment(value: object): boolean {
    return true;
}

export function SentimentFromJSON(json: any): Sentiment {
    return SentimentFromJSONTyped(json, false);
}

export function SentimentFromJSONTyped(json: any, ignoreDiscriminator: boolean): Sentiment {
    return json;
}

export function SentimentToJSON(value?: Sentiment | null): any {
    return value;
}

