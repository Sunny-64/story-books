import { InputOTPContainer } from "@/components/core/input-otp-slot";
import { REGEXP_ONLY_DIGITS } from "input-otp";

const OtpVerification: React.FC = () => {
    return (
        <div className="flex justify-center items-center">
            <InputOTPContainer maxLength={7} pattern={REGEXP_ONLY_DIGITS} numberOfInputGroups={2} />
        </div>
    );
}

export default OtpVerification;