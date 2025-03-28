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
import type { ClusterProbabilities } from './ClusterProbabilities';
import {
    ClusterProbabilitiesFromJSON,
    ClusterProbabilitiesFromJSONTyped,
    ClusterProbabilitiesToJSON,
} from './ClusterProbabilities';

/**
 * 
 * @export
 * @interface IntraClusterStatistics
 */
export interface IntraClusterStatistics {
    /**
     * 
     * @type {number}
     * @memberof IntraClusterStatistics
     */
    clusterArticlesPct?: number;
    /**
     * 
     * @type {number}
     * @memberof IntraClusterStatistics
     */
    clusterCountriesPct?: number;
    /**
     * 
     * @type {number}
     * @memberof IntraClusterStatistics
     */
    clusterDomainsPct?: number;
    /**
     * 
     * @type {number}
     * @memberof IntraClusterStatistics
     */
    clusterLanguagesPct?: number;
    /**
     * 
     * @type {object}
     * @memberof IntraClusterStatistics
     */
    clusterProbabilities?: object;
}

/**
 * Check if a given object implements the IntraClusterStatistics interface.
 */
export function instanceOfIntraClusterStatistics(value: object): boolean {
    return true;
}

export function IntraClusterStatisticsFromJSON(json: any): IntraClusterStatistics {
    return IntraClusterStatisticsFromJSONTyped(json, false);
}

export function IntraClusterStatisticsFromJSONTyped(json: any, ignoreDiscriminator: boolean): IntraClusterStatistics {
    if (json == null) {
        return json;
    }
    return {
        
        'clusterArticlesPct': json['cluster_articles_pct'] == null ? undefined : json['cluster_articles_pct'],
        'clusterCountriesPct': json['cluster_countries_pct'] == null ? undefined : json['cluster_countries_pct'],
        'clusterDomainsPct': json['cluster_domains_pct'] == null ? undefined : json['cluster_domains_pct'],
        'clusterLanguagesPct': json['cluster_languages_pct'] == null ? undefined : json['cluster_languages_pct'],
        'clusterProbabilities': json['cluster_probabilities'] == null ? undefined : json['cluster_probabilities'],
    };
}

export function IntraClusterStatisticsToJSON(value?: IntraClusterStatistics | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'cluster_articles_pct': value['clusterArticlesPct'],
        'cluster_countries_pct': value['clusterCountriesPct'],
        'cluster_domains_pct': value['clusterDomainsPct'],
        'cluster_languages_pct': value['clusterLanguagesPct'],
        'cluster_probabilities': value['clusterProbabilities'],
    };
}

