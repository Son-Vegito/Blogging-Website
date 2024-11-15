import Quote from "../components/Quote"
import SigninInner from "../components/SigninInner"

function Signin() {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div>
                <SigninInner />
            </div>
            <div className='hidden lg:block'>
                <Quote />
            </div>
        </div>
    )
}

export default Signin