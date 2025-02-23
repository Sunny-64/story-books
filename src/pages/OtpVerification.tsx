import { Button } from "@/components";
import { InputOTPContainer } from "@/components/core/input-otp-slot";
import { REGEXP_ONLY_DIGITS } from "input-otp";

const OtpVerification: React.FC = () => {
    return (
        <div className="min-h-[93vh] flex justify-center items-center">
            <div className="max-w-xs md:max-w-sm h-80 p-5 flex flex-col justify-center items-center rounded-md shadow-lg gap-5 border border-gray-300">
                <div className="flex flex-col items-center text-center gap-2">
                    <h1 className="text-3xl font-bold">OTP Verification</h1>
                    <p className="text-sm text-gray-500">Enter the 6-digit verification code that was sent to your email address.</p>
                </div>
                <InputOTPContainer maxLength={6} pattern={REGEXP_ONLY_DIGITS} numberOfInputGroups={2} />
                <Button label="Verify Account" variant={'default'} />
                <p className="text-sm text-gray-500">Didn&apos;t receive the code? <span className="text-accent font-medium cursor-pointer">Resend</span></p>
            </div>
        </div>
    );
}

export default OtpVerification;