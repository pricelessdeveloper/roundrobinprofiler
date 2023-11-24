export default interface Character {
    id: number;
    key: {
        href: string;
    }
    name: string;
    realm: {
        id: number;
        key: {
            href: string;
        }
        name: string;
        slug: string;
    }
}