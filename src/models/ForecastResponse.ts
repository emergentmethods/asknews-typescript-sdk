/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.18.3
 * Contact: contact@emergentmethods.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { Choice } from './Choice';
import {
    ChoiceFromJSON,
    ChoiceFromJSONTyped,
    ChoiceToJSON,
} from './Choice';
import type { KeyPerson } from './KeyPerson';
import {
    KeyPersonFromJSON,
    KeyPersonFromJSONTyped,
    KeyPersonToJSON,
} from './KeyPerson';
import type { SearchResponseDictItem } from './SearchResponseDictItem';
import {
    SearchResponseDictItemFromJSON,
    SearchResponseDictItemFromJSONTyped,
    SearchResponseDictItemToJSON,
} from './SearchResponseDictItem';
import type { WebSearchResult } from './WebSearchResult';
import {
    WebSearchResultFromJSON,
    WebSearchResultFromJSONTyped,
    WebSearchResultToJSON,
} from './WebSearchResult';

/**
 * 
 * @export
 * @interface ForecastResponse
 */
export interface ForecastResponse {
    /**
     * 
     * @type {string}
     * @memberof ForecastResponse
     */
    forecast: string;
    /**
     * 
     * @type {string}
     * @memberof ForecastResponse
     */
    resolutionCriteria: string;
    /**
     * 
     * @type {Date}
     * @memberof ForecastResponse
     */
    date: Date;
    /**
     * 
     * @type {string}
     * @memberof ForecastResponse
     */
    reasoning: string;
    /**
     * 
     * @type {Array<SearchResponseDictItem>}
     * @memberof ForecastResponse
     */
    sources: Array<SearchResponseDictItem>;
    /**
     * 
     * @type {Array<string>}
     * @memberof ForecastResponse
     */
    timeline: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ForecastResponse
     */
    oppositeRequest: string;
    /**
     * 
     * @type {number}
     * @memberof ForecastResponse
     */
    confidence: number;
    /**
     * 
     * @type {Choice}
     * @memberof ForecastResponse
     */
    choice: Choice;
    /**
     * 
     * @type {number}
     * @memberof ForecastResponse
     */
    llmConfidence: number;
    /**
     * 
     * @type {string}
     * @memberof ForecastResponse
     */
    modelUsed: string;
    /**
     * 
     * @type {string}
     * @memberof ForecastResponse
     */
    likelihood: string;
    /**
     * 
     * @type {number}
     * @memberof ForecastResponse
     */
    probability: number;
    /**
     * 
     * @type {Array<WebSearchResult>}
     * @memberof ForecastResponse
     */
    webSearchResults: Array<WebSearchResult>;
    /**
     * 
     * @type {string}
     * @memberof ForecastResponse
     */
    summary: string;
    /**
     * 
     * @type {Array<KeyPerson>}
     * @memberof ForecastResponse
     */
    keyPeople: Array<KeyPerson>;
    /**
     * 
     * @type {Array<string>}
     * @memberof ForecastResponse
     */
    keyFacets: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ForecastResponse
     */
    reconciledInformation: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ForecastResponse
     */
    candidateModels: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ForecastResponse
     */
    uniqueInformation: string;
    /**
     * 
     * @type {object}
     * @memberof ForecastResponse
     */
    expertInformation?: object;
}

/**
 * Check if a given object implements the ForecastResponse interface.
 */
export function instanceOfForecastResponse(value: object): boolean {
    if (!('forecast' in value)) return false;
    if (!('resolutionCriteria' in value)) return false;
    if (!('date' in value)) return false;
    if (!('reasoning' in value)) return false;
    if (!('sources' in value)) return false;
    if (!('timeline' in value)) return false;
    if (!('oppositeRequest' in value)) return false;
    if (!('confidence' in value)) return false;
    if (!('choice' in value)) return false;
    if (!('llmConfidence' in value)) return false;
    if (!('modelUsed' in value)) return false;
    if (!('likelihood' in value)) return false;
    if (!('probability' in value)) return false;
    if (!('webSearchResults' in value)) return false;
    if (!('summary' in value)) return false;
    if (!('keyPeople' in value)) return false;
    if (!('keyFacets' in value)) return false;
    if (!('reconciledInformation' in value)) return false;
    if (!('candidateModels' in value)) return false;
    if (!('uniqueInformation' in value)) return false;
    return true;
}

export function ForecastResponseFromJSON(json: any): ForecastResponse {
    return ForecastResponseFromJSONTyped(json, false);
}

export function ForecastResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ForecastResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'forecast': json['forecast'],
        'resolutionCriteria': json['resolution_criteria'],
        'date': (new Date(json['date'])),
        'reasoning': json['reasoning'],
        'sources': ((json['sources'] as Array<any>).map(SearchResponseDictItemFromJSON)),
        'timeline': json['timeline'],
        'oppositeRequest': json['opposite_request'],
        'confidence': json['confidence'],
        'choice': ChoiceFromJSON(json['choice']),
        'llmConfidence': json['llm_confidence'],
        'modelUsed': json['model_used'],
        'likelihood': json['likelihood'],
        'probability': json['probability'],
        'webSearchResults': ((json['web_search_results'] as Array<any>).map(WebSearchResultFromJSON)),
        'summary': json['summary'],
        'keyPeople': ((json['key_people'] as Array<any>).map(KeyPersonFromJSON)),
        'keyFacets': json['key_facets'],
        'reconciledInformation': json['reconciled_information'],
        'candidateModels': json['candidate_models'],
        'uniqueInformation': json['unique_information'],
        'expertInformation': json['expert_information'] == null ? undefined : json['expert_information'],
    };
}

export function ForecastResponseToJSON(value?: ForecastResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'forecast': value['forecast'],
        'resolution_criteria': value['resolutionCriteria'],
        'date': ((value['date']).toISOString()),
        'reasoning': value['reasoning'],
        'sources': ((value['sources'] as Array<any>).map(SearchResponseDictItemToJSON)),
        'timeline': value['timeline'],
        'opposite_request': value['oppositeRequest'],
        'confidence': value['confidence'],
        'choice': ChoiceToJSON(value['choice']),
        'llm_confidence': value['llmConfidence'],
        'model_used': value['modelUsed'],
        'likelihood': value['likelihood'],
        'probability': value['probability'],
        'web_search_results': ((value['webSearchResults'] as Array<any>).map(WebSearchResultToJSON)),
        'summary': value['summary'],
        'key_people': ((value['keyPeople'] as Array<any>).map(KeyPersonToJSON)),
        'key_facets': value['keyFacets'],
        'reconciled_information': value['reconciledInformation'],
        'candidate_models': value['candidateModels'],
        'unique_information': value['uniqueInformation'],
        'expert_information': value['expertInformation'],
    };
}

