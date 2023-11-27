import React, { FC, useState, useEffect } from 'react';
import EquippedItem from '~/interfaces/EquippedItem';
import ItemMedia from '~/interfaces/ItemMedia';
import { getItemMedia } from '~/pages/api/trpc/battleNetController';

interface GearSlotProps {
    item: EquippedItem;
    isLeft: boolean;
}

const GearSlot: FC<GearSlotProps> = ({ item, isLeft }) => {

    let itemMedia = item.item ? getItemMedia(item.item.id) : {} as ItemMedia;

    const [mediaLink, setItemMediaState] =  useState<string>();

    useEffect(() => {
        setItemMediaState(itemMedia && itemMedia.assets && itemMedia.assets.length ? itemMedia?.assets[0]?.value : '');
    }, [itemMedia]);

    const getImageSource = () => {
        return `/images/${item.slot.type}.jpg`
    }

    const getClassName = () => {
        return `flex m-1${isLeft ? '' : ' flex-row-reverse'}`;
    }

    const getAlignmentClass = () => {
        return isLeft ? 'text-left' : 'text-right';
    }

    const getQualityClassName = () => {
        let qualityType = item.quality?.type;
        if (qualityType == 'LEGENDARY') {
            return 'item-legendary';
        }
        if (qualityType == 'EPIC') {
            return 'item-epic';
        }
        if (qualityType == 'RARE') {
            return 'item-rare';
        }
        if (qualityType == 'UNCOMMON') {
            return 'item-uncommon';
        }
        if (qualityType == 'COMMON') {
            return 'item-common';
        }
        return 'item-poor';
    }

    const getWowheadLink = () => {
        return `http://classic.wowhead.com/item=${item.item?.id}`;
    }

    const getWowheadEnchantmentLink = (enchantment: any) => {
        if (enchantment && enchantment.source_item) {
            return `http://classic.wowhead.com/item=${enchantment.source_item.id}`;
        }
        return 'http://classic.wowhead.com/';
    }

    const getItemDetailsSide = () => {
        return isLeft ? 'item-details-hide-left' : 'item-details-hide-right';
    }

    return (
        <>
            <div className={getClassName()}>
                <div className='hoverable-div'>
                    <a href={getWowheadLink()} target="_blank"><img className='border border-solid border-slate-500' alt="" src={mediaLink && mediaLink.length ? mediaLink : getImageSource()} /></a>
                </div>
                <div className={`w-80 item-details-hide ${getItemDetailsSide()} border border-solid border-white grey-background`}>
                        <div className='ml-2 mt-2 mr-2'>
                            <span className={`item-font item-name ${getQualityClassName()}`}>
                                <a href={getWowheadLink()} target="_blank">{item.name}</a>
                            </span>
                        </div>
                        <div className='ml-2 mr-2 item-font item-common item-line-item'>
                            <span>{item.binding?.name}</span>
                        </div>
                        <div className='ml-2 mr-2 item-font item-common item-line-item'>
                            <span>{item.slot?.name.replace(' 1', '').replace(' 2', '')}</span>
                            <span className='float-right'>{item.item_subclass?.name}</span>
                        </div>
                        <div className='ml-2 mr-2 item-font item-common item-line-item'>
                            <span>{item.weapon?.damage.display_string}</span>
                            <span className='float-right'>{item.weapon?.attack_speed.display_string}</span>
                        </div>
                        <div className='ml-2 mr-2 item-font item-common item-line-item'>
                            <span>{item.weapon?.dps.display_string}</span>
                        </div>
                        <div className='ml-2 mr-2 item-font item-common item-line-item'>
                            <span>{item.armor?.display.display_string}</span>
                        </div>
                        {item.stats ? item.stats.map(stat => (
                            <div key={stat.display.display_string} className='ml-2 mr-2 item-font item-common item-line-item'>
                                <span>{stat.display.display_string}</span>
                            </div>
                        )) : <></>}
                        {item.enchantments ? item.enchantments.map(enchantment => (
                            <div key={enchantment.display_string} className='ml-2 mr-2 item-font item-uncommon item-line-item'>
                                <span>{enchantment.display_string.replace('Enchanted: ', '')}</span>
                            </div>
                        )) : <></>}
                        <div className='ml-2 mr-2 item-font item-common item-line-item'>
                            <span>{item.durability?.display_string}</span>
                        </div>
                        <div className='ml-2 mr-2 item-font item-common item-line-item'>
                            <span>{item.requirements?.level?.display_string}</span>
                        </div>
                        {item.spells ? item.spells.map(spell => (
                            <div key={spell.description} className='ml-2 mr-2 item-font item-uncommon item-line-item'>
                                <span>{spell.description}</span>
                            </div>
                        )) : <></>}
                        {item.set ?
                            <div className='mt-4 ml-2 mr-2 item-font item-set-title item-line-item'>
                                <span>{item.set?.display_string}</span>
                            </div>
                        : <></>}
                        {item.set?.items ? item.set.items.map(setItem => (
                            <div key={setItem.item.name} className='ml-4 mr-2 item-font item-line-item'>
                                <span className={`${setItem.is_equipped ? 'item-set-equipped' : 'item-poor'}`}>{setItem.item.name}</span>
                            </div>
                        )) : <></>}
                        {item.set?.effects && item.set?.effects.length ?
                            <div className='mt-2'></div>
                        : <></>}
                        {item.set?.effects ? item.set.effects.map(effect => (
                            <div key={effect.display_string} className='ml-2 mr-2 item-font item-line-item'>
                                <span className={`${effect.is_active ? 'item-uncommon' : 'item-poor'}`}>{effect.display_string}</span>
                            </div>
                        )) : <></>}
                        <div className='mb-2'></div>
                    </div>
                <div className='m-1'>
                    <div className={`hoverable-div ${getAlignmentClass()}`}>
                        <span className={`item-font item-name ${getQualityClassName()}`}>
                            <a href={getWowheadLink()} target="_blank">{item.name}</a>
                        </span>
                    </div>
                    
                    {item.enchantments ? item.enchantments.map(enchantment => (
                        <div key={`${enchantment.display_string}-2`} className={getAlignmentClass()}>
                            <span className='item-font item-uncommon item-enchantment'>
                                <a href={getWowheadEnchantmentLink(enchantment)} target="_blank">{enchantment.display_string.replace('Enchanted: ', '')}</a>
                            </span>
                        </div>
                    )) : <></>}
                </div>
            </div>
        </>
    )
}

export default GearSlot;