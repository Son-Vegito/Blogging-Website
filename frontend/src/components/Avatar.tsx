function Avatar({ initial, size }: { initial: string, size: 'small' | 'big' }) {
    
    return (
        <div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 ${size === 'small' ? 'w-6 h-6' : 'w-8 h-8'}`}>
            <span className={`${size === 'small' ? 'text-xs' : 'text-md'} text-gray-600 dark:text-gray-300`}>
                {initial.toUpperCase()}
            </span>
        </div>
    )
}

export default Avatar