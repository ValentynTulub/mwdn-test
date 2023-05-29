import React, {useEffect, useState} from "react";
import {AlbumsResponse, getImages, Image} from "../../api/images";
import "./Gallery.css";
import Albums from "./Albums/Albums";

interface CarouselProps {
    images: Array<Image>;
}

function Carousel({images}: CarouselProps) {
    return <div>Carousel Layout</div>;
}

export default function Gallery() {
    const [albums, setAlbums] = useState<AlbumsResponse | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [layout, setLayout] = useState<'carousel' | 'full'>('full');

    const loadImages = () => {
        setLoading(true);
        setError(null);
        setAlbums(null);
        getImages()
            .then((albums) => setAlbums(albums.data))
            .catch(err => setError(err))
            .finally(() => setLoading(false))
    };

    useEffect(() => {
        loadImages()
    }, []);

    return <div className={'gallery'}>
        <h1>Welcome to the Gallery!</h1>
            {
                loading && <div className={'gallery-loading'}>Loading...</div>
            }
            {
                !loading && albums === null && <div>Failed to load images{error && `: ${error}`}
                    <button onClick={() => loadImages()}>Reload</button>
                </div>
            }
            {
                !loading && albums && <>
                    {/*<button onClick={() => setLayout(layout === 'carousel' ? 'full' : 'carousel')}>*/}
                    {/*    Toggle Layout*/}
                    {/*</button>*/}
                    {layout === 'carousel' ? <Carousel images={albums ? albums[0] : []}/> : <Albums albums={albums}/>}
                </>
            }
    </div>
}