import client from "./client";
import {AxiosResponse} from "axios";

export interface Image {
    albumId: number;
    id: number;
    title: string;
    url?: string;
    thumbnailUrl?: string;
    path?: string;
}

export type AlbumsResponse = Array<Array<Image>>
export async function getImages(): Promise<AxiosResponse<AlbumsResponse>> {
    return client.get<any, AxiosResponse<AlbumsResponse>>('/images');
}
