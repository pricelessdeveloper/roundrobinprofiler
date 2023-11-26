import Character from "./Character";

export default interface ProfileSummary {
    _links: {
        self: {
            href: string;
        };
        user: {
            href: string;
        };
        profile: {
            href: string;
        };
    };
    id: number;
    wow_accounts: Array<{
        id: number,
        characters: Array<Character>;
    }>
}