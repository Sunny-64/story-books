import { Button as ShadcnButton } from '@/lib/shadcn/ui/button';

export interface IButton {
  label: string;
  variant?: 'default' | 'link' | 'destructive' | 'outline' | 'secondary' | 'ghost' | null | undefined;
  size?: 'default' | 'sm' | 'lg' | 'icon' | null | undefined;
  onClick?: () => void;
  customClasses?: string;
}

export const Button: React.FC<IButton> = ({ label, onClick, variant = 'default', customClasses, size }) => {
  return (
    <div>
      <ShadcnButton
        className={`rounded-sm font-medium cursor-pointer ${customClasses}`}
        onClick={onClick}
        variant={variant}
        size={size}
      >
        {label}
      </ShadcnButton>
    </div>
  );
};
