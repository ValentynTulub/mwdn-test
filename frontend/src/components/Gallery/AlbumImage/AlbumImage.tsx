import { Image } from "../../../api/images";
import "./AlbumImage.css";

interface AlbumImageProps {
    image: Image
    onImageClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>, image: Image) => void
}

export default function AlbumImage({image, onImageClick}: AlbumImageProps) {
    return <div className={'album-image'} onClick={(e) => onImageClick(e, image)}>
        <img className={'album-image__image'} title={image.title} src={image.thumbnailUrl ?? image.url ?? image.path} alt={image.title}/>
        <span className={'album-image__title'} title={image.title}>{image.title}</span>
    </div>
}
