interface Props {
    error: string
}

const ErrorMessage  = ({error}:Props) => {
    return (
        <div className="p-4 text-red-500 bg-red-50 dark:bg-red-900/20 rounded-lg">
            Error: {error}
        </div>
    )
}

export default ErrorMessage;