/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.9.5
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
 * @interface AsknewsApiSchemaV1StoriesGraphRelationships
 */
export interface AsknewsApiSchemaV1StoriesGraphRelationships {
    /**
     * 
     * @type {Array<{ [key: string]: string; }>}
     * @memberof AsknewsApiSchemaV1StoriesGraphRelationships
     */
    nodes: Array<{ [key: string]: string; }>;
    /**
     * 
     * @type {Array<{ [key: string]: string; }>}
     * @memberof AsknewsApiSchemaV1StoriesGraphRelationships
     */
    edges: Array<{ [key: string]: string; }>;
}

/**
 * Check if a given object implements the AsknewsApiSchemaV1StoriesGraphRelationships interface.
 */
export function instanceOfAsknewsApiSchemaV1StoriesGraphRelationships(value: object): boolean {
    if (!('nodes' in value)) return false;
    if (!('edges' in value)) return false;
    return true;
}

export function AsknewsApiSchemaV1StoriesGraphRelationshipsFromJSON(json: any): AsknewsApiSchemaV1StoriesGraphRelationships {
    return AsknewsApiSchemaV1StoriesGraphRelationshipsFromJSONTyped(json, false);
}

export function AsknewsApiSchemaV1StoriesGraphRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AsknewsApiSchemaV1StoriesGraphRelationships {
    if (json == null) {
        return json;
    }
    return {
        
        'nodes': json['nodes'],
        'edges': json['edges'],
    };
}

export function AsknewsApiSchemaV1StoriesGraphRelationshipsToJSON(value?: AsknewsApiSchemaV1StoriesGraphRelationships | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'nodes': value['nodes'],
        'edges': value['edges'],
    };
}
