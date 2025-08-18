import type { FieldError, UseFormRegisterReturn } from "react-hook-form"

interface TextInputProps {
  label: string
  placeholder?: string
  register: UseFormRegisterReturn
  error?: FieldError
  type?: string
}

const TextInput = ({ label, placeholder, register, error, type = "text" }: TextInputProps) => (
  <div className="max-w-sm">
    <label className="block text-sm font-medium mb-2 dark:text-white">
      {label}
    </label>
    <input
      type={type}
      {...register}
      placeholder={placeholder}
      className={`py-2.5 sm:py-3 px-4 block w-full border rounded-lg sm:text-sm 
                  focus:border-blue-500 focus:ring-blue-500 
                  dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 
                  dark:placeholder-neutral-500 dark:focus:ring-neutral-600
                  ${error ? "border-red-500" : "border-gray-200"}`}
    />
    {error && <p className="text-red-500 text-sm">{error.message}</p>}
  </div>
)

export default TextInput
