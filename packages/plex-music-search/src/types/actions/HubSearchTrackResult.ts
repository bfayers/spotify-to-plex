
export type HubSearchTrackResult = {
    type: "track";
    id: string;
    ratingKey: string;
    guid: string;
    score: number;
    image: string;
    title: string;
    src?: string;
    duration_ms?: number;
    album: {
        guid: string;
        id: string;
        title: string;
        year: number;
        image: string;
    };
    artist: {
        guid: string;
        id: string;
        title: string;
        image: string;
    };
};
