import { Link } from "react-router-dom";
import Avatar from "./Avatar";

export default function Appbar() {
    return (
        <div className='border-b flex justify-between px-10 py-3'>
            <div className="flex items-center cursor-pointer">
                <Link to={'/blogs'}>
                    Blogging web
                </Link>
            </div>
            <div className="flex items-center">
                <Link to={'/publish'}>
                    <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none font-medium rounded-full text-sm px-4 py-1.5 text-center mr-3">
                        New
                    </button>
                </Link>

                <Avatar initial="d" size="big" />
            </div>
        </div>
    )
}
