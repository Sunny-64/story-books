import { Switch } from '@/lib/shadcn/ui/switch';

interface ToggleSwitchProps {
  label: string;
  onClick?: () => void;
  enabled?: boolean;
  className?: string;
  containerClassName?: string;
  labelStyles?: string;
}

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  label,
  onClick,
  enabled = false,
  labelStyles,
  className,
  containerClassName,
}) => {
  return (
    <div className={`flex gap-4 ${containerClassName}`}>
      <label className={`${labelStyles}`}>{label}</label>
      <Switch className={` ${className}`} onClick={onClick} checked={enabled} />
    </div>
  );
};
