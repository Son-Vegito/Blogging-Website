import { SignupSchema } from "@ultra-vegito/blogging-website"
import { useState } from "react"
import AuthHeader from "./AuthHeader"
import LabelledButton from "./LabelledButton"
import LabelledInput from "./LabelledInput"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { useNavigate } from "react-router-dom"
import LoaderButton from "./LoaderButton"

function SignupInner() {

    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)
    const [inputs, setInputs] = useState<SignupSchema>({
        email: '',
        password: '',
        name: ''
    })

    async function sendRequest() {

        setLoading(true)
        try {

            const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, inputs);
            const jwt = response.data.token;
            localStorage.setItem('token', jwt);
            navigate('/blogs')
        }
        catch (err) {
            alert('Something went wrong');

        }
        finally {
            setLoading(false)
        }

    }

    return (
        <div className="flex flex-col justify-center h-screen">
            <div className="flex justify-center">
                <div>
                    <div className="px-10">
                        <AuthHeader title="Create an Account" description="Already have an account?" link="Sign in" redirect="/signin" />
                    </div>
                    <div className="mt-8">
                        <LabelledInput label="Name" type="text" placeholder="Enter your Name" onChange={(e) => {
                            setInputs(c => ({
                                ...c,
                                name: e.target.value
                            }))
                        }} />
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

                        {
                            loading ? <LoaderButton /> : <LabelledButton title="Sign Up" onClick={sendRequest} />
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignupInner