/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.16.2
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
 * @interface BodyBuildGraph
 */
export interface BodyBuildGraph {
    /**
     * Query string that can be any phrase, keyword, question, or paragraph. If method='nl', then this will be used as a natural language query. If method='kw', then this will be used as a direct keyword query.
     * @type {string}
     * @memberof BodyBuildGraph
     */
    query?: string;
    /**
     * Whether to return articles or not.
     * @type {boolean}
     * @memberof BodyBuildGraph
     */
    returnArticles?: boolean;
    /**
     * Minimum cluster probability to use for disambiguation
     * @type {number}
     * @memberof BodyBuildGraph
     */
    minClusterProbability?: number;
    /**
     * Whether to use geo disambiguation or not.
     * @type {boolean}
     * @memberof BodyBuildGraph
     */
    geoDisambiguation?: boolean;
    /**
     * 
     * @type {object}
     * @memberof BodyBuildGraph
     */
    filterParams?: object;
    /**
     * 
     * @type {Array<object>}
     * @memberof BodyBuildGraph
     */
    constrainedDisambiguations?: Array<object>;
    /**
     * 
     * @type {Array<object>}
     * @memberof BodyBuildGraph
     */
    docsUpload?: Array<object>;
    /**
     * 
     * @type {string}
     * @memberof BodyBuildGraph
     */
    visualizeWith?: string;
}

/**
 * Check if a given object implements the BodyBuildGraph interface.
 */
export function instanceOfBodyBuildGraph(value: object): boolean {
    return true;
}

export function BodyBuildGraphFromJSON(json: any): BodyBuildGraph {
    return BodyBuildGraphFromJSONTyped(json, false);
}

export function BodyBuildGraphFromJSONTyped(json: any, ignoreDiscriminator: boolean): BodyBuildGraph {
    if (json == null) {
        return json;
    }
    return {
        
        'query': json['query'] == null ? undefined : json['query'],
        'returnArticles': json['return_articles'] == null ? undefined : json['return_articles'],
        'minClusterProbability': json['min_cluster_probability'] == null ? undefined : json['min_cluster_probability'],
        'geoDisambiguation': json['geo_disambiguation'] == null ? undefined : json['geo_disambiguation'],
        'filterParams': json['filter_params'] == null ? undefined : json['filter_params'],
        'constrainedDisambiguations': json['constrained_disambiguations'] == null ? undefined : json['constrained_disambiguations'],
        'docsUpload': json['docs_upload'] == null ? undefined : json['docs_upload'],
        'visualizeWith': json['visualize_with'] == null ? undefined : json['visualize_with'],
    };
}

export function BodyBuildGraphToJSON(value?: BodyBuildGraph | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'query': value['query'],
        'return_articles': value['returnArticles'],
        'min_cluster_probability': value['minClusterProbability'],
        'geo_disambiguation': value['geoDisambiguation'],
        'filter_params': value['filterParams'],
        'constrained_disambiguations': value['constrainedDisambiguations'],
        'docs_upload': value['docsUpload'],
        'visualize_with': value['visualizeWith'],
    };
}

