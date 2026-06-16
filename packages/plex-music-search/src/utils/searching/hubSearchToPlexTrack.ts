import { HubSearchResult } from "../../types/actions/HubSearchResult";
import { PlexTrack } from "../../types/PlexTrack";

export default function hubSearchToPlexTrack(item: HubSearchResult): PlexTrack {

    return {
        id: item.id,
        guid: item.guid,
        image: item.image,
        title: item.title,
        src: 'tbd',
        album: item.type == 'track' ? { ...item.album } : undefined,
        artist: { ...item.artist },
        duration_ms: item.type == 'track' ? item.duration_ms : undefined
    };


}