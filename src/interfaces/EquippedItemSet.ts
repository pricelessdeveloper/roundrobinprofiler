export default interface EquippedItemSet {
    display_string: string;
    effects: [{
        display_string: string;
        is_active: boolean;
        required_count: number;
    }];
    item_set: {
        id: number,
        key: {
            href: string;
        },
        name: string;
    };
    items: [{
        item: {
            id: number;
            key: {
                href: string;
            }
            name: string;
        },
        is_equipped: boolean;
    }]
}