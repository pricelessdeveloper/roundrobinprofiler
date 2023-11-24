import React, { FC } from 'react';
import EquippedItem from '~/interfaces/EquippedItem';

interface GearSlotProps {
    item: EquippedItem;
    isLeft: boolean;
}

const GearSlot: FC<GearSlotProps> = ({ item, isLeft }) => {
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
        return `http://classic.wowhead.com/item=${enchantment.source_item.id}`;
    }

    /*const HoverableDiv = (props: { handleMouseOver: any, handleMouseOut: any }) => {
        return (
            <div onMouseOver={props.handleMouseOver} onMouseOut={props.handleMouseOut}>
              Hover Me
            </div>
          );
    }*/

    return (
        <>
            <div className={getClassName()}>
                <span>
                    <div>
                        <img alt="" src={getImageSource()} />
                        <div></div>
                    </div>
                    <i></i>
                </span>
                <div className='m-1'>
                    <div className={`hoverable-div ${getAlignmentClass()}`}>
                        <span className={`item-font item-name ${getQualityClassName()}`}>
                            <a href={getWowheadLink()} target="_blank">{item.name}</a>
                        </span>
                    </div>
                    <div className='w-80 item-details-hide border border-solid border-white grey-background'>
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
                            <span>{item.armor?.display.display_string}</span>
                        </div>
                        {item.stats ? item.stats.map(stat => (
                            <div className='ml-2 mr-2 item-font item-common item-line-item'>
                                <span>{stat.display.display_string}</span>
                            </div>
                        )) : <></>}
                        {item.enchantments ? item.enchantments.map(enchantment => (
                            <div className='ml-2 mr-2 item-font item-uncommon item-line-item'>
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
                            <div className='ml-2 mr-2 item-font item-uncommon item-line-item'>
                                <span>{spell.description}</span>
                            </div>
                        )) : <></>}
                        {item.set ?
                            <div className='mt-4 ml-2 mr-2 item-font item-set-title item-line-item'>
                                <span>{item.set?.display_string}</span>
                            </div>
                        : <></>}
                        {item.set?.items ? item.set.items.map(setItem => (
                            <div className='ml-4 mr-2 item-font item-line-item'>
                                <span className={`${setItem.is_equipped ? 'item-set-equipped' : 'item-poor'}`}>{setItem.item.name}</span>
                            </div>
                        )) : <></>}
                        {item.set?.effects && item.set?.effects.length ?
                            <div className='mt-2'></div>
                        : <></>}
                        {item.set?.effects ? item.set.effects.map(effect => (
                            <div className='ml-2 mr-2 item-font item-line-item'>
                                <span className={`${effect.is_active ? 'item-uncommon' : 'item-poor'}`}>{effect.display_string}</span>
                            </div>
                        )) : <></>}
                        <div className='mb-2'></div>
                    </div>
                    {item.enchantments ? item.enchantments.map(enchantment => (
                        <div className={getAlignmentClass()}>
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