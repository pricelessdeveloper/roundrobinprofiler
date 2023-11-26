export default interface ItemMedia {
    _links: {
        self: {
            href: string;
        }
    }
    assets: Array<{
        key: string;
        value: string;
        file_data_id: number;
    }>
    id: number;
}