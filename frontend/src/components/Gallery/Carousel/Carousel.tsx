import "./Carousel.css";
import {Image} from "../../../api/images";
import React from "react";

interface CarouselProps {
    images: Array<Image>;
    currentImage: Image;
    switchCurrentImage: (image: Image) => void
}

export default function Carousel({images, currentImage, switchCurrentImage}: CarouselProps) {
    const currentIndex = images.findIndex(i => i.id === currentImage.id);

    return <div className={'carousel'}>
        <div>
            <div className={'carousel__content'}>
                <button
                    className={'carousel__content__control carousel__content__prev'}
                    onClick={() => {
                        let nextIndex = currentIndex - 1;
                        switchCurrentImage(images[nextIndex < 0 ? images.length - 1 : nextIndex])
                    }}
                />
                <img className={'carousel__content__image'} src={currentImage.url ?? currentImage.path}
                     alt={currentImage.title} title={currentImage.title}/>
                <button
                    className={'carousel__content__control carousel__content__next'}
                    onClick={() => {
                        let nextIndex = currentIndex + 1;
                        switchCurrentImage(images[nextIndex === images.length ? 0 : nextIndex])
                    }
                    }
                />
            </div>
            <div className={'carousel__stepper'}>
                {images.map(i => <button
                    key={i.id}
                    onClick={() => {
                        switchCurrentImage(i)
                    }}
                    className={'carousel__stepper__item ' + (i.id === currentImage.id ? 'carousel__stepper__active-item' : '')}>
                </button>)
                }
            </div>
        </div>
    </div>;
}