import axios from "axios"
import Appbar from "../components/Appbar"
import { BACKEND_URL } from "../config"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Publish() {
    return (
        <div>
            <Appbar />
            <div className="flex justify-center w-full">
                <div className="max-w-screen-md w-full pt-8">
                    <TextArea />
                </div>
            </div>
        </div>
    )
}

function TextArea() {

    const navigate = useNavigate();

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    return (

        <div>
            <input onChange={(e) => {
                setTitle(e.target.value)
            }} type="text" id="small-input" className="block w-full p-3 px-5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50   focus:border-blue-500 text-2xl" placeholder="Title" />

            <div className="my-3 w-full mb-4 border border-gray-200 rounded-lg bg-gray-50">
                <div className="px-4 py-3 rounded-b-lg border border-gray-300 rounded-lg bg-gray-50">
                    <textarea onChange={(e) => {
                        setContent(e.target.value)
                    }} rows={8} className="block w-full px-0 text-md text-gray-800 outline-none bg-gray-50" placeholder="Write an article..." ></textarea>
                </div>
            </div>

            <button onClick={async() => {
                const response = await axios.post(`${BACKEND_URL}/api/v1/blog`,{
                    title,
                    content
                },{
                    headers:{
                        Authorization: localStorage.getItem('token')
                    }
                })
                const id = response.data.blogId
                navigate(`/blog/${id}`)
            }} className="mt-3 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200hover:bg-blue-800">
                Publish
            </button>
        </div>

    )
}

export default Publish