import type { FieldError, UseFormRegisterReturn } from "react-hook-form"

interface FileInputProps {
  label: string
  register: UseFormRegisterReturn
  error?: FieldError
  multiple?: boolean
}

const FileInput = ({ label, register, error, multiple = true }: FileInputProps) => (
  <div>
    <label className="block text-sm font-medium mb-2 dark:text-white">
      {label}
    </label>
    <input
      type="file"
      {...register}
      multiple={multiple}
      accept="image/*"
      className={`block w-full border shadow-sm rounded-lg text-sm 
                  focus:z-10 focus:border-blue-500 focus:ring-blue-500 
                  dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400
                  file:bg-gray-50 file:border-0 file:me-4 file:py-3 file:px-4
                  dark:file:bg-neutral-700 dark:file:text-neutral-400
                  ${error ? "border-red-500" : "border-gray-200"}`}
    />
    {error && <p className="text-red-500 text-sm">{error.message}</p>}
  </div>
)

export default FileInput
