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
                            {/* Docker pros are shrinking images by 99%: The hidden techniques you can’t afford to miss */}
                            {blog.title}
                        </div>
                        <div className="text-sm text-slate-400 pt-3">
                            Posted on 12 August, 02024
                        </div>
                        <div className="pt-2">
                            {blog.content}
                            {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, reprehenderit doloremque! Dolore nulla iure accusamus, quibusdam laborum magnam eos iusto! Non aut quae ex cumque, ab sit ipsa corrupti, officia reprehenderit similique nobis, eum corporis quasi fugiat est facilis tempore possimus libero dolore asperiores. Quo ex quisquam reprehenderit deserunt aliquam voluptas possimus hic harum eveniet fuga dolores magni quaerat saepe nemo corporis distinctio pariatur, laboriosam suscipit aperiam. Excepturi repellendus soluta ducimus accusamus deleniti repudiandae tempora fugit? Necessitatibus earum ad ut et quidem nesciunt harum? Explicabo accusamus in atque saepe quidem nihil ipsam quasi doloribus voluptatum ipsum ipsa soluta, quibusdam magnam. */}
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
                                {/* Devansh Gupta */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FullBlog

//     < BlogCard
// authorName = "dev"
// title = 'Docker pros are shrinking images by 99%: The hidden techniques you can’t afford to miss'
// publishedDate = "12/12/2002"
// content = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, quia delectus? Ipsum veritatis nesciunt quis quisquam enim exercitationem adipisci! Laboriosam similique necessitatibus adipisci quidem veniam, porro id impedit minus soluta debitis neque repellendus dicta laudantium officiis. Impedit vitae in perspiciatis aliquid beatae corporis sit enim nam nostrum, exercitationem earum? Earum assumenda possimus aperiam, deserunt impedit odio dolores cum molestiae fugit.'
//     />