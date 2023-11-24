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
                <div className='m-1'><span>{item.name}</span><span></span></div>
            </div>
        </>
    )
}

export default GearSlot;