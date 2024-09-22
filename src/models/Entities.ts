/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.12.4
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
 * @interface Entities
 */
export interface Entities {
    /**
     * 
     * @type {Array<string>}
     * @memberof Entities
     */
    person?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof Entities
     */
    organization?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof Entities
     */
    location?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof Entities
     */
    nationality?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof Entities
     */
    date?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof Entities
     */
    event?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof Entities
     */
    money?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof Entities
     */
    law?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof Entities
     */
    quantity?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof Entities
     */
    time?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof Entities
     */
    sports?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof Entities
     */
    politics?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof Entities
     */
    title?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof Entities
     */
    number?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof Entities
     */
    arms?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof Entities
     */
    product?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof Entities
     */
    media?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof Entities
     */
    transportation?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof Entities
     */
    religion?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof Entities
     */
    technology?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof Entities
     */
    space?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof Entities
     */
    medicine?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof Entities
     */
    language?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof Entities
     */
    science?: Array<string>;
}

/**
 * Check if a given object implements the Entities interface.
 */
export function instanceOfEntities(value: object): boolean {
    return true;
}

export function EntitiesFromJSON(json: any): Entities {
    return EntitiesFromJSONTyped(json, false);
}

export function EntitiesFromJSONTyped(json: any, ignoreDiscriminator: boolean): Entities {
    if (json == null) {
        return json;
    }
    return {
        
        'person': json['Person'] == null ? undefined : json['Person'],
        'organization': json['Organization'] == null ? undefined : json['Organization'],
        'location': json['Location'] == null ? undefined : json['Location'],
        'nationality': json['Nationality'] == null ? undefined : json['Nationality'],
        'date': json['Date'] == null ? undefined : json['Date'],
        'event': json['Event'] == null ? undefined : json['Event'],
        'money': json['Money'] == null ? undefined : json['Money'],
        'law': json['Law'] == null ? undefined : json['Law'],
        'quantity': json['Quantity'] == null ? undefined : json['Quantity'],
        'time': json['Time'] == null ? undefined : json['Time'],
        'sports': json['Sports'] == null ? undefined : json['Sports'],
        'politics': json['Politics'] == null ? undefined : json['Politics'],
        'title': json['Title'] == null ? undefined : json['Title'],
        'number': json['Number'] == null ? undefined : json['Number'],
        'arms': json['Arms'] == null ? undefined : json['Arms'],
        'product': json['Product'] == null ? undefined : json['Product'],
        'media': json['Media'] == null ? undefined : json['Media'],
        'transportation': json['Transportation'] == null ? undefined : json['Transportation'],
        'religion': json['Religion'] == null ? undefined : json['Religion'],
        'technology': json['Technology'] == null ? undefined : json['Technology'],
        'space': json['Space'] == null ? undefined : json['Space'],
        'medicine': json['Medicine'] == null ? undefined : json['Medicine'],
        'language': json['Language'] == null ? undefined : json['Language'],
        'science': json['Science'] == null ? undefined : json['Science'],
    };
}

export function EntitiesToJSON(value?: Entities | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'Person': value['person'],
        'Organization': value['organization'],
        'Location': value['location'],
        'Nationality': value['nationality'],
        'Date': value['date'],
        'Event': value['event'],
        'Money': value['money'],
        'Law': value['law'],
        'Quantity': value['quantity'],
        'Time': value['time'],
        'Sports': value['sports'],
        'Politics': value['politics'],
        'Title': value['title'],
        'Number': value['number'],
        'Arms': value['arms'],
        'Product': value['product'],
        'Media': value['media'],
        'Transportation': value['transportation'],
        'Religion': value['religion'],
        'Technology': value['technology'],
        'Space': value['space'],
        'Medicine': value['medicine'],
        'Language': value['language'],
        'Science': value['science'],
    };
}

