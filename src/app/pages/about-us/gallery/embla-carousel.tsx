"use client";

import { useState, useEffect, useCallback } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { Thumb } from './embla-carousel-thumbs-button'
import { GalleryImgType } from '@/lib/types/gallery';
import Image from 'next/image';

type PropType = {
    filteredImages: GalleryImgType[]
}
const OPTIONS: EmblaOptionsType = {}

const EmblaCarousel: React.FC<PropType> = (props) => {
    const { filteredImages } = props
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [emblaMainRef, emblaMainApi] = useEmblaCarousel(OPTIONS)
    const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
        containScroll: 'keepSnaps',
        dragFree: true,
        axis: 'y'
    })

    const onThumbClick = useCallback(
        (index: number) => {
            if (!emblaMainApi || !emblaThumbsApi) return
            emblaMainApi.scrollTo(index)
        },
        [emblaMainApi, emblaThumbsApi]
    )

    const onSelect = useCallback(() => {
        if (!emblaMainApi || !emblaThumbsApi) return
        setSelectedIndex(emblaMainApi.selectedScrollSnap())
        emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap())
    }, [emblaMainApi, emblaThumbsApi, setSelectedIndex])

    useEffect(() => {
        if (!emblaMainApi) return
        onSelect()

        emblaMainApi.on('select', onSelect).on('reInit', onSelect)
    }, [emblaMainApi, onSelect])

    return (
        <div className="embla flex min-w-full gap-5">
            <div className="embla-thumbs w-48">
                <div className="embla-thumbs__viewport w-40" ref={emblaThumbsRef}>
                    <div className="embla-thumbs__container">
                        {filteredImages.map((item, index) => (
                            <Thumb
                                key={index}
                                onClick={() => onThumbClick(index)}
                                selected={index === selectedIndex}
                                index={index}
                                item={item}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="embla__viewport" ref={emblaMainRef}>
                <div className="embla__container">
                    {filteredImages.map((item, index) => (
                        <div className="embla__slide " key={index}>
                            <div className="embla__slide__number min-h-[500px]">
                                <Image
                                    className="w-full h-full object-cover rounded-card shadow-lg cursor-pointer"
                                    key={item.image + index}
                                    src={item.image}
                                    height={0}
                                    width={0}
                                    sizes="100vw"
                                    alt="Moon IT Training Institute"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default EmblaCarousel
