'use client'
import { useEffect, useRef, useState } from "react"
import { CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { Carousel as MyCarousel, CarouselContent, } from "@/components/ui/carousel"
import { cn } from "@/lib/utils"

type PropsTypes = {
    children: React.ReactNode
    className?: string
    imgOverlaySlider?: boolean
    sliderDots?: boolean
}

export function Carousel({ children, className, imgOverlaySlider = false, sliderDots = false }: PropsTypes) {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)
    const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }))

    useEffect(() => {
        if (!api) { return }
        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)
        api.on("select", () => { setCurrent(api.selectedScrollSnap() + 1) })
    }, [api])

    return (
        <div className="relative ">
            <MyCarousel
                setApi={setApi}
                plugins={[plugin.current]}
                className={cn("w-full", className)}
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
            >
                <CarouselContent>
                    {children}
                </CarouselContent>
            </MyCarousel>

            {imgOverlaySlider && <div className="flex gap-2 absolute bottom-3 left-1/2 transform -translate-x-1/2">
                {Array.from({ length: count }).map((_, index) => (
                    <div
                        key={index} className={cn('h-2 w-4 rounded-card bg-white', { 'bg-primary-lighter w-6': current == index + 1 })}
                    >
                    </div>
                ))}
            </div>}

            {sliderDots && <div className="w-full justify-center flex gap-2 mt-5">
                {Array.from({ length: count }).map((_, index) => (
                    <div
                        key={index} className={cn('h-[6px] w-[6px] rounded-card bg-white', { 'bg-primary-lighter ': current == index + 1 })}
                    >
                    </div>
                ))}
            </div>}
        </div>
    )
}