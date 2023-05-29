import {useEffect, useState} from "react";
import {AlbumsResponse, getImages} from "../../api/images";
import "./Gallery.css";

export default function Gallery() {
    const [albums, setAlbums] = useState<AlbumsResponse | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        getImages()
            .then((albums) => setAlbums(albums))
            .finally(() => setLoading(false))
    }, []);

    return <div>Gallery</div>;
}