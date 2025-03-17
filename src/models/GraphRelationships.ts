/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.18.2
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
 * @interface GraphRelationships
 */
export interface GraphRelationships {
    /**
     * 
     * @type {Array<{ [key: string]: string; }>}
     * @memberof GraphRelationships
     */
    nodes?: Array<{ [key: string]: string; }>;
    /**
     * 
     * @type {Array<{ [key: string]: string; }>}
     * @memberof GraphRelationships
     */
    edges?: Array<{ [key: string]: string; }>;
}

/**
 * Check if a given object implements the GraphRelationships interface.
 */
export function instanceOfGraphRelationships(value: object): boolean {
    return true;
}

export function GraphRelationshipsFromJSON(json: any): GraphRelationships {
    return GraphRelationshipsFromJSONTyped(json, false);
}

export function GraphRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GraphRelationships {
    if (json == null) {
        return json;
    }
    return {
        
        'nodes': json['nodes'] == null ? undefined : json['nodes'],
        'edges': json['edges'] == null ? undefined : json['edges'],
    };
}

export function GraphRelationshipsToJSON(value?: GraphRelationships | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'nodes': value['nodes'],
        'edges': value['edges'],
    };
}

