import React, { useState, useEffect } from "react";
import CharacterEquipment from "~/interfaces/CharacterEquipment";
import ItemMedia from "~/interfaces/ItemMedia";
import ProfileSummary from "~/interfaces/ProfileSummary";

const accessToken = '';

const getUrlPrefix = (region = 'us') => {
    return `https://${region}.api.blizzard.com/`
}

function getCall<T>(url: string, log = false): T | undefined {
    const [data, setData] = useState<T>();

    useEffect(() => {
        fetch(url)
            .then((response) =>  response.json())
            .then((json) => {
                if (log) {
                    console.debug(json);
                }
                setData(json)
            })
            .catch(error => console.error(error));
    }, []);

    return data;
}

async function getCallAsync<T>(url: string): Promise<T> {
    return new Promise((resolve, reject) => {
        fetch(url).then((response) => response.json()).then((json) => {
            resolve(json);
        }).catch(error => console.error(error));
    });
}

export const getProfileSummary = (region = 'us', namespace = 'profile-classic1x-us', locale = 'en_US') => {
    return getCall<ProfileSummary>(`${getUrlPrefix(region)}profile/user/wow?`+
        `namespace=${namespace}&locale=${locale}&access_token=${accessToken}`, true);
}

export async function getCharacterEquipmentAsync(realm: string, characterName: string, region = 'us', namespace = 'profile-classic1x-us', locale = 'en_US'): Promise<CharacterEquipment> {
    realm = realm.toLowerCase();
    characterName = characterName.toLowerCase();
    return await getCallAsync<CharacterEquipment>(`${getUrlPrefix(region)}profile/wow/character/${realm}/${characterName}/equipment?`+
        `namespace=${namespace}&locale=${locale}&access_token=${accessToken}`);
};

export const getCharacterEquipment = (realm: string, characterName: string, region = 'us', namespace = 'profile-classic1x-us', locale = 'en_US') => {
    realm = realm.toLowerCase();
    characterName = characterName.toLowerCase();
    return getCall<CharacterEquipment>(`${getUrlPrefix(region)}profile/wow/character/${realm}/${characterName}/equipment?`+
        `namespace=${namespace}&locale=${locale}&access_token=${accessToken}`);
}

export const getItemMedia = (itemId: number, region = 'us', namespace = 'static-classic1x-us', locale = 'en_US') => {
    return getCall<ItemMedia>(`${getUrlPrefix(region)}data/wow/media/item/${itemId}?`+
        `namespace=${namespace}&locale=${locale}&access_token=${accessToken}`);
}