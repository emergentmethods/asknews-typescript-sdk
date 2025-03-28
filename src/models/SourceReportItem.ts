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
 * @interface SourceReportItem
 */
export interface SourceReportItem {
    /**
     * 
     * @type {Date}
     * @memberof SourceReportItem
     */
    bsonDate: Date;
    /**
     * 
     * @type {number}
     * @memberof SourceReportItem
     */
    nBucket: number;
    /**
     * 
     * @type {number}
     * @memberof SourceReportItem
     */
    nSelected: number;
    /**
     * 
     * @type {{ [key: string]: number; }}
     * @memberof SourceReportItem
     */
    bucketCounts: { [key: string]: number; };
    /**
     * 
     * @type {{ [key: string]: number; }}
     * @memberof SourceReportItem
     */
    selectedCounts: { [key: string]: number; };
    /**
     * 
     * @type {{ [key: string]: number; }}
     * @memberof SourceReportItem
     */
    bucketPct: { [key: string]: number; };
    /**
     * 
     * @type {{ [key: string]: number; }}
     * @memberof SourceReportItem
     */
    selectedPct: { [key: string]: number; };
}

/**
 * Check if a given object implements the SourceReportItem interface.
 */
export function instanceOfSourceReportItem(value: object): boolean {
    if (!('bsonDate' in value)) return false;
    if (!('nBucket' in value)) return false;
    if (!('nSelected' in value)) return false;
    if (!('bucketCounts' in value)) return false;
    if (!('selectedCounts' in value)) return false;
    if (!('bucketPct' in value)) return false;
    if (!('selectedPct' in value)) return false;
    return true;
}

export function SourceReportItemFromJSON(json: any): SourceReportItem {
    return SourceReportItemFromJSONTyped(json, false);
}

export function SourceReportItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): SourceReportItem {
    if (json == null) {
        return json;
    }
    return {
        
        'bsonDate': (new Date(json['bson_date'])),
        'nBucket': json['n_bucket'],
        'nSelected': json['n_selected'],
        'bucketCounts': json['bucket_counts'],
        'selectedCounts': json['selected_counts'],
        'bucketPct': json['bucket_pct'],
        'selectedPct': json['selected_pct'],
    };
}

export function SourceReportItemToJSON(value?: SourceReportItem | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'bson_date': ((value['bsonDate']).toISOString()),
        'n_bucket': value['nBucket'],
        'n_selected': value['nSelected'],
        'bucket_counts': value['bucketCounts'],
        'selected_counts': value['selectedCounts'],
        'bucket_pct': value['bucketPct'],
        'selected_pct': value['selectedPct'],
    };
}

