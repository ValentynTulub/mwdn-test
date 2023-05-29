import { Image } from "../../../api/images";
import "./AlbumImage.css";

interface AlbumImageProps {
    image: Image
}

export default function AlbumImage({image}: AlbumImageProps) {
    return <div className={'album-image'}>
        <img className={'album-image__image'} title={image.title} src={image.thumbnailUrl ?? image.url ?? image.path} alt={image.title}/>
        <span className={'album-image__title'} title={image.title}>{image.title}</span>
    </div>
}
