export default interface Character {
    id: number;
    key: {
        href: string;
    }
    name: string;
    character: {
        href: string;
    };
    protected_character: {
        href: string;
    }
    realm: {
        id: number;
        key: {
            href: string;
        }
        name: string;
        slug: string;
    };
    playable_class: {
        key: {
            href: string;
        };
        name: string;
        id: number;
    };
    playable_race: {
        key: {
            href: string;
        };
        name: string;
        id: number;
    };
    gender: {
        type: string;
        name: string;
    };
    faction: {
        type: string;
        name: string;
    };
    level: number;
}