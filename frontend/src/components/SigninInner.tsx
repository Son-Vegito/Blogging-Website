import { SigninSchema } from "@ultra-vegito/blogging-website"
import { useState } from "react"
import AuthHeader from "./AuthHeader"
import LabelledButton from "./LabelledButton"
import LabelledInput from "./LabelledInput"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { useNavigate } from "react-router-dom"

function SigninInner() {

    const navigate = useNavigate();

    const [inputs, setInputs] = useState<SigninSchema>({
        email: '',
        password: '',
    })

    async function sendRequest() {

        try {

            const response = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, inputs);
            const jwt = response.data.token;
            localStorage.setItem('token', jwt);
            navigate('/blogs')
        }
        catch (err) {
            alert('Something went Wrong')
        }
    }

    return (
        <div className="flex flex-col justify-center h-screen">
            <div className="flex justify-center">
                <div>
                    <div >
                        <AuthHeader title="Sign into your account" description="Don't have an account?" link="Sign up" redirect="/signup" />
                    </div>
                    <div className="mt-8">
                        <LabelledInput label="Email" type="text" placeholder="Enter your Email" onChange={(e) => {
                            setInputs(c => ({
                                ...c,
                                email: e.target.value
                            }))
                        }} />
                        <LabelledInput label="Password" type="password" placeholder="Enter your Password" onChange={(e) => {
                            setInputs(c => ({
                                ...c,
                                password: e.target.value
                            }))
                        }} />

                        <LabelledButton title="Sign In" onClick={sendRequest} />

                    </div>
                </div>
            </div>
        </div>
    )
}


export default SigninInner