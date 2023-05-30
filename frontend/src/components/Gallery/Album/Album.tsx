import {Image} from "../../../api/images";
import AlbumImage from "../AlbumImage/AlbumImage";
import "./Album.css";

interface AlbumProps {
    album: Array<Image>;
    onImageClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>, image: Image) => void
}

export default function Album({album, onImageClick}: AlbumProps) {
    return <div className={'album'}>
            <h2>Album #{album[0].albumId}</h2>
        <div className={'album__image-wrapper'}>
            { album.map(image => <AlbumImage key={image.id} image={image} onImageClick={onImageClick}/>)}
        </div>

    </div>;
}
