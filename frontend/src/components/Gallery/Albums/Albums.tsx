import {Image} from "../../../api/images";
import "./Albums.css";
import Album from "../Album/Album";

interface AlbumsProps {
    albums: Array<Array<Image>>
    onImageClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>, album: Array<Image>, image: Image) => void
}

export default function Albums({albums, onImageClick}: AlbumsProps) {
    return <div className={'albums'}>{
        albums.length ? albums.map(a =>
            <Album
                album={a}
                onImageClick={(e, image) => onImageClick(e, a, image)}
                key={a[0]?.albumId || 0}
            />) : 'No albums found.'
    }</div>;
}
