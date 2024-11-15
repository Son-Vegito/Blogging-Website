import { useParams } from "react-router-dom"
import FullBlog from "../components/FullBlog"
import { useBlog } from "../hooks";

function Blog() {

    const { id } = useParams()

    const { loading, blog } = useBlog({ id: id || '' });

    if (blog===undefined) {
        return (
            <div>
                Loading...
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