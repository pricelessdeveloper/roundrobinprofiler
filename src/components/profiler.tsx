import React, { FC, useState, useEffect } from 'react';
import { getCharacterEquipment } from '~/pages/api/trpc/battleNetController';
import CharacterEquipment from '~/interfaces/CharacterEquipment';
import EquippedItem from '~/interfaces/EquippedItem';
import GearSlot from './GearSlot';

interface ProfilerProps {
    title: string;
}

const Profiler: FC<ProfilerProps> = ({ title }) => {
    let characterData = getCharacterEquipment('fairbanks', 'alsharptusk');
    
    const headType = 'HEAD';
    const neckType = 'NECK';
    const shoulderType = 'SHOULDER';
    const backType = 'BACK';
    const chestType = 'CHEST';
    const shirtType = 'SHIRT';
    const tabardType = 'TABARD';
    const wristType = 'WRIST';
    const mainHandType = 'MAIN_HAND';
    const offHandType = 'OFF_HAND';

    const handType = 'HANDS';
    const waistType = 'WAIST';
    const legType = 'LEGS';
    const feetType = 'FEET';
    const fingerType1 = 'FINGER_1';
    const fingerType2 = 'FINGER_2';
    const trinketType1 = 'TRINKET_1';
    const trinketType2 = 'TRINKET_2';
    const rangedType = 'RANGED';

    const getDefaultItems = () => {
        return [{
            name: 'Head',
            slot: {
                type: headType,
                name: 'Head'
            }
        }, {
            name: 'Neck',
            slot: {
                type: neckType,
                name: 'Neck'
            }
        }, { // TODO shouldn't be plural
            name: 'Shoulders',
            slot: {
                type: 'SHOUDLERS',
                name: 'Shoulders'
            }
        }, {
            name: 'Back',
            slot: {
                type: 'BACK',
                name: 'Back'
            }
        }, {
            name: 'Chest',
            slot: {
                type: chestType,
                name: 'Chest'
            }
        }, {
            name: 'Shirt',
            slot: {
                type: 'SHIRT',
                name: 'Shirt'
            }
        }, {
            name: 'Tabard',
            slot: {
                type: tabardType,
                name: 'Tabard'
            }
        }, {
            name: 'Wrists',
            slot: {
                type: wristType,
                name: 'Wrists'
            }
        }, {
            name: 'Main Hand',
            slot: {
                type: mainHandType,
                name: 'MainHand'
            }
        }, {
            name: 'Off Hand',
            slot: {
                type: offHandType,
                name: 'OffHand'
            }
        }, {
            name: 'Hands',
            slot: {
                type: handType,
                name: 'Hands'
            }
        }, {
            name: 'Waist',
            slot: {
                type: waistType,
                name: 'Waist'
            }
        }, {
            name: 'Legs',
            slot: {
                type: legType,
                name: 'Legs'
            }
        }, {
            name: 'Feet',
            slot: {
                type: feetType,
                name: 'Feet'
            }
        }, {
            name: 'Finger 1',
            slot: {
                type: fingerType1,
                name: 'Finger'
            }
        }, {
            name: 'Finger 2',
            slot: {
                type: fingerType2,
                name: 'Finger'
            }
        }, {
            name: 'Trinket 1',
            slot: {
                type: trinketType1,
                name: 'Trinket'
            }
        }, {
            name: 'Trinket 2',
            slot: {
                type: trinketType2,
                name: 'Trinket'
            }
        }, {
            name: 'Ranged',
            slot: {
                type: rangedType,
                name: 'Ranged'
            }
        }];
    }

    const leftInventoryTypes = [headType, neckType, shoulderType, backType, chestType, shirtType, tabardType, wristType, mainHandType, offHandType];
    const isLeftInventoryType = (item: EquippedItem): boolean => {
        return leftInventoryTypes.indexOf(item.slot.type) != -1;
    }

    const LeftGearSlot = (props: { item: EquippedItem }) => {
        if (isLeftInventoryType(props.item)) {
            return <GearSlot item={props.item} isLeft={true}></GearSlot>;
        }
        return null;
    }

    const rightInventoryTypes = [handType, waistType, legType, feetType, fingerType1, fingerType2, trinketType1, trinketType2, rangedType];
    const isRightInventoryType = (item: EquippedItem): boolean => {
        return rightInventoryTypes.indexOf(item.slot.type) != -1;
    }

    const RightGearSlot = (props: { item: EquippedItem }) => {
        if (isRightInventoryType(props.item)) {
            return <GearSlot item={props.item} isLeft={false}></GearSlot>;
        }
        return null;
    }

    return (
        <>
            <div className='grey-background'>
                <h1>{characterData ? characterData.character.name : 'Loading...'}</h1>
                <div className='flex flex-row'>
                    <div className='w-96 m-2'>
                        {(characterData ? characterData.equipped_items : getDefaultItems()).map(equippedItem => (
                            <LeftGearSlot item={equippedItem}></LeftGearSlot>
                        ))}
                    </div>
                    <div className='w-96 m-2'>
                        {(characterData ? characterData.equipped_items : getDefaultItems()).map(equippedItem => (
                            <RightGearSlot item={equippedItem}></RightGearSlot>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profiler;