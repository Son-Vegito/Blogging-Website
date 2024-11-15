import { Link } from "react-router-dom";
import Avatar from "./Avatar";

export default function Appbar() {
    return (
        <div className='border-b flex justify-between px-10 py-3'>
            <Link to={'/blogs'}>
                <div className="flex items-center cursor-pointer">
                    Blogging web
                </div>
            </Link>
            <Avatar initial="d" size="big"/>
        </div>
    )
}
