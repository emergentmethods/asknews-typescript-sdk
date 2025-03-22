/* tslint:disable */
/* eslint-disable */
/**
 * AskNews API
 * AskNews API
 *
 * The version of the OpenAPI document: 0.18.3
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
 * @interface ServiceAccountProfile
 */
export interface ServiceAccountProfile {
    /**
     * 
     * @type {string}
     * @memberof ServiceAccountProfile
     */
    identityType?: ServiceAccountProfileIdentityTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof ServiceAccountProfile
     */
    impersonatesPlan: string;
}


/**
 * @export
 */
export const ServiceAccountProfileIdentityTypeEnum = {
    ServiceAccount: 'service_account'
} as const;
export type ServiceAccountProfileIdentityTypeEnum = typeof ServiceAccountProfileIdentityTypeEnum[keyof typeof ServiceAccountProfileIdentityTypeEnum];


/**
 * Check if a given object implements the ServiceAccountProfile interface.
 */
export function instanceOfServiceAccountProfile(value: object): boolean {
    if (!('impersonatesPlan' in value)) return false;
    return true;
}

export function ServiceAccountProfileFromJSON(json: any): ServiceAccountProfile {
    return ServiceAccountProfileFromJSONTyped(json, false);
}

export function ServiceAccountProfileFromJSONTyped(json: any, ignoreDiscriminator: boolean): ServiceAccountProfile {
    if (json == null) {
        return json;
    }
    return {
        
        'identityType': json['identity_type'] == null ? undefined : json['identity_type'],
        'impersonatesPlan': json['impersonates_plan'],
    };
}

export function ServiceAccountProfileToJSON(value?: ServiceAccountProfile | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'identity_type': value['identityType'],
        'impersonates_plan': value['impersonatesPlan'],
    };
}

