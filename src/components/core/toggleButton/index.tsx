import { Switch } from '@/components/ui/switch';

interface ToggleButtonProps {
  label: string;
  onClick?: () => void;
  enabled?: boolean;
  className?: string;
  containerClassName?: string;
  labelStyles?: string;
}

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  label,
  onClick,
  enabled = false,
  labelStyles,
  className,
  containerClassName,
}) => {
  return (
    <div className={`flex gap-4 ${containerClassName}`}>
      <label className={`${labelStyles}`}>{label} Mode</label>
      <Switch
        className={`group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-accent ${className}`}
        onClick={onClick}
        checked={enabled}
      >
        <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
      </Switch>
    </div>
  );
};
