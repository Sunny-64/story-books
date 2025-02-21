import placeholder_img from '../assets/images/Art.png';
import google_icon from '../assets/icons/Google.svg';
import facebook_icon from '../assets/icons/Facebook.svg';

const Login: React.FC = () => {
    return (
        <main className="min-h-screen grid grid-cols-1 gap-5 p-5 w-full">
            <div className="order-2 flex flex-col gap-5">
                <div className='space-y-2'>
                    <h1 className='text-2xl font-bold'>Welcome Back 👋</h1>
                    <p className='text-gray-500 text-sm'>Make your day special by reading and writing stories! Sign in to get started</p>
                </div>
                <form className='flex flex-col gap-5'>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="email" className='text-sm font-medium'>Email</label>
                        <input type="text" placeholder="example@mail.com" className='bg-tertiary border border-gray-300 px-3 py-2 rounded-md outline-none focus:border-accent' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="password" className='text-sm font-medium'>Password</label>
                        <input type="text" placeholder="at least 8 characters" className='bg-tertiary border border-gray-300 px-3 py-2 rounded-md outline-none focus:border-accent' />
                    </div>
                    <span className='text-end text-xs -mt-2'>Forgot Password?</span>
                    <button className='bg-accent px-3 py-2 text-white rounded-md'>Sign In</button>
                </form>
                <span className='custom-bars text-xs text-center'>Or sign in with</span>
                <div className='grid grid-cols-2 gap-5'>
                    <button className='bg-tertiary p-3 rounded-md flex items-center justify-center gap-3'>
                        <img src={google_icon} alt="Login with Google" />
                        <span>Google</span>
                    </button>
                    <button className='bg-tertiary p-3 rounded-md flex items-center justify-center gap-3'>
                        <img src={facebook_icon} alt="Login with Facebook" />
                        <span>Facebook</span>
                    </button>
                </div>
                <h1 className='text-center font-medium'>Do you have an account? <span className='text-accent'>Sign Up</span></h1>
            </div>
            <img src={placeholder_img} alt="Sign in page image" className="max-h-64 w-full object-cover object-top rounded-lg" />
        </main>
    );
}

export default Login;