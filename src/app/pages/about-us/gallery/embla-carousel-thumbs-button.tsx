"use client";

import { GalleryImgType } from "@/lib/types/gallery";
import Image from "next/image";

type PropType = {
    selected: boolean
    index: number
    onClick: () => void,
    item: GalleryImgType
}

export const Thumb: React.FC<PropType> = (props) => {
    const { selected, index, onClick, item } = props

    return (
        <div
            className={'embla-thumbs__slide'.concat(
                selected ? ' embla-thumbs__slide--selected' : ''
            )}
        >
            <button
                onClick={onClick}
                type="button"
                className="embla-thumbs__slide__number"
            >
                <Image
                    className="w-full h-full object-cover rounded-[30px] shadow-lg cursor-pointer"
                    src={item.image}
                    height={0}
                    width={0}
                    sizes="100vw"
                    alt="Moon IT Training Institute"
                />
            </button>
        </div>
    )
}