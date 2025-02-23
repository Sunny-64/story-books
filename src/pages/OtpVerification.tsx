import { InputOTPSlot } from "@/components/core/input-otp-slot";
import { InputOTP, InputOTPGroup, InputOTPSeparator } from "@/lib/shadcn/ui/input-otp";

const OtpVerification: React.FC = () => {
    return (
        <div className="flex justify-center items-center">
            <InputOTP maxLength={6} pattern="^[0-9]+$">
                <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                </InputOTPGroup>
            </InputOTP>
        </div>
    );
}

export default OtpVerification;