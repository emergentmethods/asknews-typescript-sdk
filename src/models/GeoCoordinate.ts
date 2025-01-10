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
 * @interface GeoCoordinate
 */
export interface GeoCoordinate {
    /**
     * 
     * @type {number}
     * @memberof GeoCoordinate
     */
    latitude: number;
    /**
     * 
     * @type {number}
     * @memberof GeoCoordinate
     */
    longitude: number;
    /**
     * 
     * @type {object}
     * @memberof GeoCoordinate
     */
    metadata: object;
}

/**
 * Check if a given object implements the GeoCoordinate interface.
 */
export function instanceOfGeoCoordinate(value: object): boolean {
    if (!('latitude' in value)) return false;
    if (!('longitude' in value)) return false;
    if (!('metadata' in value)) return false;
    return true;
}

export function GeoCoordinateFromJSON(json: any): GeoCoordinate {
    return GeoCoordinateFromJSONTyped(json, false);
}

export function GeoCoordinateFromJSONTyped(json: any, ignoreDiscriminator: boolean): GeoCoordinate {
    if (json == null) {
        return json;
    }
    return {
        
        'latitude': json['latitude'],
        'longitude': json['longitude'],
        'metadata': json['metadata'],
    };
}

export function GeoCoordinateToJSON(value?: GeoCoordinate | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'latitude': value['latitude'],
        'longitude': value['longitude'],
        'metadata': value['metadata'],
    };
}

