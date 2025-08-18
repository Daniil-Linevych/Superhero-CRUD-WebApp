interface DescriptionProps{
    title: string,
    content: string,
    isQuote?: boolean
}

const DescriptionItem = ({title, content, isQuote = false}:DescriptionProps) => {
    return (
        <div className={`${isQuote ? 'pt-4 border-t border-gray-200 dark:border-neutral-700' : ""}`}>
            <h2 className="text-xs font-semibold uppercase text-gray-500 dark:text-neutral-400 mb-1">
                {title}
            </h2>
            <p className={`${isQuote ? 'italic' : ""} text-gray-800 dark:text-neutral-200`}>
                {isQuote ? `"${content || 'Unknown'}"` : content || 'Unknown'}
            </p>
        </div>
    )
}

export default DescriptionItem;