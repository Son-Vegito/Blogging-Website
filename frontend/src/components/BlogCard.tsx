import { Link } from "react-router-dom"
import Avatar from "./Avatar"

type BlogCardProps = {
    authorName: string,
    title: string,
    content: string,
    publishedDate: string
    id: string
}

function BlogCard({ authorName, title, content, publishedDate, id }: BlogCardProps) {
    return (
        <Link to={`/blog/${id}`}>
            <div className="border-b border-slate-200 p-4 cursor-pointer">
                <div className="flex items-center">
                    <div className="flex items-center">
                        <Avatar initial={authorName[0]} size="small" />
                    </div>
                    <div className="font-light pl-2 text-sm">
                        {authorName}
                    </div>
                    <div className="flex justify-center pl-1 flex-col">
                        <Circle />
                    </div>
                    <div className="font-thin text-slate-500 pl-1 text-sm">
                        {publishedDate}
                    </div>
                </div>
                <div className="text-xl font-semibold pt-2">
                    {title}
                </div>
                <div className="font-thin text-md">
                    {content.slice(0, Math.min(40, content.length)) + '...'}
                </div>
                <div className="text-slate-400 text-sm font-thin pt-4">
                    {`${Math.ceil(content.length / 100)} minute(s) read`}
                </div>
            </div>
        </Link>
    )
}

function Circle() {

    return (
        <div className="h-1 w-1 rounded-full bg-slate-300">
        </div>
    )
}

export default BlogCard