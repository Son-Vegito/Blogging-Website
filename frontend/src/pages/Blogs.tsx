import Appbar from "../components/Appbar"
import BlogCard from "../components/BlogCard"
import BlogSkeleton from "../components/BlogSkeleton";
import { useBlogs } from "../hooks"

function Blogs() {

    const { loading, blogs } = useBlogs();

    if (loading) {
        return (
            <div>
                <Appbar />
                <div className="flex justify-center">
                    <div className="w-screen max-w-xl">
                        <BlogSkeleton/>
                        <BlogSkeleton/>
                        <BlogSkeleton/>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <Appbar />
            <div className="flex justify-center">
                <div className="w-screen max-w-xl">
                    {blogs.map((blog) => <BlogCard
                        id={blog.id}
                        authorName={blog.author.name || 'Anonymous'}
                        title={blog.title}
                        content={blog.content}
                        publishedDate="22/22/2001"
                    />)}
                </div>
            </div>
        </div>
    )
}

export default Blogs