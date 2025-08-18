import { API_BASE_URL } from "../../config/api"

interface ExistingImagesProps {
  images: string[]
  onDelete?: (image: string) => void
}

const ExistingImages = ({ images, onDelete }: ExistingImagesProps) => {
  if (images.length === 0) return null

  return (
    <div className="mb-4">
      <h3 className="text-sm font-medium mb-2 dark:text-white">Existing Images</h3>
      <div className="flex flex-wrap gap-2">
        {images.map((image) => (
          <div key={image} className="relative group">
            <img
              src={`${API_BASE_URL}/uploads/${image}`}
              alt="Superhero"
              className="h-24 w-24 object-cover rounded-lg"
            />
            {onDelete && (
              <button
                type="button"
                onClick={() => onDelete(image)}
                className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                ✕
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExistingImages
