/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.16.0
 * Contact: contact@emergentmethods.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { ServiceAccountProfile } from './ServiceAccountProfile';
import {
    instanceOfServiceAccountProfile,
    ServiceAccountProfileFromJSON,
    ServiceAccountProfileFromJSONTyped,
    ServiceAccountProfileToJSON,
} from './ServiceAccountProfile';
import type { UserProfile } from './UserProfile';
import {
    instanceOfUserProfile,
    UserProfileFromJSON,
    UserProfileFromJSONTyped,
    UserProfileToJSON,
} from './UserProfile';

/**
 * @type Profile
 * 
 * @export
 */
export type Profile = { identityType: 'service_account' } & ServiceAccountProfile | { identityType: 'user' } & UserProfile;

export function ProfileFromJSON(json: any): Profile {
    return ProfileFromJSONTyped(json, false);
}

export function ProfileFromJSONTyped(json: any, ignoreDiscriminator: boolean): Profile {
    if (json == null) {
        return json;
    }
    switch (json['identity_type']) {
        case 'service_account':
            return Object.assign({}, ServiceAccountProfileFromJSONTyped(json, true), { identityType: 'service_account' });
        case 'user':
            return Object.assign({}, UserProfileFromJSONTyped(json, true), { identityType: 'user' });
        default:
            throw new Error(`No variant of Profile exists with 'identityType=${json['identityType']}'`);
    }
}

export function ProfileToJSON(value?: Profile | null): any {
    if (value == null) {
        return value;
    }
    switch (value['identityType']) {
        case 'service_account':
            return ServiceAccountProfileToJSON(value);
        case 'user':
            return UserProfileToJSON(value);
        default:
            throw new Error(`No variant of Profile exists with 'identityType=${value['identityType']}'`);
    }

}

