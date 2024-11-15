
import SignupInner from '../components/SignupInner'
import Quote from '../components/Quote'

function Signup() {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div>
                <SignupInner />
            </div>
            <div className='hidden lg:block'>
                <Quote />
            </div>
        </div>
    )
}

export default Signup