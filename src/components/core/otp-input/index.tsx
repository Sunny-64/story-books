import { InputOTP as ShadcnInputOTP, InputOTPSlot, InputOTPGroup, InputOTPSeparator } from '@/lib/shadcn/ui/input-otp';
import { Fragment } from 'react/jsx-runtime';

export interface IOtpSlot {
    maxLength: number;
    pattern: string;
    numberOfInputGroups: number;
    customOtpSlotClasses?: string;
}

export const OtpInput: React.FC<IOtpSlot> = ({ maxLength, pattern, customOtpSlotClasses, numberOfInputGroups }) => {
    const slotsPerGroup = Math.ceil(maxLength / numberOfInputGroups);

    return (
        <ShadcnInputOTP maxLength={maxLength} pattern={pattern}>
            {Array.from({ length: numberOfInputGroups }).map((_, groupIndex) => (
                <Fragment key={groupIndex}>
                    <InputOTPGroup>
                        {Array.from({ length: slotsPerGroup }).map((_, slotIndex) => {
                            const slotNumber = groupIndex * slotsPerGroup + slotIndex;

                            return (
                                slotNumber < maxLength && (
                                    <InputOTPSlot
                                        key={slotNumber}
                                        index={slotNumber}
                                        className={`${customOtpSlotClasses} border-gray-300 data-[active=true]:border-accent data-[active=true]:ring-accent/50`}
                                    />
                                )
                            );
                        })}
                    </InputOTPGroup>
                    {groupIndex < numberOfInputGroups - 1 && <InputOTPSeparator />}
                </Fragment>
            ))}
        </ShadcnInputOTP>
    );
};