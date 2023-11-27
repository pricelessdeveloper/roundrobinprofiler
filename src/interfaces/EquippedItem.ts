import EquippedItemSet from './EquippedItemSet';

interface Color {
    r: number;
    g: number;
    b: number;
    a: number;
}

interface Armor {
    display: {
        color: Color,
        display_string: string;
    },
    value: number;
}

interface TypeName {
    type: string;
    name: string;
}

interface Durability {
    display_string: string;
    value: number;
}

interface Enchantment {
    display_string: string;
    enchantment_id: number;
    enchantment_slot: {
        id: number;
        type: string;
    },
    source_item: {
        id: number;
        key: {
            href: string;
        },
        name: string;
    }
}

interface IdKey {
    id: number;
    key: {
        href: string;
    }
}

interface IdKeyName {
    id: number;
    key: {
        href: string;
    }
    name: string;
}

interface Requirements {
    level: {
        value: number;
        display_string: string;
    }
}

interface SellPrice {
    display_strings: {
        header: string;
        gold: string;
        silver: string;
        copper: string;
    }
    value: number;
}

interface Spell {
    description: string;
    spell: IdKeyName;
}

interface Stat {
    display: {
        display_string: string;
        color: Color
    },
    type: TypeName,
    value: number;
};

interface Weapon {
    attack_speed: {
        value: number;
        display_string: string
    };
    damage: {
        min_value: number;
        max_value: number;
        display_string: string;
    };
    dps: {
        value: number;
        display_string: string;
    }
}

export default interface EquippedItem {
    armor?: Armor;
    binding?: TypeName;
    durability?: Durability;
    enchantments?: Array<Enchantment>;
    inventory_type?: TypeName;
    item?: IdKey;
    item_class?: IdKeyName;
    item_subclass?: IdKeyName;
    media?: IdKeyName;
    name: string;
    quality?: TypeName;
    quantity?: number;
    requirements?: Requirements;
    sell_price?: SellPrice;
    set?: EquippedItemSet;
    slot: TypeName;
    spells?: Array<Spell>;
    stats?: Array<Stat>;
    weapon?: Weapon;
}