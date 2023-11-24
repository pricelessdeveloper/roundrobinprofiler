import React, { useState, useEffect } from "react";
import CharacterEquipment from "~/interfaces/CharacterEquipment";

const accessToken = 'US0TtPimiGgASMKGs3uzBxoWRRDrHDF6eL';

const getUrlPrefix = (region = 'us') => {
    return `https://${region}.api.blizzard.com/`
}

function getCall<T>(url: string): T | undefined {
    const [data, setData] = useState<T>();

    useEffect(() => {
        fetch(url)
            .then((response) =>  response.json())
            .then((json) => {
                console.debug(json);
                setData(json)
            })
            .catch(error => console.error(error));
    }, []);

    return data;
}

export const getCharacterEquipment = (realm: string, characterName: string, region = 'us', namespace = 'profile-classic1x-us', locale = 'en_US') => {
    return getCall<CharacterEquipment>(`${getUrlPrefix(region)}profile/wow/character/${realm}/${characterName}/equipment?`+
        `namespace=${namespace}&locale=${locale}&access_token=${accessToken}`);
}