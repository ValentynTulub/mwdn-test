import {Image} from "../../../api/images";
import "./Albums.css";
import Album from "../Album/Album";

interface AlbumsProps {
    albums: Array<Array<Image>>
}

export default function Albums({albums}: AlbumsProps) {
    return <div className={'albums'}>{
        albums.length ? albums.map(a => <Album album={a} key={a[0]?.albumId || 0}/>) : 'No albums found.'
    }</div>;
}
