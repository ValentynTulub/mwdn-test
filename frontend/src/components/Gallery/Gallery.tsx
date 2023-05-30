import React, {useEffect, useState} from "react";
import {AlbumsResponse, getImages, Image} from "../../api/images";
import "./Gallery.css";
import Albums from "./Albums/Albums";
import ReactModal from "react-modal";
import Carousel from "./Carousel/Carousel";

export default function Gallery() {
    const [albums, setAlbums] = useState<AlbumsResponse | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [carouselImage, setCarouselImage] = useState<Image | null>(null);
    const [carouselAlbum, setCarouselAlbum] = useState<Array<Image> | null>(null);

    const loadImages = () => {
        if (!loading) {
            setLoading(true);
            setError(null);
            setAlbums(null);
            getImages()
                .then((albums) => setAlbums(albums.data))
                .catch(err => setError(err))
                .finally(() => setLoading(false))
        }
    };

    useEffect(() => {
        loadImages()
    }, []);

    return <div className={'gallery'}>
        <h1>Welcome to the Gallery!</h1>
        <ReactModal
            style={{content: {width: 800, margin: 'auto'}}}
            isOpen={!!carouselAlbum && !!carouselImage}
            ariaHideApp={false}
            onRequestClose={() => {
            setCarouselImage(null);
            setCarouselAlbum(null);
        }}>
            {carouselAlbum && carouselImage && <Carousel
                images={carouselAlbum}
                currentImage={carouselImage}
                switchCurrentImage={setCarouselImage}
            />}
        </ReactModal>
            {
                loading && <div className={'gallery-loading'}>Loading...</div>
            }
            {
                !loading && albums === null && <div>Failed to load images{error && `: ${error}`}
                    <button onClick={() => loadImages()}>Reload</button>
                </div>
            }
            {
                !loading && albums && <Albums albums={albums} onImageClick={(e, album, image) => {
                    setCarouselImage(image);
                    setCarouselAlbum(album);
                }}/>
            }
    </div>
}