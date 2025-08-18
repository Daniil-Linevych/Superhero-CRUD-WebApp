
interface LoadingProps {
    count:number
}

const Loading  = ({count}:LoadingProps) => {
    return (
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4`}>
            {[...Array(count)].map((_, i) => (
                <div key={i} className="relative bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-900 dark:border-neutral-700 animate-pulse h-64">
                    <div className="bg-gray-200 dark:bg-neutral-700 h-full rounded-xl"></div>
                </div>
            ))}
        </div>
    )
}

export default Loading;