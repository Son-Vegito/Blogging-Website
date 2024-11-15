
function BlogSkeleton() {
    return (
        <div className="p-4 pl-2 animate-pulse">
            <div className="flex items-center">
                <div className="flex items-center">
                    <svg className="w-6 h-6 text-gray-200 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                    </svg>
                </div>
                <div className="">
                    <div className="h-4 ms-2 bg-gray-200 rounded-full  w-24"></div>
                </div>
                <div className="pl-1">
                    <div className="h-3 bg-gray-200 rounded-full w-20"></div>
                </div>
            </div>
            <div className="pl-0 pt-2">
                <div className="h-7 bg-gray-300 rounded-full w-64"></div>
            </div>
            <div className="mt-2">
                <div className="h-5 bg-gray-200 rounded-full max-w-[500px]"></div>
            </div>
            <div className="pt-4">
                <div className="h-4 bg-gray-200 rounded-full max-w-[140px]"></div>
            </div>
        </div>
    )
}

export default BlogSkeleton