import { useParams } from "react-router-dom"
import FullBlog from "../components/FullBlog"
import { useBlog } from "../hooks";
import FullBlogSkeleton from "../components/FullBlogSkeleton";

function Blog() {

    const { id } = useParams()

    const { loading, blog } = useBlog({ id: id || '' });

    if (blog === undefined || loading) {
        return (
            <div>
                <FullBlogSkeleton/>
            </div>
        )
    }

    return (
        <div>
            <FullBlog blog={blog} />
        </div>
    )
}

export default Blog