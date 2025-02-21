import placeholder_img from '../assets/images/Art.png';
import google_icon from '../assets/icons/Google.svg';
import facebook_icon from '../assets/icons/Facebook.svg';

const Login: React.FC = () => {
    return (
        <main className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-5 p-5 w-full overflow-hidden justify-center items-center">
            <div className="order-2 md:order-1 flex flex-col gap-2 md:gap-4 w-full md:max-w-sm max-w-md mx-auto">
                <div className="space-y-2 text-left hidden md:block">
                    <h1 className="text-2xl md:text-3xl font-bold">Welcome Back 👋</h1>
                    <p className="text-gray-500 text-sm md:text-md">
                        Make your day special by reading and writing stories! Sign in to get started.
                    </p>
                </div>
                <form className="flex flex-col gap-4 md:gap-5 w-full">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="text-sm font-medium">Email</label>
                        <input
                            type="text"
                            placeholder="example@mail.com"
                            className="border border-gray-300 px-3 py-1.5 rounded-md outline-none focus:border-accent"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="password" className="text-sm font-medium">Password</label>
                        <input
                            type="password"
                            placeholder="At least 8 characters"
                            className="border border-gray-300 px-3 py-1.5 rounded-md outline-none focus:border-accent"
                        />
                    </div>
                    <span className="text-end text-xs -mt-2 cursor-pointer">Forgot Password?</span>
                    <button className="bg-accent px-3 py-2 text-white rounded-md cursor-pointer">Sign In</button>
                </form>

                <span className="custom-bars text-xs text-center w-full">Or sign in with</span>
                <div className="grid grid-cols-2 md:grid-cols-1 gap-4 w-full">
                    <button className="bg-tertiary p-2.5 rounded-lg flex items-center justify-center gap-2 cursor-pointer">
                        <img src={google_icon} alt="Login with Google" />
                        <span>Google</span>
                    </button>
                    <button className="bg-tertiary p-2.5 rounded-lg flex items-center justify-center gap-2 cursor-pointer">
                        <img src={facebook_icon} alt="Login with Facebook" />
                        <span>Facebook</span>
                    </button>
                </div>
                <h1 className="text-center font-medium">
                    Don't have an account? <span className="text-accent cursor-pointer">Sign Up</span>
                </h1>
            </div>

            <div className="w-full h-fit max-h-screen md:order-2 flex items-center justify-center overflow-hidden rounded-lg">
                <img
                    src={placeholder_img}
                    alt="Sign in page image"
                    className="w-md h-full max-h-48 md:max-h-screen object-cover object-top"
                />
            </div>
        </main>
    );
}

export default Login;