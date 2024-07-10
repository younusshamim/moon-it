'use client'
import { useEffect, useRef, useState } from "react"
import { type CarouselApi } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import { cn } from "@/lib/utils"

export function HeroCarousel() {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)

    const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }))

    const images = [
        { img: '/photo/protait1.jpg', title: 'Protait' },
        { img: '/photo/seminar.jpg', title: 'Seminar' },
        { img: '/photo/technical-school.jpg', title: 'Technical School' },
    ]

    useEffect(() => {
        if (!api) { return }
        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)
        api.on("select", () => { setCurrent(api.selectedScrollSnap() + 1) })
    }, [api])

    return (
        <div className="relative">
            <Carousel
                setApi={setApi}
                plugins={[plugin.current]}
                className="w-full shadow-lg shadow-gray-400 dark:shadow-gray-700 rounded-card hover:scale-[1.02] transition-all duration-500"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
            >
                <CarouselContent>
                    {images.map(item => (
                        <CarouselItem key={item.title}>
                            <Image
                                className="w-full h-[300px] xl:h-[420px] object-cover rounded-card"
                                sizes="100vw"
                                width={0}
                                height={0}
                                src={item.img}
                                alt={item.title}
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

            <div className="flex gap-2 absolute bottom-3 left-1/2 transform -translate-x-1/2">
                {Array.from({ length: count }).map((_, index) => (
                    <div
                        key={index} className={cn('h-2 w-4 rounded-card bg-sky-200', { 'bg-primary-lighter w-6': current == index + 1 })}
                    >
                    </div>
                ))}
            </div>
        </div>
    )
}
