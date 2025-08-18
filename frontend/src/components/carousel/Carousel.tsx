import { useState } from "react"
import { API_BASE_URL } from "../../config/api"

interface CarouselProps {
  images: string[]
}

const processImgUrl = (img:string) => {
    return API_BASE_URL + '/uploads/' + img;
}

const Carousel = ({ images }: CarouselProps) => {
  const [current, setCurrent] = useState(0)

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  if (images.length === 0) {
    return (
      <div className="flex items-center justify-center w-full min-h-96 rounded-xl">
        <span className="text-gray-500 dark:text-neutral-400">
          No images available
        </span>
      </div>
    )
  }

  return (
    <div className="relative w-full min-h-96 overflow-hidden rounded-xl">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, i) => (
          <div key={i} className="w-full flex-shrink-0 flex justify-center items-center 
             bg-white dark:bg-neutral-900 overflow-hidden rounded-xl">
            <img
              src={processImgUrl(img)}
              alt={`Image ${i + 1}`}
              className="object-contain w-full h-96 rounded-xl"
              onError={(e) => console.error("Failed:", e.currentTarget.src)}
            />
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white/70 hover:bg-white rounded-full shadow"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white/70 hover:bg-white rounded-full shadow"
      >
        ›
      </button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition ${
              current === i ? "bg-gray-800" : "bg-gray-400/60"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel
