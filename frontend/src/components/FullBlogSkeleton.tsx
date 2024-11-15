import Appbar from "./Appbar"

function FullBlogSkeleton() {
    return (
        <div>
            <Appbar />
            <div className="flex justify-center animate-pulse">
                <div className="grid grid-cols-7 p-16 w-full max-w-screen-2xl">
                    <div className="col-span-5">
                        <div className="space-y-2.5">
                            <div className="flex items-center max-w-[520px]">
                                <div className="h-11 bg-gray-300 rounded-full w-full"></div>
                                <div className="h-11 ms-2 bg-gray-200 rounded-full w-96"></div>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="h-11 bg-gray-200 rounded-full w-96"></div>
                                <div className="h-11 ms-2 bg-gray-300 rounded-full w-full"></div>
                                <div className="h-11 ms-2 bg-gray-200 rounded-full w-96"></div>
                            </div>
                            <div className="flex items-center w-full max-w-[740px]">
                                <div className="h-11 bg-gray-300 rounded-full w-full"></div>
                                <div className="h-11 ms-2 bg-gray-200 rounded-full w-80"></div>
                                <div className="h-11 ms-2 bg-gray-300 rounded-full w-full"></div>
                            </div>
                        </div>
                        <div className="mt-2.5">
                            <div className="h-4 bg-gray-200 rounded-full max-w-[210px]"></div>
                        </div>
                        <div className="mt-4 space-y-2.5">
                            <div className="flex items-center w-full">
                                <div className="h-3.5 bg-gray-200 rounded-full w-32"></div>
                                <div className="h-3.5 ms-2 bg-gray-300 rounded-full w-24"></div>
                                <div className="h-3.5 ms-2 bg-gray-300 rounded-full w-full"></div>
                            </div>
                            <div className="flex items-center w-full max-w-[700px]">
                                <div className="h-3.5 bg-gray-200 rounded-full w-full"></div>
                                <div className="h-3.5 ms-2 bg-gray-300 rounded-full w-full"></div>
                                <div className="h-3.5 ms-2 bg-gray-300 rounded-full w-full"></div>
                                <div className="h-3.5 ms-2 bg-gray-300 rounded-full w-24"></div>
                            </div>
                            <div className="flex items-center w-full max-w-[360px]">
                                <div className="h-3.5 bg-gray-300 rounded-full w-full"></div>
                                <div className="h-3.5 ms-2 bg-gray-200 rounded-full w-80"></div>
                                <div className="h-3.5 ms-2 bg-gray-300 rounded-full w-full"></div>
                            </div>
                            <div className="flex items-center w-full max-w-[540px]">
                                <div className="h-3.5 bg-gray-300 rounded-full w-full"></div>
                                <div className="h-3.5 ms-2 bg-gray-200 rounded-full w-80"></div>
                                <div className="h-3.5 ms-2 bg-gray-300 rounded-full w-full"></div>
                            </div>
                            <div className="flex items-center w-full max-w-[800px]">
                                <div className="h-3.5 bg-gray-200 rounded-full w-full"></div>
                                <div className="h-3.5 ms-2 bg-gray-300 rounded-full w-full"></div>
                                <div className="h-3.5 ms-2 bg-gray-300 rounded-full w-24"></div>
                                <div className="h-3.5 ms-2 bg-gray-200 rounded-full w-full"></div>
                            </div>
                            <div className="flex items-center w-full max-w-[440px]">
                                <div className="h-3.5 bg-gray-300 rounded-full w-32"></div>
                                <div className="h-3.5 ms-2 bg-gray-300 rounded-full w-24"></div>
                                <div className="h-3.5 ms-2 bg-gray-200 rounded-full w-full"></div>
                            </div>
                            <div className="flex items-center w-full max-w-[700px]">
                                <div className="h-3.5 bg-gray-200 rounded-full w-full"></div>
                                <div className="h-3.5 ms-2 bg-gray-300 rounded-full w-full"></div>
                                <div className="h-3.5 ms-2 bg-gray-300 rounded-full w-full"></div>
                                <div className="h-3.5 ms-2 bg-gray-300 rounded-full w-24"></div>
                            </div>
                            <div className="flex items-center w-full max-w-[360px]">
                                <div className="h-3.5 bg-gray-300 rounded-full w-full"></div>
                                <div className="h-3.5 ms-2 bg-gray-200 rounded-full w-72"></div>
                                <div className="h-3.5 ms-2 bg-gray-300 rounded-full w-full"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 p-2">
                        <div className="mt-2">
                            <div className="h-4 bg-gray-200 rounded-full w-20"></div>
                        </div>
                        <div className="flex justify-start items-center mt-2">
                            <div className="flex items-center">
                                <svg className="w-8 h-8 text-gray-200 mt-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                                </svg>
                            </div>
                            <div className="mt-1.5 p-3 flex items-bottom justify-end ">
                                <div className="h-5 bg-gray-300 rounded-full w-32"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FullBlogSkeleton