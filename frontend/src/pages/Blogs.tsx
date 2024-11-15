import Appbar from "../components/Appbar"
import BlogCard from "../components/BlogCard"
import { useBlogs } from "../hooks"

function Blogs() {

    const { loading, blogs } = useBlogs();

    if (loading) {
        return (
            <div>
                loading...
            </div>
        )
    }

    return (
        <div>
            <Appbar />
            <div className="flex justify-center">
                <div className="w-screen max-w-xl">

                    {/* <BlogCard
                        authorName="dev"
                        title='Docker pros are shrinking images by 99%: The hidden techniques you can’t afford to miss'
                        publishedDate="12/12/2002"
                        content='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, quia delectus? Ipsum veritatis nesciunt quis quisquam enim exercitationem adipisci! Laboriosam similique necessitatibus adipisci quidem veniam, porro id impedit minus soluta debitis neque repellendus dicta laudantium officiis. Impedit vitae in perspiciatis aliquid beatae corporis sit enim nam nostrum, exercitationem earum? Earum assumenda possimus aperiam, deserunt impedit odio dolores cum molestiae fugit.'
                    /> */}
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