/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.17.3
 * Contact: contact@emergentmethods.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * Type of reporting voice to filer by.
 * @export
 * @interface ReportingVoice
 */
export interface ReportingVoice {
}

/**
 * Check if a given object implements the ReportingVoice interface.
 */
export function instanceOfReportingVoice(value: object): boolean {
    return true;
}

export function ReportingVoiceFromJSON(json: any): ReportingVoice {
    return ReportingVoiceFromJSONTyped(json, false);
}

export function ReportingVoiceFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReportingVoice {
    return json;
}

export function ReportingVoiceToJSON(value?: ReportingVoice | null): any {
    return value;
}

