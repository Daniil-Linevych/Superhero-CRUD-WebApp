import { useForm } from "react-hook-form"
import type { SuperheroFormData } from "../../types/superhero"
import { API_BASE_URL } from "../../config/api"

interface FormProps {
  defaultValues?: Partial<SuperheroFormData>
  existingImages?: string[]
  onImageDelete?: (imageName: string) => void
  onSubmit: (data: SuperheroFormData) => void
  submitLabel?: string
}

const SuperheroForm = ({ 
  defaultValues, 
  existingImages = [], 
  onImageDelete, 
  onSubmit, 
  submitLabel 
}: FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<SuperheroFormData>({ defaultValues })

  const selectedFiles = watch("images")

  return (
    <div className="max-w-5xl mx-auto bg-white dark:bg-neutral-900 rounded-xl">
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        <div className="max-w-sm">
          <label className="block text-sm font-medium mb-2 dark:text-white">
            Nickname
          </label>
          <input
            type="text"
            {...register("nickname", { required: "Nickname is required" })}
            placeholder="Enter nickname"
            className={`py-2.5 sm:py-3 px-4 block w-full border border-gray-200 rounded-lg sm:text-sm 
                        focus:border-blue-500 focus:ring-blue-500 
                        disabled:opacity-50 disabled:pointer-events-none
                        dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 
                        dark:placeholder-neutral-500 dark:focus:ring-neutral-600
                        ${errors.nickname ? "border-red-500" : ""}`}
          />
          {errors.nickname && <p className="text-red-500 text-sm">{errors.nickname.message}</p>}
        </div>

        <div className="max-w-sm">
          <label className="block text-sm font-medium mb-2 dark:text-white">
            Real Name
          </label>
          <input
            type="text"
            {...register("realName", { required: "Real Name is required" })}
            placeholder="Enter real name"
            className={`py-2.5 sm:py-3 px-4 block w-full border border-gray-200 rounded-lg sm:text-sm 
                        focus:border-blue-500 focus:ring-blue-500 
                        disabled:opacity-50 disabled:pointer-events-none
                        dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 
                        dark:placeholder-neutral-500 dark:focus:ring-neutral-600
                        ${errors.realName ? "border-red-500" : ""}`}
          />
          {errors.realName && <p className="text-red-500 text-sm">{errors.realName.message}</p>}
        </div>

        <div className="max-w-sm">
          <label className="block text-sm font-medium mb-2 dark:text-white">
            Origin Description
          </label>
          <textarea
            {...register("originDescription")}
            placeholder="Enter origin description"
            rows={3}
            className={`py-2 px-3 sm:py-3 sm:px-4 block w-full border border-gray-200 rounded-lg sm:text-sm 
                        focus:border-blue-500 focus:ring-blue-500 
                        disabled:opacity-50 disabled:pointer-events-none
                        dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 
                        dark:placeholder-neutral-500 dark:focus:ring-neutral-600
                        ${errors.originDescription ? "border-red-500" : ""}`}
          />
          {errors.originDescription && <p className="text-red-500 text-sm">{errors.originDescription.message}</p>}
        </div>

        <div className="max-w-sm">
          <label className="block text-sm font-medium mb-2 dark:text-white">
            Superpowers
          </label>
          <textarea
            {...register("superpowers")}
            placeholder="Enter superpowers"
            rows={2}
            className={`py-2 px-3 sm:py-3 sm:px-4 block w-full border border-gray-200 rounded-lg sm:text-sm 
                        focus:border-blue-500 focus:ring-blue-500 
                        disabled:opacity-50 disabled:pointer-events-none
                        dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 
                        dark:placeholder-neutral-500 dark:focus:ring-neutral-600
                        ${errors.superpowers ? "border-red-500" : ""}`}
          />
          {errors.superpowers && <p className="text-red-500 text-sm">{errors.superpowers.message}</p>}
        </div> 

        <div className="md:col-span-2 max-w-sm">
          <label className="block text-sm font-medium mb-2 dark:text-white">
            Catch Phrase
          </label>
          <input
            type="text"
            {...register("catchPhrase")}
            placeholder="Enter catch phrase"
            className={`py-2.5 sm:py-3 px-4 block w-full border border-gray-200 rounded-lg sm:text-sm 
                        focus:border-blue-500 focus:ring-blue-500 
                        disabled:opacity-50 disabled:pointer-events-none
                        dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 
                        dark:placeholder-neutral-500 dark:focus:ring-neutral-600
                        ${errors.catchPhrase ? "border-red-500" : ""}`}
          />
          {errors.catchPhrase && <p className="text-red-500 text-sm">{errors.catchPhrase.message}</p>}
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-2 dark:text-white">
            Images
          </label>
          
          {existingImages.length > 0 && (
            <div className="mb-4">
              <h3 className="text-sm font-medium mb-2 dark:text-white">Existing Images</h3>
              <div className="flex flex-wrap gap-2">
                {existingImages.map((image) => (
                  <div key={image} className="relative group">
                    <img
                      src={`${API_BASE_URL}/uploads/${image}`}
                      alt="Superhero"
                      className="h-24 w-24 object-cover rounded-lg"
                    />
                    {onImageDelete && (
                      <button
                        type="button"
                        onClick={() => onImageDelete(image)}
                        className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* New Images Upload */}
          <div>
            <label className="block text-sm font-medium mb-2 dark:text-white">
              {existingImages.length > 0 ? "Add More Images" : "Upload Images"}
            </label>
            <input
              type="file"
              id="images"
              {...register("images")}
              multiple
              accept="image/*"
              className={`block w-full border border-gray-200 shadow-sm rounded-lg text-sm 
                          focus:z-10 focus:border-blue-500 focus:ring-blue-500 
                          disabled:opacity-50 disabled:pointer-events-none 
                          dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400
                          file:bg-gray-50 file:border-0 file:me-4 file:py-3 file:px-4
                          dark:file:bg-neutral-700 dark:file:text-neutral-400
                          ${errors.images ? "border-red-500" : ""}`}
            />
            {errors.images && <p className="text-red-500 text-sm">{errors.images.message}</p>}
          </div>

          {/* Selected Files Preview */}
          {selectedFiles?.length > 0 && (
            <div className="mt-4">
              <h3 className="text-sm font-medium mb-2 dark:text-white">Selected Files</h3>
              <ul className="text-sm text-gray-600 dark:text-neutral-300">
                {Array.from(selectedFiles).map((file, index) => (
                  <li key={index}>{file.name}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="md:col-span-2 flex justify-end">
          <button
            type="submit"
            className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg 
                       border border-transparent bg-gray-800 text-white hover:bg-gray-900 
                       focus:outline-none focus:bg-gray-900 
                       disabled:opacity-50 disabled:pointer-events-none 
                       dark:bg-white dark:text-neutral-800"
          >
            {submitLabel || "Save"}
          </button>
        </div>
      </form>
    </div>
  )
}

export default SuperheroForm
