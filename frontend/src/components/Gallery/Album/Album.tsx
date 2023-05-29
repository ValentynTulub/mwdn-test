import {Image} from "../../../api/images";
import AlbumImage from "../AlbumImage/AlbumImage";
import "./Album.css";

interface AlbumProps {
    album: Array<Image>;
}

export default function Album({album}: AlbumProps) {
    return <div className={'album'}>
            <h2>Album #{album[0].albumId}</h2>
        <div className={'album__image-wrapper'}>
            { album.map(image => <AlbumImage image={image}/>)}
        </div>

    </div>;
}
