import placeholder_img from '../assets/images/Art.png';
import google_icon from '../assets/icons/Google.svg';
import facebook_icon from '../assets/icons/Facebook.svg';
import { Button } from '../components';

const SignUp: React.FC = () => {
    return (
        <main className="max-h-[90vh] grid grid-cols-1 md:grid-cols-2 gap-5 p-5 w-full overflow-hidden justify-center items-center">
            <div className="order-2 md:order-1 flex flex-col gap-2 md:gap-4 w-full md:max-w-sm max-w-md mx-auto">
                <div className="space-y-2 text-left hidden md:block">
                    <h1 className="text-2xl md:text-3xl font-bold">Get Started 📚</h1>
                    <p className="text-gray-500 text-sm md:text-md">
                        Make your day special by creating and account and reading or writing stories! Sign up to get started.
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
                    <div className="flex flex-col gap-1">
                        <label htmlFor="confirmPassword" className="text-sm font-medium">Confirm Password</label>
                        <input
                            type="password"
                            placeholder="Confirm your password"
                            className="border border-gray-300 px-3 py-1.5 rounded-md outline-none focus:border-accent"
                        />
                    </div>
                    <Button
                        label='Sign Up'
                        customClasses='w-full'
                    />
                </form>

                <span className="text-xs text-center w-full relative before:content-[''] before:absolute before:top-1/2 before:left-3 before:w-20 md:before:left-5 md:before:w-28 before:h-[1.1px] before:bg-gray-300 after:content-[''] after:absolute after:top-1/2 after:right-3 after:w-20 md:after:right-5 md:after:w-28 after:h-[1.1px] after:bg-gray-300">
                    Or sign up with
                </span>
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
                    Already have an account? <span className="text-accent cursor-pointer">Sign In</span>
                </h1>
            </div>

            <div className="w-full h-fit max-h-screen md:order-2 flex items-center justify-center overflow-hidden rounded-lg">
                <img
                    src={placeholder_img}
                    alt="Sign in page image"
                    className="w-md h-full max-h-36 md:max-h-screen object-cover"
                />
            </div>
        </main >
    );
}

export default SignUp;