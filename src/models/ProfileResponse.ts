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
import type { Profile } from './Profile';
import {
    ProfileFromJSON,
    ProfileFromJSONTyped,
    ProfileToJSON,
} from './Profile';

/**
 * 
 * @export
 * @interface ProfileResponse
 */
export interface ProfileResponse {
    /**
     * 
     * @type {Profile}
     * @memberof ProfileResponse
     */
    profile: Profile;
}

/**
 * Check if a given object implements the ProfileResponse interface.
 */
export function instanceOfProfileResponse(value: object): boolean {
    if (!('profile' in value)) return false;
    return true;
}

export function ProfileResponseFromJSON(json: any): ProfileResponse {
    return ProfileResponseFromJSONTyped(json, false);
}

export function ProfileResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'profile': ProfileFromJSON(json['profile']),
    };
}

export function ProfileResponseToJSON(value?: ProfileResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'profile': ProfileToJSON(value['profile']),
    };
}

