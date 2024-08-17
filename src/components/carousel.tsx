'use client'
import { CarouselContent, Carousel as MyCarousel, type CarouselApi } from "@/components/ui/carousel"
import { cn } from "@/lib/utils"
import Autoplay from "embla-carousel-autoplay"
import { useEffect, useRef, useState } from "react"

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
        <div className={cn("relative shadow-lg shadow-gray-400 dark:shadow-gray-700 rounded-card hover:scale-[1.02] transition-all duration-500", className)}>
            <MyCarousel
                setApi={setApi}
                plugins={[plugin.current]}
                className={cn("w-full",)}
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
                        key={index} className={cn('h-2 w-2 rounded-card bg-white', { 'bg-primary-lighter w-4': current == index + 1 })}
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
