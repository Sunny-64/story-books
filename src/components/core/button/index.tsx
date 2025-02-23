export interface IButton {
  label: string;
  onClick?: () => void;
  customClasses?: string;
}

export const Button: React.FC<IButton> = ({ label, onClick, customClasses }) => {
  return (
    <div>
      <button
        className={`bg-accent py-2 px-4 rounded-sm font-medium text-secondary cursor-pointer ${customClasses}`}
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
};
