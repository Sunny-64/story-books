import { InputOTPSlot as ShadcnInputOTPSlot } from '@/lib/shadcn/ui/input-otp';

export interface IOtpSlot {
    index: number;
    customClasses?: string;
}

export const InputOTPSlot: React.FC<IOtpSlot> = ({ index, customClasses }) => {
    return (
        <ShadcnInputOTPSlot index={index} className={`${customClasses} data-[active=true]:border-accent data-[active=true]:ring-accent/50`} />
    );
}