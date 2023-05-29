import client from "./client";

export interface Image {
    albumId: number;
    id: number;
    title: string;
    url?: string;
    thumbnailUrl?: string;
    path?: string;
}

export type AlbumsResponse = Array<Array<Image>>
export async function getImages(){
    return client.get<any, AlbumsResponse>('/images');
}
