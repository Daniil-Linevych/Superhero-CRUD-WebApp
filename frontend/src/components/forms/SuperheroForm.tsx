import { useForm } from "react-hook-form"
import type { SuperheroFormData } from "../../types/superhero"

import TextInput from "./inputs/TextInput"
import TextareaInput from "./inputs/TextareaInput"
import ExistingImages from "../image/ExistingImages"
import FileInput from "./inputs/FormInput"

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
        <TextInput 
          label="Nickname" 
          placeholder="Enter nickname" 
          register={register("nickname", { required: "Nickname is required" })} 
          error={errors.nickname} 
        />

        <TextInput 
          label="Real Name" 
          placeholder="Enter real name" 
          register={register("realName", { required: "Real Name is required" })} 
          error={errors.realName} 
        />

        <TextareaInput 
          label="Origin Description" 
          placeholder="Enter origin description" 
          register={register("originDescription")} 
          error={errors.originDescription} 
          rows={3} 
        />

        <TextareaInput 
          label="Superpowers" 
          placeholder="Enter superpowers" 
          register={register("superpowers")} 
          error={errors.superpowers} 
          rows={2} 
        />

        <TextInput 
          label="Catch Phrase" 
          placeholder="Enter catch phrase" 
          register={register("catchPhrase")} 
          error={errors.catchPhrase} 
        />

        <div className="md:col-span-2">
          <ExistingImages images={existingImages} onDelete={onImageDelete} />

          <FileInput
            label={existingImages.length > 0 ? "Add More Images" : "Upload Images"}
            register={register("images")}
            error={errors.images}
          />

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
