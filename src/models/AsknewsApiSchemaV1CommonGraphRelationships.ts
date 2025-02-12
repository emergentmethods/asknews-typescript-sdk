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
 * @interface AsknewsApiSchemaV1CommonGraphRelationships
 */
export interface AsknewsApiSchemaV1CommonGraphRelationships {
    /**
     * 
     * @type {Array<{ [key: string]: string; }>}
     * @memberof AsknewsApiSchemaV1CommonGraphRelationships
     */
    nodes?: Array<{ [key: string]: string; }>;
    /**
     * 
     * @type {Array<{ [key: string]: string; }>}
     * @memberof AsknewsApiSchemaV1CommonGraphRelationships
     */
    edges?: Array<{ [key: string]: string; }>;
}

/**
 * Check if a given object implements the AsknewsApiSchemaV1CommonGraphRelationships interface.
 */
export function instanceOfAsknewsApiSchemaV1CommonGraphRelationships(value: object): boolean {
    return true;
}

export function AsknewsApiSchemaV1CommonGraphRelationshipsFromJSON(json: any): AsknewsApiSchemaV1CommonGraphRelationships {
    return AsknewsApiSchemaV1CommonGraphRelationshipsFromJSONTyped(json, false);
}

export function AsknewsApiSchemaV1CommonGraphRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AsknewsApiSchemaV1CommonGraphRelationships {
    if (json == null) {
        return json;
    }
    return {
        
        'nodes': json['nodes'] == null ? undefined : json['nodes'],
        'edges': json['edges'] == null ? undefined : json['edges'],
    };
}

export function AsknewsApiSchemaV1CommonGraphRelationshipsToJSON(value?: AsknewsApiSchemaV1CommonGraphRelationships | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'nodes': value['nodes'],
        'edges': value['edges'],
    };
}

