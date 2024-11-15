import { Link } from 'react-router-dom'

type inputType = {
    title: string,
    description: string,
    link: string,
    redirect: string
}

function AuthHeader({ title, description, link, redirect }: inputType) {
    return (
        <div>
            <div className="text-2xl font-extrabold">
                {title}
            </div>
            <div className="text-sm text-center text-gray-500">
                {description}
                <Link to={redirect} className="pl-2 underline">
                    {link}
                </Link>
            </div>
        </div>
    )
}

export default AuthHeader