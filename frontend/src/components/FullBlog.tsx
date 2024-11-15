import { Blog } from "../hooks"
import Appbar from "./Appbar"
import Avatar from "./Avatar"

function FullBlog({blog}:{blog:Blog}) {
    return (
        <div>
            <Appbar/>
            <div className="flex justify-center">
                <div className="grid grid-cols-7 p-16 w-full max-w-screen-2xl">
                    <div className="col-span-5">
                        <div className="text-5xl font-extrabold">
                            {blog.title}
                        </div>
                        <div className="text-sm text-slate-400 pt-3">
                            Posted on 12 August, 02024
                        </div>
                        <div className="pt-2">
                            {blog.content}
                        </div>
                    </div>
                    <div className="col-span-2 p-2">
                        <div className="text-md text-slate-600 pb-2">
                            Author
                        </div>
                        <div className="flex justify-start">
                            <div className="flex flex-col justify-center">
                                <Avatar initial={blog.author.name?blog.author.name[0]:'A'} size="big"/>
                            </div>
                            <div className="font-bold text-xl p-3">
                                {blog.author.name ? blog.author.name :'Anonymous'}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FullBlog